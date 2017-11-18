import loginApi from '@/api/loginApi';
import * as types from './mutation-types';

export const login = ({ commit }, payload) => {
  commit(types.LOGIN);
  return loginApi
    .login(payload)
    .then((response) => {
      console.log(response);
      commit(types.LOGIN_SUCCESS);
      return true;
    });
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
};
