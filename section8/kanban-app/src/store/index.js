import { createStore } from "vuex";
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  strict: prpcess.env.NODE_ENV !== 'production'
});
