<template>
  <div class="show">
    <div class="notification" v-for="item in items" :key="item._id">
      <div class="columns">
        <input class="column input" v-if="isSelected(item)" v-model="notes" />
        <p v-else class="column">
          <span >{{ item.name }}</span>
          <span> {{ item.notes }}</span>
        </p>
        <div class="column is-narrow">
          <span
            class="icon has-text-primary"
            @click="isSelected(item) ? unselect() : select(item)"
          >
            <i class="material-icons">{{
              isSelected(item) ? "close" : "edit"
            }}</i>
          </span>

          <span
            class="icon has-text-info"
            @click="isSelected(item) ? updateItem(item) : removeItem(item)"
          >
            <i class="material-icons">{{
              isSelected(item) ? "save" : "delete"
            }}</i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      description: "",
      notes: "",
      selected: {},
    };
  },
  props: ["api_url", "items"],
  methods: {
    async removeItem(item) {
      await axios.delete(this.api_url + item._id);
      this.items.pop(item);
    },
    select(item) {
      this.selected = item;
      this.notes = item.description;
    },
    isSelected(item) {
      return item._id === this.selected._id;
    },
    unselect() {
      this.selected = {};
      this.notes = "";
    },
    async updateItem(item) {
      const response = await axios.put(this.api_url + item._id, {
        notes: this.notes,
      });
      item.notes = response.data.notes;
      this.unselect();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>