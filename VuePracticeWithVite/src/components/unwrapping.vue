<template>
    <div>
        <!-- 템플릿 내 unwrapping -->
        <!-- ref로 생성된 객체는 .value를 작성하지 않아도 자동으로 언래핑되어 출력됨 -->
        <hr>
        <p> ref 객체로 생성한 count : {{ count }} </p>
        <p> reactive 객체로 생성한 state 객체 내 count : {{ state.count }} </p>
    </div>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
    setup(){
        const count = ref(0);
        const state = reactive({
            // number가 아닌 반응형 상태(count)를 넣을 것이다.
            // count: count 
            // 위와 같이 작성하면 코드를 다음과 같이 축약할 수 있다.
            count
        });
        count.value++;
        count.value++;

        // 정석
        // = 스크립트 섹션에서 언래핑
        // 스크립트에서는 ref객체에 반드시 .value를 붙여서 값을 출력해야 한다.
        console.log(count.value); // ref는 .value로 접근해야 한다.
        console.log('state.count : ', state.count); // state.count(reactive)는 value 없이 바로 접근 가능하다. 

        // + 추가
        // 반응형 객체와 달리, ref가 Map, []와 같은 컬렉션 타입의 요소로 접근될 땐
        // 수행되는 wrapping 해제가 없다.
        // ∴컬렉션 타입의 객체가 선언되면 ref는 반드시 .value를 붙여야 한다! 
        

    // return 까먹지 말기....
    return {
        count,
        state,
    };
    } // setup

} // export
</script>

<style>
</style>