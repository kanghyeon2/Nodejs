<!-- views/DataBinding.Vue -->
<template>
  <div>
    <!-- tag의 속성 -->
    <h1 v-bind:class="textStyleBlue">{{ title + " !!!! " }}</h1>
    <!-- directive : Vue의 명령 수행, 'v-' 접두어를 사용하는 경우 -->
    <h2 v-text="title" id="home" />
    <p v-html="tagList" />
    <p v-text="tagList" v-bind:class="textStyle" />
    <!-- v-bind 디렉티브 : 단방향 -->
    <hr />
    
    <!-- v-model 디렉티브 : 양방향 -->
    <input type="text" v-model="valueModel" />
    <p>{{ valueModel }}, {{ typeof valueModel }}</p>
    <input type="number" v-model.lazy="numberModel" />
    <!-- .lazy << 딜레이 거는 수식어   -->
    <!-- input 타입이 number면 자동 parsing해서 넘겨줌 -->
    <p>{{ numberModel }}, {{ numberModel + 10000 }}</p>
    <select v-model="selectModel">
      <option value="summer">여름</option>
      <option value="winter">겨울</option>
    </select>
    <p>{{ selectModel }}</p>
    <textarea v-model="textModel"></textarea>
    <hr />
    <input type="checkbox" v-model="chData" true-value="진실" false-value="거짓" />
    <p>{{ chData }}</p>
    <div>
      <input type="checkbox" value="서울" v-model="city" />서울
      <input type="checkbox" value="대구" v-model="city" />대구
      <p>{{ city }}</p>
    </div>
    <div>
      <input type="radio" value="독서" v-model="hobby" />독서
      <input type="radio" value="영화" v-model="hobby" />영화
      <input type="radio" value="운동" v-model="hobby" />운동
      <p>{{ hobby }}</p>
    </div>
    <hr />
    <img v-bind:style="styleData" v-bind:src="imgUrl" />
    <div class="container" v-bind:class="{ active: isActive, 'text-red': hasError }">
      Class Binding First
    </div>
    <div class="container" v-bind:class="myClass">Class Binding Second</div>
  </div>
</template>

<script>
export default {
  data() {
    // 데이터 바인딩에 사용하는 데이터들(CRUD)
    return {
      title: "Hello, Vue.js",
      tagList: "<strong>Today is ... </strong>",
      textStyle: "text-red",
      textStyleBlue: "text-blue",
      valueModel: "Korea",
      numberModel: "0",
      selectModel: "winter",
      textModel: "ㅎㅇ요",
      chData: "",
      city: [],
      hobby: "",
      styleData: {
        backgroundColor: "skyblue",
        width: "200px"
      },
      backSetting: "background-color : skyblue; width:200px;",
      imgUrl: "https://kr.vuejs.org/images/logo.png",
      isActive: false,
      // hasError: !this.isActive,
      myClass: "active"
    };
  },
  computed: {
    // 이미 존재하는 데이터 기반으로 계산한 결과값(Read only)
    hasError: function () {
      return !this.isActive;
    }
  }, // 데이터 바인딩에 사용하는 데이터들(R)
  methods: {}, // 컴포넌트 내보에서 사용하는 기능 및 함수
  watch: {}, // 감시자 : 변경사항을 감시
  components: {}, // 하위 컴포넌트 목로
  props: [] // 부모로부터 넘겨받은 데이터들
};
</script>

<style>
.text-red {
  color: red;
}
.text-blue {
  color: blue;
}
.container {
  width: 100%;
  height: 200px;
}
.active {
  background-color: aquamarine;
  font-weight: bold;
}
</style>
