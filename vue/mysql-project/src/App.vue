<template>
  <div>
    <!--header component-->
    <DefaultHeader />
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

import DefaultHeader from "./layouts/DefaultHeader.vue";

export default {
  components: {
    DefaultHeader,
  },
};
</script>
