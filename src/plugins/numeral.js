import Vue from 'vue'
import numeral from 'numeral'
import 'numeral/locales'
import numFormat from 'vue-filter-number-format'

// // load a locale
numeral.register('locale', 'br', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'mil',
    million: 'mi',
    billion: 'bi',
    trillion: 'tri',
  },
  currency: {
    symbol: 'R$ ',
  },
})

// switch between locales
numeral.locale('br')

Vue.filter('numFormat', numFormat(numeral))
