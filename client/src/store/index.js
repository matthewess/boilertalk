import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
  isLoggedIn: false,
  pending: false,
  loginError: false,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: true,
});
