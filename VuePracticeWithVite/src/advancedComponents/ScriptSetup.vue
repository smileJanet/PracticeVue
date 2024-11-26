<template>
  <hr />
  <h4>what is script setup tag?</h4>
  <br />
  <button class="btn btn-info" @click="prank"> Guess What?❤️ </button>
  <br />
  <br />
  <input v-model="letter" type="text" > <br />
  <p id="bitch">{{ letter }}</p>

  <!-- <br />
  <hr />
  <Watch /> -->

  <hr />
  <h4>props, emits practice</h4>
  <h5> Instagram Celebrity girl ✨💄💋</h5>
  <p> Name🎉 : {{ props.name }}</p>
  <p> age🍧 : {{ props.age }}</p>
  <p> hobby🩰: {{ props.hobby }}</p>
  <button @click="sendLike" class="btn btn-outline-danger "> Like❤️ </button> :  {{ count }}

  <!-- defineExpose 실습 -->
  <br/>
  <hr />
  <h4>defineExpose practice</h4>
  <div>
    <button @click="readMessage" class="btn btn-outline-warning"> Wanna see Message from him? </button>
  </div>


</template>

<script setup>
import { ref } from 'vue'
// import Watch from '../components/watch.vue'
import axios from 'axios'

// console.log("does it work?");
// const message = "<script setup> works!";
const letter = ref('');
const prank = () =>{
  alert("this is prank, you bitch!");
}

// setup(){}에서 작성할 때 단순히 props, emits를 객체선언(or 문자열 배열 선언)을 하였지만
// <script setup>에선 따로 메소드가 있다(defineProps(), defineEmits())
const props = defineProps({
  name : String,
  age : Number,
  hobby : String,
  isLike : {
    type: Boolean,
    default : false,
  }
})
const emit = defineEmits(['like']); // emit의 이벤트명을 문자열 배열로 작성
const count = ref(0);

const sendLike = () => {
  // 좋아요 버튼 클릭 시 이벤트 전송
  // emit('이벤트명', 보낼 이벤트 메소드)
  emit('like', {isLike : true}); // 좋아요 누르기
  count.value++; //count증가
}

// script setup은 원래 컴포넌트간 통신이 닫혀 있는데,
// 내부 데이터나 메소드를 명시적으로 노출할려면 defineExpose()를 사용할 수 있다.
const readMessage = () =>{
  alert('I love you, Laura❣️💗');
}

defineExpose({
  readMessage // 부모 컴포넌트에서 이친구를 호출해야 한다.
}); 

// slot과 attr은 <template>태그에서 $slots $attrs로 접근해서 사용할 수 있다.
// script 태그 안에선 사용을 자제해야 하지만, 만약 무조건 사용해야 한다면
// useSlots 혹은 useAttrs를 사용해야 한다.

// Top-level await?
// script setup태그 내의 Top-level에서 await를 사용할 수 있다.
// 그리고 코드는 async setup()과 같이 컴파일 된다.

// const response = await axios('https://jsonplaceholder.typicode.com/posts');
// console.log('respose : ', response);
</script>

<style scoped>
#bitch{
  margin:2px; 
  background-color: rgb(220, 220, 255);
  color : royalblue;
}

</style>