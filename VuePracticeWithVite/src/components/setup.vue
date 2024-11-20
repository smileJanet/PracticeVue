<template>
    <div>
      <p>
      {{counter}}
      </p>
      <p>
      {{message}}
      </p>
      <button @click="increment">click!</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue' // script태그 안에 import, export문을 작성한다.
  
  export default { 
    setup() { // 객체, 메소드 등을 선언하는 공간.
      // return문은 반드시 setup()안에 있어야 한다.
      const counter = ref(0);
      const message = ref('Hello World!');
      const increment = () => {counter.value++};
  
      // this 키워드를 사용할수 없다. 값을 setup에 직접 노출시킬것.
      return {
        counter,
        message,
        increment, 
      }
    },
    // Vue3은 Composition api를 주력으로 사용.
    // vue3에서 사용하는 메소드 setup() 내 counter, message, increment는 this를 통해 접근할 수 없음.
    // 왜냐면 this는 Options api에서 사용하는 방식이기 때문.
    // 템플릿이나 다른 라이프사이클을 통해서 setup()값에 접근해야 한다.
    //mounted() { // option api에서 사용함
      //console.log(this.count)
      //console.log(counter.value); // this키워드가 아닌 값.value를 통해 접근하도록
    //}
  }
  </script>
  
  
  
  