<!-- views/CustomerList.vue-->
<template>
  <div class="container">
    <table class="table">
      <caption>
        Total:{{
          count
        }}
      </caption>
      <thead>
        <tr>
          <th>No</th>
          <th>아이디</th>
          <th>이름</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="count > 0">
          <tr v-for="(info, idx) in customerList" :key="info.id" v-on:click="goToCustomerInfo(info.id)">
            <td>{{ idx + 1 }}</td>
            <td>{{ info.id }}</td>
            <td>{{ info.name }}</td>
            <td>{{ info.phone }}</td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="4">현재데이터 존재하지않습니다.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios"; //=> AJAX

export default {
  data() {
    return {
      customerList: [],
    };
  },
  computed: {
    count() {
      return this.customerList.length;
    },
  },
  created() {
    //컴포넌트가 초기화 할 데이터 호출
    this.getCustomerList();
    // axios
    //   .get("/api/customers")
    //   .then((result) => {
    //     console.log(result.data);
    //     this.customerList = result.data;
    //   })
    //   .catch((err) => console.log(err));
  },
  methods: {
    async getCustomerList() {
      // 서버에 응답 + 네트워크 정보 포함
      let result = await axios.get("/api/customers").catch((err) => console.log(err));
      this.customerList = result.data; // 실제 서버가 응답한 데이터
    },
    goToCustomerInfo(id) {
      console.log(id);
      this.$router.push({ name: "customerInfo", query: { customerId: id } }); //query 말고 params가능       
      //quer   : (key:value}) => ?key=value
      //params
      //1) route의 path 속성 : '/target/:uId'
      //2) params : {uId : value}=>/target/value
    },
  },
};
</script>
<style></style>
