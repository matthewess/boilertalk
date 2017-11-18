import * as types from './mutation-types';

export default {
  [types.LOGIN](state) {
    state.pending = true;
  },
  [types.LOGIN_SUCCESS](state) {
    state.isLoggedIn = true;
    state.pending = false;
    state.loginError = false;
  },
  [types.LOGIN_FAILURE](state) {
    state.pending = false;
    state.loginError = true;
  },
  [types.LOGOUT](state) {
    state.isLoggedIn = false;
  },
};
