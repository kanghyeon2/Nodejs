<!--views/CustomerAdd.vue-->
<template>
  <div class="container">
    <div class="row">
      <label>이름</label>
      <input type="text" v-model.trim="info.name" />
      <div class="form-text" :class="{ warning: nameOk }">이름이 입력되지 않았습니다.</div>
      <div class="form-text" :class="{ warning: !nameOk }">사용 가능한 이름입니다.</div>
    </div>
    <div class="row">
      <label>이메일</label>
      <input type="email" v-model="info.email" />
    </div>
    <div class="row">
      <label>연락처</label>
      <input type="tel" v-model="info.phone" />
      <div class="form-text" :class="{ warning: phonOk }">번호가 입력되지 않았습니다.</div>
    </div>
    <div class="row">
      <label>주소</label>
      <input type="text" v-model="info.address" />
    </div>
    <div class="row">
      <button
        type="button"
        class="btn btn-info"
        v-on:click="addCustomer"
        :disabled="!(nameOk && phonOk)">
        등록
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      info: {
        name: null,
        email: null,
        phone: null,
        address: null,
      },
    };
  },
  computed: {
    nameOk() {
      return this.info.name != null && this.info.name != " ";
    },
    phonOk() {
      return this.info.phone != null && this.info.phone != " ";
    },
  },
  methods: {
    async addCustomer() {
      let result = await axios.post("/api/customers", this.info).catch((err) => console.log(err));
      console.log(result);
      let sqlRes = result.data;
      let customerId = sqlRes.insertId; // Mysql의 AUTO_INCREMENT 사용시
      if (customerId > 0) {
        alert("정상적으로 등록O");
        this.$router.push({ name: "customerInfo", query: { customerId: customerId } });
      } else {
        alert("정상적으로 등록X");
      }
    },
    async fetchVer() {
      let result = await fetch("", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(this.info),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
      console.log(result);
    },
  },
};
</script>
<style>
.warning {
  display: none;
}
</style>
