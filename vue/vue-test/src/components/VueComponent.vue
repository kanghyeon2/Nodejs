<!-- VueComponent.vue --> 
<template>
    <!-- 주의! 하나의 태그만 등록-->
    <div>
        <label><input type="text" v-model="msg"></label>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default{ //내보내기
        name : 'VueComponent',
        data(){ //data : function(){
            return {
                msg : '2024-11-15'
            }
        }
    }
</script>

<style>
    p{
        background-color: bisque;
    }
</style>