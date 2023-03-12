<template>
  <div>
    <div
      id="map"
    ></div>
    <div
      id="popup"
      class="ol-popup"
    >
      <a
        @click="closer"
        href="#"
        id="popup-closer"
        class="ol-popup-closer"
      ></a>
      <base-material-stats-card
        id="card-map"
        color="primary"
        icon="mdi-map-marker"
        :title="'' +infoName"
        :value="infoValue"
        :smallValue="infoValue2"
        sub-icon="mdi-clock"
        :sub-text="'Ano: ' + infoYear"
      />
      <div id="popup-content">
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */

  import "ol/ol.css";
  import Map from "ol/Map";
  import View from "ol/View";
  import Print from 'ol-ext/control/Print'
  import 'ol-ext/control/Print.css'
  import Graticule from 'ol/layer/Graticule';
  import TileJSON from 'ol/source/TileJSON';
  import { saveAs } from 'file-saver';
  import Overlay from 'ol/Overlay';
  import { defaults as defaultControls, FullScreen, Control, ScaleLine} from "ol/control";
  import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
  import {OSM, Vector as VectorSource} from 'ol/source';
  import TileWMS from 'ol/source/TileWMS';
  import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
  import GeoJSON from 'ol/format/GeoJSON';
  import MaskFilter from 'ol-ext/filter/Mask';
  import jsPDF from 'jspdf'

  import pdfMake from 'pdfmake/build/pdfmake';
  import pdfFonts from 'pdfmake/build/vfs_fonts';
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  import logo from './utils/logo'

  const image = new CircleStyle({
    radius: 5,
    fill: null,
    stroke: new Stroke({color: 'red', width: 1})
  });
  const LegendControl = (function (Control) {
    const LegendControl =function(opt_options) {
      const options = opt_options || {};

      const button = document.createElement('button');
      button.innerHTML = 'LEGENDA';

      const img = document.createElement('img');
      img.className = 'legend-control-img';
      img.src = opt_options.legendUrl;
      img.alt = 'legenda';

      const element = document.createElement('div');
      element.className = 'legend-control ol-unselectable ol-control';
      element.appendChild(button);
      element.appendChild(img);

      Control.call(this, {
        element: element,
        target: options.target
      });
    };

    if ( Control ) LegendControl.__proto__ = Control;
    LegendControl.prototype = Object.create( Control && Control.prototype );
    LegendControl.prototype.constructor = LegendControl;

    return LegendControl;
  }(Control));

  export default {
    props: ['url', 'params', 'legendUrl', 'mainTitle', 'title', 'source', 'year'],
    data: () => ({
      loading: false,
      map: {},
      tileWms: {},
      view: {},
      overlay :{},
      wms :{},
      zoom: 4.58,
      currentZoom: null,
      currentExtent: null,
      infoName: '',
      infoValue: '',
      infoValue2:'',
      infoYear: '',
      center: [-52.868145, -14.211180],
      styles:  {
        'Point': new Style({
          image: image
        }),
        'LineString': new Style({
          stroke: new Stroke({
            color: 'green',
            width: 1
          })
        }),
        'MultiLineString': new Style({
          stroke: new Stroke({
            color: 'green',
            width: 1
          })
        }),
        'MultiPoint': new Style({
          image: image
        }),
        'MultiPolygon': new Style({
          stroke: new Stroke({
            color: '#bc433a',
            width: 5
          }),
          fill: new Fill({
            color: 'rgba(99,255,150,0)'
          })
        }),
        'Polygon': new Style({
          stroke: new Stroke({
            color: 'blue',
            lineDash: [4],
            width: 3
          }),
          fill: new Fill({
            color: 'rgba(0, 0, 255, 0.1)'
          })
        }),
        'GeometryCollection': new Style({
          stroke: new Stroke({
            color: 'magenta',
            width: 2
          }),
          fill: new Fill({
            color: 'magenta'
          }),
          image: new CircleStyle({
            radius: 10,
            fill: null,
            stroke: new Stroke({
              color: 'magenta'
            })
          })
        }),
        'Circle': new Style({
          stroke: new Stroke({
            color: 'red',
            width: 2
          }),
          fill: new Fill({
            color: 'rgba(255,0,0,0.2)'
          })
        })
      },
      layersCurrency:[
        'observatorio:resumo_brasil_bfa_valor_total_mun',
        'observatorio:resumo_mun_bfa_valor_total_mun',
        'observatorio:resumo_mun_alim_valor_total',
        'observatorio:resumo_brasil_alim_valor_total',
        'observatorio:resumo_brasil_prev_vlbe',
        'observatorio:resumo_brasil_prev_vlbe_aposentadoria_invalidez',
        'observatorio:resumo_brasil_prev_vlbe_aposentadoria_tempo_contribuicao',
        'observatorio:resumo_brasil_prev_vlbe_aposentadorias_idade',
        'observatorio:resumo_brasil_prev_vlbe_clientela_rural',
        'observatorio:resumo_brasil_prev_vlbe_clientela_urbana',
        'observatorio:resumo_brasil_prev_vlbe_dezembro',
        'observatorio:resumo_brasil_prev_vlbe_dezembro_clientela_rural',
        'observatorio:resumo_brasil_prev_vlbe_dezembro_clientela_urbana',
        'observatorio:resumo_brasil_prev_vlbe_pensao_por_morte',
        'observatorio:resumo_mun_prev_vlbe',
        'observatorio:resumo_mun_prev_vlbe_aposentadoria_invalidez',
        'observatorio:resumo_mun_prev_vlbe_aposentadoria_tempo_contribuicao',
        'observatorio:resumo_mun_prev_vlbe_aposentadorias_idade',
        'observatorio:resumo_mun_prev_vlbe_clientela_rural',
        'observatorio:resumo_mun_prev_vlbe_clientela_urbana',
        'observatorio:resumo_mun_prev_vlbe_dezembro',
        'observatorio:resumo_mun_prev_vlbe_dezembro_clientela_rural',
        'observatorio:resumo_mun_prev_vlbe_dezembro_clientela_urbana',
        'observatorio:resumo_mun_prev_vlbe_pensao_por_morte',
        'observatorio:resumo_brasil_crd_pronaf_valor_contratos',
        'observatorio:resumo_brasil_crd_pronamp_valor_contratos',
        'observatorio:resumo_mun_crd_pronaf_valor_contratos',
        'observatorio:resumo_mun_crd_pronamp_valor_contratos'
      ],
      isPercent: [
        'observatorio:resumo_brasil_trab_adm_publica',
        'observatorio:resumo_mun_trab_adm_publica',
        'observatorio:resumo_brasil_trab_fun_publico_estadual',
        'observatorio:resumo_mun_trab_fun_publico_estadual',
        'observatorio:resumo_brasil_trab_fun_publico_federal',
        'observatorio:resumo_mun_trab_fun_publico_federal',
        'observatorio:resumo_brasil_trab_fun_publico_municipal',
        'observatorio:resumo_mun_trab_fun_publico_municipal',
        'observatorio:resumo_brasil_trab_fun_publico_total',
        'observatorio:resumo_mun_trab_fun_publico_total',
        'observatorio:resumo_brasil_prev_ptbe_populacao_total',
        'observatorio:resumo_mun_prev_ptbe_populacao_total',
      ],
      isNotPercent: [
        'observatorio:resumo_brasil_trab_adm_publica',
        'observatorio:resumo_mun_trab_adm_publica',
      ]
    }),
    mounted() {
      this.initiateMap()
      // const filter = new MaskFilter({ feature: features[0], inner: false, fill: new Fill({ color: [0, 0, 0, 0.55] }) })
      // this.map.addFilter(filter)
    },
    watch: {
      mainTitle: {
        handler: function (mainTitle) {
          this.mainTitle = mainTitle;
        },
        deep: true
      },
      params: {
        handler: function (params) {
          this.params = params;
          this.resetExtent()
          this.clear();
        },
        deep: true
      },
      title: {
        handler: function (title) {
          this.title = title;
        },
        deep: true
      },
      source: {
        handler: function (source) {
          this.source = source;
        },
        deep: true
      },
      year: {
        handler: function (year) {
          this.year = year;
        },
        deep: true
      },
      legendUrl: {
        handler: function (legendUrl) {
          this.legendUrl = legendUrl;
          let self = this;
          this.map.getControls().forEach(function(control, index) {
            if (index > 7) {
              self.map.removeControl(control);
            }
          });
          this.map.addControl(new LegendControl({legendUrl:this.legendUrl}));
        },
        deep: true
      },
    },
    methods: {
      initiateMap() {
        let self = this;

        // create title layer
        const base = new TileLayer({
          source: new OSM(),
        });

        const highlightStyle = new Style({
          fill: new Fill({
            color: 'rgba(255,255,255,0.7)'
          }),
          stroke: new Stroke({
            color: '#3399CC',
            width: 3
          })
        });

        this.tileWms = new TileWMS({
          crossOrigin: 'anonymous',
          attributions: 'Observatório do Estado Social do Brasil',
          url: this.url,
          params: this.params,
          serverType: 'geoserver',
          transition: 0
        })

        this.wms = new TileLayer({
          opacity: 0.65,
          source: this.tileWms
        });

        this.view = new View({
          projection: 'EPSG:4326',
          center: this.center,
          minZoom: 2,
          zoom: this.zoom,
        });

        /**
         * Elements that make up the popup.
         */
        var container = document.getElementById('popup');

        /**
         * Create an overlay to anchor the popup to the map.
         */
        this.overlay = new Overlay({
          element: container,
          autoPan: true,
          autoPanAnimation: {
            duration: 10
          }
        });
        const printControl = new Print();

        const graticule =   new Graticule({
          // the style to use for the lines, optional.
          strokeStyle: new Stroke({
            color: 'rgb(188,29,15)',
            width: 0.8,
            lineDash: [0.5, 4]
          }),
          lonLabelPosition: 0,
          latLabelPosition: 1,
          showLabels: true,
          wrapX: false,
        });

        // create map with 2 layer
        this.map = new Map({
          controls: defaultControls().extend([
            new FullScreen(),
            new LegendControl({legendUrl:this.legendUrl}),
            printControl,
            new ScaleLine(),
            graticule
          ]),
          target: "map",
          overlays: [this.overlay],
          layers: [base, this.wms],
          view: this.view,
        });

        this.map.on('pointermove', function(evt) {
          var viewResolution = (self.view.getResolution());
          var url = self.tileWms.getFeatureInfoUrl(
            evt.coordinate,
            viewResolution,
            'EPSG:4326',
            { 'QUERY_LAYERS': self.params.layers,'INFO_FORMAT': 'application/json'});
          if (url) {
            fetch(url)
              .then(function (response) { return response.text()})
              .then(async function (json) {

                self.map.getLayers().forEach(function (layer, index) {
                  if (index > 1) {
                    self.map.removeLayer(layer);
                  }
                });
                let geojson = JSON.parse(json)

                const vectorSource = new VectorSource({
                  features: (new GeoJSON()).readFeatures(geojson)
                });

                var vectorLayer = new VectorLayer({
                  source: vectorSource,
                  name: 'vector',
                  style: self.styleFunction
                });
                var coordinate = evt.coordinate;
                if( geojson.features.length > 0){
                  let properties = geojson.features[0].properties;
                  self.map.addLayer(vectorLayer)
                }
              });
          }
        });
        this.map.on('singleclick', function(evt) {
          var viewResolution = (self.view.getResolution());
          var url = self.tileWms.getFeatureInfoUrl(
            evt.coordinate,
            viewResolution,
            'EPSG:4326',
            { 'QUERY_LAYERS': self.params.layers,'INFO_FORMAT': 'application/json'});
          if (url) {
            fetch(url)
              .then(function (response) { return response.text()})
              .then(async function (json) {

                self.map.getLayers().forEach(function (layer, index) {
                  if (index > 1) {
                    self.map.removeLayer(layer);
                  }
                });
                let geojson = JSON.parse(json)

                const vectorSource = new VectorSource({
                  features: (new GeoJSON()).readFeatures(geojson)
                });

                var vectorLayer = new VectorLayer({
                  source: vectorSource,
                  name: 'vector',
                  style: self.styleFunction
                });
                var coordinate = evt.coordinate;
                if( geojson.features.length > 0){
                  let properties = geojson.features[0].properties;
                  if(properties.hasOwnProperty('cd_geocuf')){
                    try {
                      const resp = await self.$http.get('/bfa/info/estados/cd_geocuf/' + properties.cd_geocuf )
                      self.infoName = resp.data.nome
                    } catch (e) {
                      console.error(e)
                    }
                    let currency = self.layersCurrency.includes(self.params.layers) ? 'R$ ' : ''
                    self.infoValue = currency
                    self.infoValue += '' + (self.isNotPercent.includes(self.params.layers) ? self.$options.filters.numFormat(properties.valor, (currency !== '') ? '0.0[,]00' : '0.0') : self.$options.filters.numFormat(properties.valor, '0.0[,]00'));

                  }else{
                    try {
                      const resp = await self.$http.get('/bfa/info/municipios/cd_geocmu/' + properties.cd_geocmu )
                      self.infoName =  resp.data.nome
                    } catch (e) {
                      console.error(e)
                    }
                    let currency = self.layersCurrency.includes(self.params.layers) ? 'R$ ' : ''
                    self.infoValue = currency
                    self.infoValue += '' + (self.isNotPercent.includes(self.params.layers) ? self.$options.filters.numFormat(properties.valor, (currency !== '') ? '0.0[,]00' : '0.0') : self.$options.filters.numFormat(properties.valor, '0.0[,]00'));
                  }

                  // if (self.params.layers.includes('trab_') && !self.isNotPercent.includes(self.params.layers)){
                  //   self.infoValue += '%';
                  //   self.infoValue2 = '\nVínculos: ' + self.$options.filters.numFormat(properties.vinculos);
                  // }

                  self.infoYear = properties.ano;
                  self.overlay.setPosition(coordinate);

                }
              });
          }
        });
        printControl.on(['print', 'error'], async function(e) {
          await self.printMap(e.image)
        });
      },
      async getBase64ImageFromUrl(imageUrl) {
        var res = await fetch(imageUrl);
        var blob = await res.blob();

        return new Promise((resolve, reject) => {
          var reader  = new FileReader();
          reader.addEventListener("load", function () {
            resolve(reader.result);
          }, false);

          reader.onerror = () => {
            return reject(this);
          };
          reader.readAsDataURL(blob);
        })
      },
      async printMap(mapImage){
        let self = this;
        let dd = {
          pageSize: 'A4',
          // by default we use portrait, you can change it to landscape if you wish
          pageOrientation: 'landscape',

          // [left, top, right, bottom]
          pageMargins: [ 30, 20, 0, 20 ],

          // header: {
          //   margin:[ 30, 0, 0, 0],
          //
          // },
          footer: function (currentPage, pageCount) {
            return {
              table: {
                widths: '*',
                body: [
                  [
                    { text: 'http://obsestadosocial.com.br/', alignment: 'left', style: 'textFooter', margin: [30, 0, 0, 0]},
                    { text: self.$moment().format('DD/MM/YYYY HH:mm:ss'), alignment: 'right', style: 'textFooter', margin: [0, 0, 30, 0]},
                    // { text: 'Página ' + currentPage.toString() + ' de ' + pageCount, alignment: 'right', style: 'textFooter', margin: [0, 0, 60, 0]},
                  ],
                ]
              },
              layout: 'noBorders'
            };
          },
          content: [
            {
              columns: [
                {
                  image: logo.image,
                  width: 140,
                  margin:[ 0, 0, 0, 0],
                  alignment: 'left'
                },
                {
                  // [left, top, right, bottom]
                  alignment: 'left',
                  margin:[ 120, 15, 0, 0],
                  text: self.mainTitle.toUpperCase(),
                  style: 'titleReport',
                },
              ]
            },
            {
              columns: [
                [
                  {
                    // [left, top, right, bottom]
                    margin: [ 0, 25, 0, 0 ],
                    image: mapImage,
                    width: 600,
                    alignment: 'left'
                  },
                  {text:'FONTE: ' + this.source, alignment: 'center', style: 'textImglegend', margin:[ 0, 5, 0, 0]},
                ],
                [
                  {text: self.title, margin: [ 5, 80, 480, 0 ], alignment: 'center'},
                  {text: self.year, margin: [ 5, 20, 480, 0 ], alignment: 'center', style: 'textLegend'},
                  // {text: 'PROJEÇÂo EPSG:4326', margin: [ 5, 20, 480, 0 ], alignment: 'center', style: 'textLegend'},
                  {text: 'ESCALA: ' + document.querySelector(".ol-scale-line-inner").outerText, margin: [ 5, 20, 480, 0 ], alignment: 'center', style: 'textLegend'},
                  {text:'LEGENDA', margin: [ 5, 40, 480, 0 ], alignment: 'left', style: 'textLegend'},
                  {
                    margin: [ 5, 0, 0, 0 ],
                    image: await this.getBase64ImageFromUrl(this.legendUrl),
                    width: 140,
                    alignment: 'left',
                  }
                ]
              ]
            },
          ],
          styles: {
            titleReport: {
              fontSize: 16,
              bold: true
            },
            textFooter: {
              fontSize: 9
            },
            textImglegend: {
              fontSize: 7
            },
            textLegend: {
              fontSize: 10
            },
            header: {
              fontSize: 18,
              bold: true,
              margin: [0, 0, 0, 10]
            },
            data: {
              bold: true,
            },
            subheader: {
              fontSize: 16,
              bold: true,
              margin: [0, 10, 0, 5]
            },
            codCar: {
              fontSize: 11,
              bold: true,
            },
            textObs: {
              fontSize: 11,
            },
            tableDpat: {
              margin: [0, 5, 0, 15],
              fontSize: 11,
            },
            tableHeader: {
              bold: true,
              fontSize: 13,
              color: 'black'
            },
            metadata:{
              background: '#0b4e26',
              color: '#fff'
            }
          }
        }
        pdfMake.createPdf(dd).download('Mapa.pdf');
      },
      resetExtent (clearZoom = false){
        if(clearZoom){
          this.view.setZoom(this.zoom)
          this.view.setCenter(this.center)
          this.closer()
        }
        let self = this;
        this.map.getLayers().forEach(function (layer, index) {
          if(layer.get('name') === 'vector'){
            self.map.removeLayer(layer);
          }
        });
      },

      styleFunction (feature) {
        return this.styles[feature.getGeometry().getType()];
      },
      closer() {
        this.overlay.setPosition(undefined);
        return false;
      },
      clear () {
        this.tileWms.refresh();
      }
    },
  };
</script>
<style>
  #map {
    margin: 0;
    padding: 0;
    width: 100%;
    height: calc((1400px) * 0.4625);

  }
  .ol-viewport {
    -moz-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important;
    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important;
  }
  #map .ol-attribution li {
    font-size: 12px;
  }
  #nav {
    padding: 30px;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .ol-popup {
    position: absolute;
    background-color: white;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    bottom: 12px;
    left: -50px;
    min-width: 20vw;
  }
  #popup-closer{
    color: #bc433a !important;
    margin-top: 6px;
  }
  .ol-popup:after, .ol-popup:before {
    top: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  .ol-popup:after {
    border-top-color: white;
    border-width: 10px;
    left: 48px;
    margin-left: -10px;
  }
  .ol-popup:before {
    border-top-color: #cccccc;
    border-width: 11px;
    left: 48px;
    margin-left: -11px;
  }
  .ol-popup-closer {
    text-decoration: none;
    position: absolute;
    top: 2px;
    right: 8px;
  }
  .ol-popup-closer:after {
    content: "✖";
  }
  .legend-control {
    bottom: 15px;
    left: 10px;
    width: 170px;
    height: 160px;
  }
  .legend-control button{
    width: 100% !important;
  }
  .legend-control-img{
    max-width: 100%;
    width: 100%;
    height: 127px;
  }

  .ol-control.ol-print {
    top: 4.5em !important;
    left: 0.5em !important;
  }

  .ol-scale-line{
    bottom: 180px;
    left: 20px;
    background: #bc433aad !important;
  }

  .ol-control button {
    background-color: rgb(188, 67, 58);
  }
  .ol-control button:hover {
    background-color: rgba(188, 67, 58, 0.42);
  }

  .ol-control.ol-print button:before{
    content: "PDF";
    font-size: 11px;
    width: .9em;
    height: .35em;
    position: fixed;
    display: contents;

  }

  .ol-control.ol-print button:after{
    content: "";
    font-size: 8px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
  }

  @media only screen and (max-width: 800px) {
    #map {
      height: calc((900px) * 0.4625);
    }
  }
</style>
