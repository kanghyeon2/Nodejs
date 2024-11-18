<!--view/OneEvent.vue-->
<template>
  <div>
    <form v-on:click.self="msg('form')">
      Form
      <div @click.once="msg('div')">
        Div
        <p @click.stop="msg('p')">
          p
          <a @click.prevent="msg('a')" href="http://www.naver.com">네이버</a>
        </p>
      </div>
    </form>
    <hr />
    <button type="button" v-on:click="increaseCounter">Add1</button>
    <input v-model.number="num" />
    <!--Number(), parseInt()-->
    <button type="button" @click="setCount(num, $event)">Add{{ num }}</button>
    <p>The Counter is : {{ counter }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
      num: 7,
    };
  },
  methods: {
    msg(tag) {
      alert(`${tag}, 선택!`);
    },
    increaseCounter(event) {
      console.log("increase", event);
      this.counter++;
    },
    setCount(value, event) {
      console.log("setCount", event);
      this.counter += value;
    },
  },
};
</script>
<style scoped>
form,
form * {
  margin: 10px;
  border: 1px solid skyblue;
}
</style>
