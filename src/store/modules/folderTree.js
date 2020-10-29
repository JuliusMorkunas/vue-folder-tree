import { v4 as uuid } from 'uuid';

// Mutation names
const ADD_PARENT_FOLDER = 'ADD_PARENT_FOLDER';
const ADD_CHILD_FOLDER = 'ADD_CHILD_FOLDER';

const state = {
  items: [],
};

const actions = {
  addParentFolder({ commit }, name) {
    commit(ADD_PARENT_FOLDER, name);
  },

  addChildFolder({ commit }, payload) {
    commit(ADD_CHILD_FOLDER, payload);
  },
};

const mutations = {
  [ADD_PARENT_FOLDER](state, name) {
    state.items.push({ id: uuid(), name, children: [] });
  },

  [ADD_CHILD_FOLDER](state, { item, name }) {
    item.children.push({
      id: uuid(),
      name,
      children: [],
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
