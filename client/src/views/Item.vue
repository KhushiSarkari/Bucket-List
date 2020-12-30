<template>
  <div>
    <h1 class="subtitle has-text-centered">Bucket List:</h1>
    <hr />
    <AddItem :items="items" :api_url="api_url" />
    <ShowItem :items="items" :api_url="api_url" />
  </div>
</template>

<script>
import AddItem from "@/components/AddItem";
import ShowItem from "@/components/ShowItem";
import axios from "axios";
export default {
  components: {
    AddItem,
    ShowItem,
  },
  data() {
    return {
      items: [],
      api_url: "http://localhost:9000/api/",
    };
  },
  async mounted() {
    const response = await axios.get(this.api_url);
    this.items = response.data;
  },
};
</script>

<style scoped></style>
