import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import cards from './modules/cards'
import comments from './modules/comments'

export const store = new Vuex.Store({
  modules: {
    cards, comments
  }
})
