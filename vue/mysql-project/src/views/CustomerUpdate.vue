<!--views/CustomerUpdate.vue-->
<!--views/CustomerAdd.vue-->
<template>
  <div class="container">
    <div class="row">
      <label>아이디</label>
      <input type="text" v-model="info.id" readonly />
    </div>
    <div class="row">
      <label>이름</label>
      <input type="text" v-model="info.name" />
    </div>
    <div class="row">
      <label>이메일</label>
      <input type="email" v-model="info.email" />
    </div>
    <div class="row">
      <label>연락처</label>
      <input type="tel" v-model="info.phone" />
    </div>
    <div class="row">
      <label>주소</label>
      <input type="text" v-model="info.address" />
    </div>
    <div class="row">
      <button type="button" class="btn btn-info" v-on:click="updateCustomer">저장</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      info: {
        id: null,
        name: null,
        email: null,
        phone: null,
        address: null,
      },
    };
  },
  created() {
    //1) 사용자가 선택한 대상의 원래 데이터 조회
    // => 단건조회
    let selected = this.$route.params.customerId;
    this.getdCustomerInfo(selected);
  },
  methods: {
    async getdCustomerInfo(id) {
      let result = await axios.get(`/api/customers/${id}`).catch((err) => console.log(err)); //404 error >> mysql-server >app.js
      this.info = result.data;
    },
    //2) 사용자가 버튼을 클릭했을 때 서버에 전송
    // => 등록
    async updateCustomer() {
      let updateData = {
        name: this.info.name,
        email: this.info.email,
        phone: this.info.phone,
        address: this.info.address,
      };
      let result = await axios
        .put(`/api/customers/${this.info.id}`, updateData)
        .catch((err) => console.log(err));
      let sqlRes = result.data;
      if (sqlRes.changedRows > 0) {
        alert("수정완료");
        this.$router.push({ name: "customerList" });
      } else {
        alert("수정실패");
      }
    },
  },
};
</script>
<style></style>
