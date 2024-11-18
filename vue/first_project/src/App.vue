<template>
  <nav>
    <a href="http://www.naver.com">네이버</a> | 
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding">DataBinding</router-link> |
    <router-link v-bind:to="{name:'listBind'}">ListBinding</router-link> |
    <router-link :to="{path : '/IfBinding'}">IfBinding</router-link> |
    <router-link to="/onEvent">OnEvent</router-link>
    

  </nav>
  <h1>모든 페이지에 출력</h1>
  <router-view />
  <hr />
  <hr />
  <DataBinding />
  <!-- 카멜 표기법 -->
  <!-- <data-binding/> 케밥 표기법-->
</template>

<script>
// 자식 컴포넌트로 등록 => 특정 페이지의 조각을 구성
// import DataBinding from "./views/DataBinding.vue";

// export default {
//   components: {
//     DataBinding
//     //"data-binding": DataBinding
//   }
// };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

