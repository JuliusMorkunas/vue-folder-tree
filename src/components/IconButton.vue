<template>
  <v-btn v-bind="$props" color="primary" depressed fab x-small dark>
    <v-icon><slot /></v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'IconButton',
};
</script>
