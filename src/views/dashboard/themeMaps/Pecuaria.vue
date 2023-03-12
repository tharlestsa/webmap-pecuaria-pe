<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <base-material-card
      :title="'Dados espacializados do Programa de Aquisição de Alimentos '"
    >
      <v-row>
        <v-col
          cols="12"
          sm="3"
        >
          <v-col
            cols="12"
          >
            <v-select
              @change="setLayer"
              color="secondary"
              item-color="secondary"
              label="Dado"
              v-model="layerDefault"
              autocomplete
              :items="layers"
              item-text="label"
              item-value="tablename"
            >
            </v-select>
          </v-col>
          <v-col
            cols="12"
          >
            <v-switch
              v-model="showAllCounties"
              label="Exibir dados de todos os municípios"
            />
          </v-col>
          <v-col
            cols="12"
          >
            <v-select
              v-if="showAllCounties == false"
              @change="setCounty"
              color="secondary"
              item-color="secondary"
              label="Estado"
              v-model="stateDefault"
              autocomplete
              :items="states"
              item-text="nome"
              item-value="cd_geocuf"
            >
            </v-select>
          </v-col>
          <v-col
            v-if="counties.length > 0"
            cols="12"
          >
            <v-autocomplete
              @change="getCounty"
              :items="counties"
              :filter="filterCounties"
              item-color="secondary"
              v-model="countyDefalut"
              color="secondary"
              label="Município"
              item-text="nome"
              item-value="cd_geocmu"
            ></v-autocomplete>
          </v-col>
          <v-col
            cols="12"
          >
            <v-btn
              @click="setViewDefault"
            >LIMPAR SELEÇÂO</v-btn>
          </v-col>
          <v-col
            cols="12"
          >
<!--            <v-text-field-->
<!--              label="Ano"-->
<!--              filled-->
<!--              v-model="year"-->
<!--              disabled-->
<!--            />-->
            <v-select
              color="secondary"
              item-color="secondary"
              label="Ano"
              v-model="year"
              :items="years"
            >
            </v-select>
          </v-col>
          <v-col
            cols="12"
          >
            <v-text-field
              label="Total"
              filled
              :value="total| numFilter | numFormat('0,0[.]00')"
              disabled
            />
          </v-col>
<!--          <v-col-->
<!--            cols="12"-->
<!--          >-->
<!--            <v-btn-->
<!--              @click="handleDownloads('csv')"-->
<!--            >CSV</v-btn>-->
<!--            <v-btn-->
<!--              @click="handleDownloads('shape-zip')"-->
<!--            >SHP</v-btn>-->
<!--          </v-col>-->
          <v-col
            cols="12"
          >
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-card-title>Descrição</v-card-title>

              <v-card-text class="text--primary">
                <div style="text-align: justify">O Programa de Aquisição de Alimentos (PAA) foi criado a partir do Art.19 da Lei nº 10.696, de 02 de julho de 2003, no contexto do Programa Fome Zero, sendo alterado pela Lei nº 12.512, de 14 de outubro de 2011, passando a integrar o Sistema Nacional de Segurança Alimentar e Nutricional (SISAN). Dentre as ações contidas na apresentação institucional do PAA, destacam-se: a criação de circuitos locais de abastecimento alimentar; a formação de estoques de alimentos para assistência alimentar a populações específicas (como aquelas atingidas por catástrofes ou populações escolares em insegurança alimentar); fortalecimento da agricultura familiar e suas organizações econômicas; e promoção do desenvolvimento local por meio da compra direta de alimentos com preços mais justos, garantindo renda para os agricultores familiares.</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-col>
        <v-col
          cols="12"
          sm="9"
        >
          <base-material-tabs color="warning">
            <v-tab
              @change="callCharts"
              v-for="(tab, i) in tabs"
              :key="i"
            >
              {{ tab }}
            </v-tab>

            <v-tab-item>
              <v-card
                id="card-map"
                flat
                class="my-0"
              >
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <v-progress-linear
                        v-if="loading"
                        indeterminate
                        color="teal"
                      ></v-progress-linear>
                      <v-map
                        ref="vmap"
                        :mainTitle="'Programa de Aquisição de Alimentos'"
                        :title="getLayerName()"
                        :source="source"
                        :year="year"
                        :url="wms.url"
                        :legend-url="wms.legendUrl"
                        :params="wms.params"
                      ></v-map>
                      <p
                        style="font-size: 13px"
                        class="mt-1"
                      >Dado: {{getLayerName()}} Fonte: {{source}}
                      </p>
                      <vue-slider
                        class="mt-11"
                        :marks="true"
                        v-model="year"
                        :data="years"
                        :process="true"
                      >
                      </vue-slider>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-row>
                <v-col
                  class="px-4"
                  cols="12"
                >
                  <v-card
                    class="elevation-16"
                    raised
                  >
                    <div id="chart">
                      <apexchart
                        :key="chartLine"
                        ref="lineChart"
                        type="area"
                        height="400"
                        :options="chartOptionsLine"
                        :series="chartOptionsLine.series"
                      ></apexchart>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  class="px-4"
                  cols="12"
                >
                  <v-card
                    class="elevation-16"
                    raised
                  >
                    <div
                      id="chart-bar"
                    >
                      <apexchart
                        :key="chartBar"
                        type="bar"
                        height="400"
                        :options="chartOptionsBar"
                        :series="chartOptionsBar.series"
                      ></apexchart>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>
          </base-material-tabs>
        </v-col>
      </v-row>
    </base-material-card>
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      right
      multi-line
      :timeout="snackbar.timeout"
      top
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="snackbar.show = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
  /* eslint-disable */
  import pt_br from './utils/pt-br'
  import urls from "../../../urls";
  import Map from './Map'
  export default {
    name: 'Alimentacao',
    components: {
      'v-map': Map,
    },
    data: () => ({
      loading: false,
      dialog: false,
      showAllCounties: false,
      tab: 0,
      layer: {},
      layers: [],
      layerDefault: {
        tablename: 'alim_valor_total',
        label: 'Valor Total',
      },
      year: 0,
      years: [],
      source: '',
      total: 0,
      state: null,
      states: [],
      stateDefault: {},
      statesDialog: [],
      counties: [],
      county: null,
      countyDefalut: {},
      countiesDialog: [],
      tabs: [
        'Mapa',
        'Gráficos',
      ],
      cql_default: 'ano = 2019',
      layerBaseUrlBrasil: 'observatorio:resumo_brasil_',
      layerBaseUrlMun: 'observatorio:resumo_mun_',
      legendBaseUrlBrasil: urls.geoserver + '/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=18&HEIGHT=18&legend_options=fontName:Fira%20Sans%20SemiBold;fontAntiAliasing:true;fontColor:0x000033;fontSize:14;dpi:80&LAYER=observatorio:resumo_brasil__layer_&style=observatorio:resumo_brasil__style_',
      legendBaseUrlMun: urls.geoserver + '/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=18&HEIGHT=18&legend_options=fontName:Fira%20Sans%20SemiBold;fontAntiAliasing:true;fontColor:0x000033;fontSize:14;dpi:80&LAYER=observatorio:resumo_mun__layer_&style=observatorio:resumo_mun__style_',
      wms: {
        url: urls.geoserver + '/geoserver/wms',
        legendUrl: '',
        attribution: '',
        params: {
          layers: '',
          format: 'image/png',
          tiled: true,
          styles:'',
          CQL_FILTER: 'ano = 2019',
        },
        serverType: 'geoserver',
        transition: 0,
      },
      chartLine: 0,
      chartOptionsLine: {
        locales: [pt_br],
        defaultLocale: 'pt-br',
        series: [{
          name: "Valor",
          data:[]
        }],
        chart: {
          height: 350,
          type: 'area',
          zoom: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: '',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
          },
        },
        yaxis: {
          labels: {
            formatter: {}
          },
        },

        xaxis: {
          categories: [],
        }
      },
      chartBar: 0,
      chartOptionsBar: {
        series: [{
          name: '',
          data: []
        }],
        chart: {
          type: 'bar',
          height: 400,
          zoom: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '80%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: '',
          align: 'left'
        },
        stroke: {
          show: true,
          width: 10,
          colors: ['transparent']
        },
        yaxis: {
          labels: {
            formatter: {}
          },
        },
        xaxis: {
          categories: [],
        },
        fill: {
          opacity: 1
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val
            }
          }
        }
      },
      snackbar:{
        color: '',
        mode: '',
        show: false,
        text: '',
        timeout: 6000,
      },
      download: {
        type:null,
        nome: null,
        email: null,
        instituicao:null,
        estado:null,
        cidade:null,
        dado:null
      }
    }),
    watch: {
      year: function (year) {
        this.getSource()
        this.getTotal()
        this.handleFilters()
        if(this.showAllCounties){
          this.changeViewAllCounties()
        }
      },
      showAllCounties: function (value) {
        if(value){
          this.changeViewAllCounties()
        }else{
          this.setViewDefault()
        }
      }
    },
    computed: {
    },
    async mounted () {
      this.getStates()
      this.getLayers()
      this.setLayer('alim_valor_total')
      this.configChartLine()
      this.configChartBar()
    },
    filters: {
      numFilter: function (value) {
        return value.toString().replace('.',',');
      }
    },
    methods: {
      changeViewAllCounties(){
        this.wms.params.layers = this.layerBaseUrlMun + this.layer
        this.wms.params.styles = this.layerBaseUrlMun+ this.layer + '_' + this.year
        this.wms.legendUrl = this.legendBaseUrlMun.replace('_layer_', this.layer).replace('_style_', this.layer + '_' + this.year)
        if(this.$refs.hasOwnProperty('vmap')){
          this.$refs.vmap.resetExtent()
        }
      },
      track () {
        this.$gtag.event('action', {
            'event_category': 'category',
            'event_label': 'Layer',
            'value':this.layer
        })
      },
      getLayerName(){
        let label;
        if(this.layers.length < 1){
          label = this.layerDefault.label.toUpperCase();
        }else{
          label = this.layers.find(layer => layer.tablename === this.layer).label.toUpperCase();
        }
        return label;
      },
      configChartLine (){
        this.getChartLineData()

        let label = '';
        let from = '';

        if(this.layers.length < 1){
          label = this.layerDefault.label.toUpperCase();
        }else{
          label = this.layers.find(layer => layer.tablename === this.layer).label.toUpperCase();
        }

        let hasValues = [
          'alim_valor_total'
        ]

        if(this.state == null){
          from = 'NO BRASIL'
        }else{
          if(this.county != null){
            from = ' - ' + this.counties.find(county => county.cd_geocmu === this.county).nome.toUpperCase() + ' - ' + this.states.find(state => state.cd_geocuf === this.state).nome.toUpperCase()
          }else{
            from = ' - ' + this.states.find(state => state.cd_geocuf === this.state).nome.toUpperCase()
          }
        }
        let layer = this.layers.find(layer => layer.tablename === this.layer);
        this.chartOptionsLine.series[0].name = label
        this.chartOptionsLine.yaxis.labels.formatter = (value) => { return hasValues.includes(layer.tablename)  ? 'R$ ' + value.toLocaleString(): value.toLocaleString()}
        this.chartOptionsLine.title.text = label + ' POR ANO '  + from
        this.chartLine++

      },
      configChartBar (){
        this.getChartBarData()

        let label = '';
        let from = '';

        if(this.layers.length < 1){
          label = this.layerDefault.label.toUpperCase();
        }else{
          label = this.layers.find(layer => layer.tablename === this.layer).label.toUpperCase();
        }

        let hasValues = [
          'alim_valor_total'
        ]

        if(this.state == null){
          from = 'NO BRASIL'
        }else{
          if(this.county != null){
            from = ' - ' + this.states.find(state => state.cd_geocuf === this.state).nome.toUpperCase()
          }else{
            from = ' - ' + this.states.find(state => state.cd_geocuf === this.state).nome.toUpperCase()
          }
        }
        let layer = this.layers.find(layer => layer.tablename === this.layer);
        this.chartOptionsBar.series[0].name = label
        this.chartOptionsBar.yaxis.labels.formatter = (value) => { return hasValues.includes(layer.tablename) ? 'R$ ' + value.toLocaleString(): value.toLocaleString()}
        this.chartOptionsBar.tooltip.y.formatter = (value) => { return hasValues.includes(layer.tablename)  ? 'R$ ' + value.toLocaleString(): value.toLocaleString()}
        this.chartOptionsBar.title.text = ' RANKING DO '  + label + ' ' +  from + ' EM ' + this.year
        this.chartBar++

      },
      callCharts () {
        this.configChartLine()
        this.configChartBar()
        this.$refs.vmap.resetExtent()
      },
      handleFilters () {
        this.wms.params.CQL_FILTER = 'ano = ' + this.year
        if (this.state) {
          this.wms.params.CQL_FILTER += ' AND uf = ' + this.state
          this.wms.params.styles = this.layerBaseUrlMun + this.layer + '_' + this.year
          this.wms.legendUrl = this.legendBaseUrlMun.replace('_layer_', this.layer).replace('_style_', this.layer + '_' + this.year)
          if (this.county) {
            this.wms.params.CQL_FILTER += ' AND cd_geocmu = ' + this.county
          }
        }else{
          this.wms.params.styles = this.layerBaseUrlBrasil + this.layer + '_' + this.year
          this.wms.legendUrl = this.legendBaseUrlBrasil.replace('_layer_', this.layer).replace('_style_', this.layer + '_' + this.year)
        }
      },
      async getDataFromDownForm(){
        let validate = function (target) {
          for (var member in target) {
            if (target[member] == null || target[member] == '')
              return false;
          }
          return true;
        };

        let validateEmail = function(email) {
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
        };

        let urls = {
          'csv':urls.geoserver + '/geoserver/wfs?request=GetFeature&service=WFS&version=1.0.0&typeName=_layer_&outputFormat=csv&CQL_FILTER=_filter_',
          'shape-zip':process.env.VUE_APP_GEOSERVER_URL || 'https://geoserver.spatialize.com.br' + '/geoserver/wfs?request=GetFeature&service=WFS&version=1.0.0&typeName=_layer_&outputFormat=shape-zip&CQL_FILTER=_filter_'
        };

        this.download.dado = this.layer;

        if(validate(this.download)){
          this.dialog = false;
          if(validateEmail(this.download.email)){
            let resp = await this.requestDownload();
            if(resp.hasOwnProperty('id')){
              if(resp.id > 0){
                let url = urls[this.download.type].replace('_layer_', this.wms.params.layers).replace('_filter_', this.wms.params.CQL_FILTER);
                let fileLink = document.createElement('a');
                fileLink.href = url;
                fileLink.setAttribute('file', this.download.dado+'.'+this.download.type);
                document.body.appendChild(fileLink);
                fileLink.click();
              }
            }
          }else{
            this.snackbar.show = true;
            this.snackbar.text = 'E-mail incorreto!';
            this.snackbar.color = 'error'
            this.dialog = true;
          }
        }else{
          this.snackbar.show = true;
          this.snackbar.text = 'Dados incompletos!';
          this.snackbar.color = 'error'
          this.dialog = true;
        }
      },
      handleDownloads(type){
        this.dialog = true;
        this.download.type = type;
        this.$gtag.event('Download', {
          'event_category': type,
          'event_label': this.layer,
          'value':this.layer
        })
      },
      setLayer (layer) {
        this.setViewDefault()
        this.layer = layer
        this.showAllCounties = false;
        this.getYears()
        this.wms.params.layers = this.layerBaseUrlBrasil + this.layer
        this.wms.params.styles = this.layerBaseUrlBrasil + this.layer + '_' + this.year
        this.wms.legendUrl = this.legendBaseUrlBrasil.replace('_layer_', this.layer).replace('_style_', this.layer + '_' + this.year)
        this.handleFilters()
        this.configChartLine()
        this.configChartBar()

        this.$gtag.event('View Layer', {
          'event_category': 'Alimentacao',
          'event_label': this.layer,
          'value':this.layer
        })
      },
      setCounty (state = null) {
        this.county = null
        if(this.$refs.hasOwnProperty('vmap')){
          this.$refs.vmap.resetExtent()
        }
        if (state) {
          this.county = null
          this.state = state
          this.wms.params.layers = this.layerBaseUrlMun + this.layer
          this.wms.params.styles = this.layerBaseUrlMun+ this.layer + '_' + this.year
          this.wms.legendUrl = this.layerBaseUrlMun.replace('_layer_', this.layer).replace('_style_', this.layer + '_' + this.year)
          this.handleFilters()
          this.getCounties()
          this.getTotal()
          this.configChartLine()
          this.configChartBar()
        }
      },
      setCountyDialog(state) {
        this.getCounties(state)
        this.download.estado = state;
      },
      getCounty (county = null) {
        if (county) {
          this.county = county
          this.wms.params.layers = this.layerBaseUrlMun + this.layer
          this.wms.params.styles = this.layerBaseUrlMun+ this.layer + '_' + this.year
          this.wms.legendUrl = this.layerBaseUrlMun.replace('_layer_', this.layer).replace('_style_', this.layer + '_' + this.year)
          this.handleFilters()
          this.getTotal()
          this.configChartLine()
        }
      },
      getCountyDialog(county){
        this.download.cidade = county;
      },
      setViewDefault () {
        this.year = this.years[this.years.length - 1]
        this.stateDefault = {}
        this.countyDefalut = {}
        this.counties = []
        this.state = null
        this.county = null
        this.wms.params.layers = this.layerBaseUrlBrasil + this.layer
        this.wms.params.styles = this.layerBaseUrlBrasil+ this.layer + '_' + this.year
        this.wms.legendUrl = this.legendBaseUrlBrasil.replace('_layer_', this.layer).replace('_style_', this.layer + '_' + this.year)
        this.wms.params.CQL_FILTER = this.cql_default
        if(this.$refs.hasOwnProperty('vmap')){
          this.$refs.vmap.resetExtent(true)
        }
        this.getTotal()
        this.configChartLine()
        this.configChartBar()
      },
      filterCounties (item, queryText, itemText) {
        const textOne = this.removeAccents(item.nome.toLowerCase())
        const searchText = this.removeAccents(queryText.toLowerCase())
        return textOne.indexOf(searchText) > -1
      },
      removeAccents (str) {
        const accents = 'ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž'
        const accentsOut = 'AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz'
        str = str.split('')
        str.forEach((letter, index) => {
          const i = accents.indexOf(letter)
          if (i !== -1) {
            str[index] = accentsOut[i]
          }
        })
        return str.join('')
      },
      async getYears () {
        try {
          const resp = await this.$http.get('/alim/years/' + this.layer)
          this.years = resp.data
          this.year = resp.data[this.years.length - 1]
          this.getSource()
          this.getTotal()
        } catch (e) {
          console.error(e)
        }
      },
      async getSource () {
        try {
          const resp = await this.$http.get('/alim/source/' + this.layer + '/' + this.year)
          this.source = resp.data.fonte
          //teste
        } catch (e) {
          console.error(e)
        }
      },
      async getTotal () {
        try {

          let filters = '/'

          if(this.state){
            filters += this.state
            if(this.county){
              filters += '/' + this.county
            }else{
              filters += '/null'
            }
          }else{
            filters += 'null/null'
          }

          if(typeof this.layer == 'string'){
            const resp = await this.$http.get('/alim/total/' + this.layer + '/' + this.year + filters)
            this.total = resp.data.sum
          }
        } catch (e) {
          console.error(e)
        }
      },
      async getChartLineData () {
        try {
          if(this.year == 0){
            return ;
          }
          let filters = '/'

          if(this.state){
            filters += this.state
            if(this.county){
              filters += '/' + this.county
            }else{
              filters += '/null'
            }
          }else{
            filters += 'null/null'
          }
          const resp = await this.$http.get('/alim/chart/line/' + this.layer + filters)

          this.chartOptionsLine.series[0].data = resp.data.map(item => Number(item.valor))
          this.chartOptionsLine.xaxis.categories = resp.data.map(item => String(item.ano))
          this.chartLine++
        } catch (e) {
          console.error(e)
        }
      },
      async getChartBarData () {
        try {
          if(this.year == 0){
            return ;
          }
          let filters = '/'

          if(this.state){
            filters += this.state
          }else{
            filters += 'null'
          }
          const resp = await this.$http.get('/alim/chart/bar/' + this.layer + '/' + this.year + filters)
          this.chartOptionsBar.series[0].data = resp.data.map(item => Number(item.valor))
          this.chartOptionsBar.xaxis.categories = resp.data.map(item => String(item.nome))
          this.chartBar++
        } catch (e) {
          console.error(e)
        }
      },
      async getStates () {
        try {
          const resp = await this.$http.get('/alim/states')
          this.states = resp.data
        } catch (e) {
          console.error(e)
        }
      },
      async getCounties (state = null) {
        let stateValue = state != null ? state : this.state;

        try {
          const resp = await this.$http.get('/cdu/counties/' + stateValue)
          this.counties       = resp.data
          this.countiesDialog = resp.data
        } catch (e) {
          console.error(e)
        }
      },
      async getLayers () {
        try {
          const resp = await this.$http.get('/alim/layers')
          this.layers = resp.data
        } catch (e) {
          console.error(e)
        }
      },
      async fecth () {
        try {
          const resp = await this.$http.get('/alim/data')
          this.users = resp.data
        } catch (e) {
          console.error(e)
        }
      },
      async requestDownload() {
        let response = null;
        try {
          const resp = await this.$http.post('/download/create', this.download)
          response = resp.data
        } catch (e) {
          console.error(e)
        }

        return response;
      },
    },
  }
</script>

<style lang="sass">
  #vl-map-map
    -moz-border-radius: 30px
    border-radius: 30px
  #legend
    position: absolute
    right: 10px
    bottom: 10px
    z-index: 10000
    width: 100px
    height: 100px
    border-radius: 10px
    background-color: #FFFFFF
</style>
