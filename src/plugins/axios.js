import Vue from 'vue'
import axios from 'axios'
import urls from '../urls.js'

const baseDomain = urls.api
const baseURL = `${baseDomain}/`

Vue.prototype.$http = axios.create({
  baseURL,
})
