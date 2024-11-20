<template>
    <div>
        <hr>
        <h3>Reactive객체</h3>
        <button v-on:click="increment">Click {{ state.count }}</button> &nbsp;
        <button v-on:click="increment">Click {{ state.deep.count }}</button>
        <br />
        <p>{{ message.value }}</p>
        <button v-on:click="addMessage">add Click</button>
    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
    // 반응형 객체 생성하기
    // return문은 반드시 setup안에 있어야 한다. 
    setup(){
        // 1) reactive 
        // Object, Array타입과 같이 Reference type을 반응형으로 만들때 사용
        // Vue2의 data()와 유사
        const state = reactive({
        count : 0,
        deep : { // 객체의 깊이(=depth)가 달라져도 똑같이 적용한다.
            count : 0,
        }
    }); 
    const increment = () => {
        state.count++;
        state.deep.count++;
    };

    // primitive type도 될까?
    // 시행해보니 안되는 것을 발견.
    // reactive 함수는 객체, 배열과 같은 reference type의 반응형만을 담당한다.
    // let message = reactive('Hello Vue!'); // String type : 안된다. 객체로 만들어라
    let message = reactive({
        value : 'Hello Vue!', // 객체의 key값을 'value'라는 이름으로 설정한 것이다.
                            // ref의 value와 헷갈리지 말것. 
    });

    // const addMessage = () => {message = message + '!'}; String타입이라 안됬다.
    const addMessage = () => {
        message.value = message.value + '!'; // 객체의 value로 접근하는 형태 
    };

    return {
        state,
        increment,
        message,
        addMessage,
    };

    },// setup
}
</script>

<style lang="scss" scoped>

</style>
