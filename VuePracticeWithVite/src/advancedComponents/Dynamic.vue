<template>
  <hr>
  <!-- 탭 화면과 같이 컴포넌트 간에 동적으로 전환하는 것이 유용하다. -->
  <div class="container py-4">
    <button class="btn btn-outline-danger" @click="changeComp(DynamicApple)"> 사과 </button> &nbsp;
    <button class="btn btn-outline-warning" @click="changeComp(DynamicBanana)"> 바나나 </button>
    <br>
    <!-- <component>태그 : 동적 컴포넌트 렌더링을 위해 사용되는 특수한 내장 컴포넌트 -->
    <!-- :is속성 : Vue가 랜더링할 컴포넌트를 지정 -->
    <component :is="currentComp" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DynamicApple from './DynamicApple.vue'
import DynamicBanana from './DynamicBanana.vue'


const currentComp = ref(DynamicApple);
const changeComp = (comp) => {currentComp.value = comp};

</script>

<style>

</style>