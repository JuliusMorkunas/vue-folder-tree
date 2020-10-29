import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import FolderTree from '@/components/FolderTree';
import folderTree from '@/store/modules/folderTree';

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

describe('FolderTree.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });

  test('renders empty tree with initial state', async () => {
    const wrapper = mount(FolderTree, {
      store: new Vuex.Store({
        modules: {
          folderTree,
        },
      }),
      localVue,
      vuetify,
    });
    const tree = wrapper.find('.v-treeview');
    expect(tree.element.hasChildNodes()).toBeFalsy();
  });

  test('renders tree according to state', async () => {
    const items = [
      { id: '1', name: 'Folder 1' },
      { id: '2', name: 'Folder 2' },
    ];

    const wrapper = mount(FolderTree, {
      store: new Vuex.Store({
        modules: {
          folderTree: {
            ...folderTree,
            state: {
              items,
            },
          },
        },
      }),
      localVue,
      vuetify,
    });
    const tree = wrapper.find('.v-treeview');
    expect(tree.element.children.length).toBe(items.length);
  });
});
