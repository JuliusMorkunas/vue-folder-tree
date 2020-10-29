<template>
  <div>
    <FolderAddDialog :on-submit="addParentFolder">
      <Button class="mb-8">Add folder</Button>
    </FolderAddDialog>
    <v-treeview :items="items" transition open-on-click>
      <template v-slot:prepend="{ open }">
        <FolderIcon :is-open="open" />
      </template>
      <template v-slot:label="{ item }">
        {{ item.name }}
      </template>
      <template v-slot:append="{ item }">
        <FolderAddDialog
          :parent-name="item.name"
          :on-submit="name => addChildFolder({ item, name })"
        >
          <IconButton
            class="mx-1"
            :title="`Add folder to &quot;${item.name}&quot;`"
          >
            mdi-plus
          </IconButton>
        </FolderAddDialog>
      </template>
    </v-treeview>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import FolderAddDialog from '@/components/FolderAddDialog';
import FolderIcon from '@/components/FolderIcon';

export default {
  name: 'FolderTree',

  components: { Button, IconButton, FolderAddDialog, FolderIcon },

  computed: mapState('folderTree', ['items']),

  methods: mapActions('folderTree', ['addParentFolder', 'addChildFolder']),
};
</script>
