<template>
  <div class="about">
    <template :key="info.id" v-for="(info, idx) in list">
      <p v-if="idx % 2 == 1">{{ info }}</p>
    </template>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    axios
      .get("/api/customers")
      .then((result) => {
        console.log(result.data);
        this.list = result.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
