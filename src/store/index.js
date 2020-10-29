import Vue from 'vue';
import Vuex from 'vuex';
import folderTree from './modules/folderTree';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    folderTree,
  },
  strict: debug,
});
