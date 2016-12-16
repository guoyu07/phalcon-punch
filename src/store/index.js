import Vue from 'vue'
import Vuex from 'vuex'

import inquiries from './modules/inquiries'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    inquiries
  }
})
