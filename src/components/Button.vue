<template>
  <v-btn v-bind="$props" depressed color="primary">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'Button',
};
</script>
