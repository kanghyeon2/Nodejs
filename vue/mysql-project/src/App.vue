<template>
  <div>
    <!--header component-->
    <router-link to="/customerList">전체조회</router-link> |
    <router-link to="/customerAdd">등록</router-link>
    <!--content component-->
    <!-- <CustomerList />
    <CustomerInfo /> -->
    <router-view />
    <!--footer component-->
  </div>
</template>
<script>
// import CustomerList from "./views/CustomerList.vue";
// import CustomerInfo from "./views/CustomerInfo.vue";

// export default {
//   components: {
//     CustomerList,
//     CustomerInfo,
//   },
// };
</script>
