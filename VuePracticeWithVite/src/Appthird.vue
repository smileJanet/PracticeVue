<template>
  <div id="app" style="border: 1px solid #3CB371; border-radius:5%;">
    <h2 style="color:	#3CB371;">Hello, Vue3!</h2>

    <!-- <ScriptSetup name="Janet" :age=25 hobby="swim" @like="handleLike"/> -->
    <!-- 또는 -->
    <!-- 아래 방법을 권장 -->
    <!-- <ScriptSetup :name="'Janet'" :age=25 :hobby="'swim'" @like="handleLike"/> -->

    <!-- defineExpose 실습 -->
    <!-- + template refs(템플릿 참조) -->
    <!-- ref: 컴포넌트에 ref 속성을 붙여 웹 페이지 내 특정 부분을 쉽게 찾을 수 있도록 이름을 붙이는 방법  -->
    <!-- = 견출지 -->
    <!-- 아래 자식 컴포넌트는 setup속성 때문에 원래 노출되지 않지만,,, -->
    <!-- ref + defineExpose덕분에 부모컴포넌트에도 노출된다. -->
    <!-- <ScriptSetup ref="messageFromHer" :name="'Janet'" :age=25 :hobby="'swim'" @like="handleLike"/> -->
    
    <!-- 동적 컴포넌트 -->
    <!-- <Dynamic /> -->

    <!-- 템플릿 참조 -->
    <TemplateRef />

  </div>
</template>

<script setup> 
import { onMounted, ref } from 'vue';
import ScriptSetup from './advancedComponents/ScriptSetup.vue'
import Dynamic from './advancedComponents/Dynamic.vue'
import TemplateRef from './advancedComponents/TemplateRef.vue'

const handleLike=()=>{
  alert("I like you too!");
}

// defineExpose 실습
const messageFromHer = ref(null);
// const loveMethod = () => {
//   messageFromHer.value.readMessage();
// }

// onMounted : 페이지 로드 시 자식 컴포넌트 + 메소드가 노출될 수 있도록 해준다.
onMounted(()=>{
  if(messageFromHer.value){
    messageFromHer.value.readMessage();
  }
})

</script>
