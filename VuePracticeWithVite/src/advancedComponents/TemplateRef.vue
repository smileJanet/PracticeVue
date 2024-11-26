<template>
  <div class="container py-4">
    <input type="text" ref="input" /> <br/>
    <input type="text" id="몰루"/>

    <div>{{ input }}</div>
    <!-- "[object HTMLInputElement]"출력됨 -->

    <!-- 새로고침을 하면 에러가 남 : ref는 마운트가 완료된 후에야 참조값이 할당된다. -->
    <!-- 따라서 v-if를 통해 ref의 값이 있을 때 렌더링되도록 설정한다. -->

    <div v-if="input">{{ input.value }}</div>
    <!-- Hello World! 출력됨 -->
    
    <div v-if="input">{{ $refs.input.value }}</div>
    <!-- Hello World! 출력됨 -->
    <!-- ref속성을 접근하기 위해선 $refs.를 사용한다 -->
    <!-- html에서 id를 사용하여 특정 요소를 선택 -->

    <div v-if="input">{{ $refs.input === input}}</div>
    <!-- true 출력됨 -->

    <hr />
    <ul>
      <!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
      <li v-for="fruit in fruits" :key="fruit" :ref="(el)=>itemRefs.push(el.textcontent)">{{ fruit }}</li>
    </ul>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

  // ref에서 쓴 이름(input)과 같은 변수(ref)를 만들어준다(null)
  const input = ref(null);
  const 몰루 = document.querySelector('#몰루')

  onMounted(()=>{
    console.log('ref있는것 : ', input.value); // <input type="text"> 출력
    console.log('ref없는것 : ', 몰루); // null뜬다
    
    input.value.value = 'Hello World!';
  })

  const fruits = ref(['apple', 'banana', 'cherry']);
  const itemRefs =ref([]); // ref속성을 통해 itemRefs배열에 자동으로 추가된다.
  
  // 컴포넌트가 마운트 된 후에 itemRefs에 접근하여 콘솔에 출력할 수 있도록 한다
  onMounted(()=>{
    itemRefs.value.forEach(item => console.log('fruit:', item));
    // itemRefs.value.forEach(item => console.log('fruit:', item));
  })

  // 자식 컴포넌트에도 ref를 통해 접근할 수 있다.
  // 그러나 이 경우 부모, 자식간 의존관계가 형성되기 때문에 반드시 필요할 때만 사용한다.
  // 일반적으로 props와 emit을 통해서 의존관계를 만들어야 한다. 


</script>

<style>
input{
  margin:5px;
}
</style>