<template>
  <v-footer
    id="dashboard-core-footer"
  >
    <v-container>
      <v-row
        justify="center"
      >
        <v-img
          align="center"
          id="footer"
          :src="require(`@/assets/${'footer.png'}`)"
          position="center"
          class="mt-5 "
          contain
        ></v-img>
      </v-row>
      <v-row
        align="center"
        no-gutters
      >
        <v-spacer class="hidden-sm-and-down" />
        <v-col
          cols="12"
        >
          <div class="body-1 mt-4 font-weight-light pt-10 pt-md-0 text-center">
            ©{{ new Date().getFullYear() }} Webmap Pecuária Pernambuco
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'DashboardCoreFooter',

    data: () => ({
      links: [
        {
          href: '#',
          text: 'Creative Tim',
        },
        {
          href: '#',
          text: 'About Us',
        },
        {
          href: '#',
          text: 'Blog',
        },
        {
          href: '#',
          text: 'Licenses',
        },
      ],
    }),
  }
</script>

<style lang="sass">
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
  #footer
    max-width: 50%
    max-min: 100%

  .theme--light .v-footer
    background-color: #eee !important
  @media screen and (max-width: 800px)
    #footer
      max-width: 98%

</style>
