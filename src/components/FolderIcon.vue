<template>
  <v-icon>
    {{ isOpen ? 'mdi-folder-open' : 'mdi-folder' }}
  </v-icon>
</template>

<script>
export default {
  name: 'FolderIcon',
  props: {
    isOpen: Boolean,
  },
};
</script>
