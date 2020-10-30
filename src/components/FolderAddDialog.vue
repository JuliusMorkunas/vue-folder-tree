<template>
  <v-dialog v-model="isOpen" max-width="350px">
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on"><slot /></span>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Add folder</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <p v-if="parentName" class="mb-6">
                Parent folder name: {{ parentName }}
              </p>
              <v-text-field
                label="Folder name"
                required
                autofocus
                v-model="name"
                @keypress="onEnterKeyPress"
                :error-messages="error"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="onClose">
          Close
        </v-btn>
        <v-btn color="primary" @click="onSubmitForm">
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'FolderAddDialog',

  props: {
    onSubmit: Function,
    parentName: String,
  },

  data() {
    return {
      isOpen: false,
      name: '',
      error: '',
    };
  },

  watch: {
    name(val) {
      if (this.isNameValid(val)) {
        return this.resetError();
      }
    },
  },

  methods: {
    onClose() {
      this.isOpen = false;
    },

    onEnterKeyPress(e) {
      const ENTER_KEY_CODE = 13;
      if (e.keyCode === ENTER_KEY_CODE) {
        this.onSubmitForm();
      }
    },

    onSubmitForm() {
      if (!this.isNameValid(this.name)) {
        return this.setError();
      }
      this.onSubmit(this.name.trim());
      this.resetName();
      this.onClose();
    },

    resetName() {
      this.name = '';
    },

    isNameValid(name) {
      return !!name.trim();
    },

    setError() {
      this.error = 'Value cannot be empty';
    },

    resetError() {
      this.error = '';
    },
  },
};
</script>
