<!--views/CustomerInfo.vue-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-3">아이디</div>
          <div class="col-3">
            {{ customer.id }}
          </div>
        </div>
        <div class="row">
          <div class="col-3">이름</div>
          <div class="col-3">
            {{ customer.name }}
          </div>
        </div>
        <div class="row">
          <div class="col-3">이메일</div>
          <div class="col-3">
            {{ customer.email }}
          </div>
        </div>
        <div class="row">
          <div class="col-3">연락처</div>
          <div class="col-3">
            {{ customer.phone }}
          </div>
        </div>
        <div class="row">
          <div class="col-3">주소</div>
          <div class="col-3">
            {{ customer.address }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <button type="button" class="btn btn-primary" @click="goToUpdateForm">수정</button>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-info" @click="goToCustomerList">목록</button>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-danger" @click="delInfo">삭제</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      customer: {},
    };
  },
  created() {
    let selected = this.$route.query.customerId; //$router==>component 선택 router안 index.js의 네임을 찾아서 확인
    this.getCustomerInfo(selected);
    console.log(selected);
  },
  methods: {
    async getCustomerInfo(id) {
      let result = await axios.get(`/api/customers/${id}`).catch((err) => console.log(err)); //404 error >> mysql-server >app.js
      this.customer = result.data;
    },
    async delInfo() {
      let result = await axios
        .delete(`/api/customers/${this.customer.id}`)
        .catch((err) => console.log(err));
      console.log(result.data);
      let sqlRes = result.data;
      if (sqlRes.affectedRows >= 1 && sqlRes.changedRows == 0) {
        alert("정상적으로 삭제되었습니다.");

        //리다이렉트와 같은 효과
        this.$router.push({ name: "customerList" }); // 목록
      } else {
        alert("삭제되지 않았습니다.");
      }
    },
    goToCustomerList() {
      this.$router.push({ name: "customerList" });
    },
    goToUpdateForm() {
      this.$router.push({ name: "customerUpdate", params: { customerId: this.customer.id } });
    },
  },
};
</script>
