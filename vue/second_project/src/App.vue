<template>
  <div id="container">
    <input type="text" v-model.lazy="selected" />
    <component v-bind:is="selected"></component>
  </div>
</template>

<script>
//App.vue
import PropsCom from "@/components/PropsComponent.vue";
import StoreCom from "./components/StoreComponent.vue";
import TextModal from "./views/TextModal.vue";

export default {
  name: "app",
  // data() {
  //   return {
  //     selected: "PropsCom",
  //   };
  // },
  data() {
    return {
      selected: "TextModal",  //default 값
    };
  },
  components: {
    PropsCom,
    StoreCom,
    TextModal,
  },
  created() {
    // created : 부모가 먼저 실행
    console.log("App.vue Created");
  },
  mounted() {
    // mounted : 자손이 먼저 실행 화면에 디스플레이되는건 역순
    console.log("App.vue mounted");
  },
};
</script>
<style>
#container {
  margin: 0 auto;
}
</style>
