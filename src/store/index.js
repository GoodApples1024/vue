import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    add (state, n) {
      state.count += n
    },
    reduce (state) {
      state.count -= 1
    }
  },
  getters: {
    count: function (state) {
      state.count += 100
      return state.count
    }
  }
})

export default store
