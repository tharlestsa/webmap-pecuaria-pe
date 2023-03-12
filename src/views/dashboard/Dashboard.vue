<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <div class="display-4 text-center">Observatório do Estado Social Brasileiro</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
      >
        <v-img
          :src="require(`@/assets/${'banner-observatorio.jpg'}`)"
          style="border-style: none;"
          class="mt-5"
        ></v-img>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="6"
      >
        <v-card-title style="text-align: center; font-size: 28px"></v-card-title>
        <v-card-text class="text--primary">
          <div
            class="paragraph"
            style="line-height:1.8em;"
          >
            <p>Olhe para os lados. Quem nunca deu passagem na rua para uma ambulância do SAMU? Quem nunca observou um idoso adquirindo medicamentos em uma Farmácia Popular? Quem nunca levou o filho em uma campanha de vacinação?
              Continue, como uma criança curiosa, espiando o entorno. Observe idosos pobres e pessoas com deficiência e pergunte-se como sobreviveriam sem o Benefício de Prestação Continuada?</p>
            <p>Pense no que a mesa posta do almoço revela. A Aposentadoria Rural e o Programa de Fortalecimento da Agricultura Familiar garantiram a redução da pobreza, o aumento na produtividade agrícola e a segurança alimentar para todo o país.</p>
             <p> Abaixe os vidros do seu carro para sentir a atmosfera da cidade. O Bolsa Família, programa de transferência de renda majoritariamente urbano, alivia a fome de milhões de pessoas.</p>
            <p>Agora mire para o espelho. Pense na escola pública que estudou ou na universidade pública onde conseguiu a profissão que lhe permitiu, no mínimo, alimentar a expectativa de mobilidade social.
            </p>
          </div>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="headline">Cadastro para notificação de novos dados</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Nome*"
                    required
                    v-model="download.nome"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    type="email"
                    v-model="download.email"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Instituição*"
                    v-model="download.instituicao"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    label="Estado*"
                    :items="states"
                    @change="setCountyDialog"
                    item-text="nome"
                    item-value="cd_geocuf"
                    required
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-autocomplete
                    @change="getCountyDialog"
                    :items="countiesDialog"
                    :filter="filterCounties"
                    item-color="secondary"
                    color="secondary"
                    label="Município"
                    item-text="nome"
                    item-value="cd_geocmu"
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*preenchimento obrigatório</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >CANCELAR</v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="getDataFromDownForm()"
            >ENVIAR</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
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
  export default {
    name: 'Dashboard',

    mounted () {
      this.fecth()
      this.getStates()
      window.onresize = () => {
        this.windowHeight = window.innerHeight - 250
      }
      this.checkSession();
    },
    data () {
      return {
        zoom: 4.5,
        center: [-50.065145, -12.211180],
        rotation: 0,
        states: [],
        countiesDialog: [],
        dialog: false,
        geolocPosition: undefined,
        users: { },
        windowHeight: window.innerHeight - 250,
        download: {
          type: null,
          nome: null,
          email: null,
          instituicao: null,
          estado: null,
          cidade: null,
        },
        snackbar:{
          color: '',
          mode: '',
          show: false,
          text: '',
          timeout: 6000,
        },
      }
    },
    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
      checkSession(){
        if (!this.$session.exists()) {
          this.dialog = true;
        }else if(this.$session.has('hasRegister') && this.$session.get('hasRegister') > 0){
          this.dialog = false;
        }else{
          this.dialog = true;
        }
      },
      async fecth () {
        const resp = await this.$http.get('users')
        this.users = resp.data
      },
      setCountyDialog( state ) {
        this.getCounties( state )
        this.download.estado = state
      },
      getCountyDialog(county){
        this.download.cidade = county;
      },
      async getCounties (state = null) {
        let stateValue = state != null ? state : this.state;
        try {
          const resp = await this.$http.get('/cdu/counties/' + stateValue)
          this.countiesDialog = resp.data
        } catch (e) {
          console.error(e)
        }
      },
      filterCounties (item, queryText, itemText) {
        const textOne = this.removeAccents(item.nome.toLowerCase())
        const searchText = this.removeAccents(queryText.toLowerCase())
        return textOne.indexOf(searchText) > -1
      },
      async getStates () {
        try {
          const resp = await this.$http.get('/bfa/states')
          this.states = resp.data
        } catch (e) {
          console.error(e)
        }
      },
      async getDataFromDownForm(){
        this.download.type = 'contato'
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

        if(validate(this.download)){
          this.dialog = false;
          if(validateEmail(this.download.email)){
            let resp = await this.requestDownload();
            if(resp.hasOwnProperty('id')){
              if(resp.id > 0){
                this.$session.start()
                this.$session.set('hasRegister', resp.id)
                this.dialog = false;
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
    },
    computed: {
    },
  }
</script>

<style lang="sass" scoped>

</style>
