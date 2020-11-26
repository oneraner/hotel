import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roomid: '',
  },
  mutations: {
    saveId (state, id) {
      state.roomid = id
    },
  },
  actions: {
  },
  modules: {
  },
});
