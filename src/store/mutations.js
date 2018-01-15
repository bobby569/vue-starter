import * as types from './types';

export default {
  [types.SIGN_IN](state, payload) {
    state.user = payload;
  },
  [types.SIGN_OUT](state) {
    state.user = {};
  }
};
