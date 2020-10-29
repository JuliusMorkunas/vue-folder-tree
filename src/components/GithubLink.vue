<template>
  <v-tooltip left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        target="_blank"
        rel="noopener"
        :href="href"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </template>
    <span>View on GitHub</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'GithubLink',
  props: {
    href: String,
  },
};
</script>
