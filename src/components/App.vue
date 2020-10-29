<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Folder tree</v-toolbar-title>
      <v-spacer></v-spacer>
      <GithubLink :href="githubRepoUrl" />
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <FolderTree />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import FolderTree from '@/components/FolderTree';
import GithubLink from '@/components/GithubLink';

export default {
  name: 'App',

  components: {
    FolderTree,
    GithubLink,
  },

  data: () => ({
    githubRepoUrl: process.env.VUE_APP_GITHUB_REPO_URL,
  }),
};
</script>
