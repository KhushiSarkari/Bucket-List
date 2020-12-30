<template>
  <div class="add field has-addons">
    <div class="control is-expanded">
      <input
        class="input"
        v-model="description"
        type="text"
        placeholder="Go to mars..."
      />
    </div>
    <div class="control">
      <a class="button is-info" @click="addItem" :disabled="!description">
        Add
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      description: "",
    };
  },
  props: ["api_url", "items"],
  methods: {
    async addItem() {
      const response = await axios.post(this.api_url, {
        name: this.description,
      });
      this.items.push(response.data);
      this.description = "";
    },
  },
};
</script>


<style scoped>
</style>
