<template>
    <hr>
    <div>
        <h3>Ref객체</h3>
        <!-- 템플릿에서 사용할 때는 자동으로 내부 값을 풀기 때문에 value가 궅이 필요 없다. -->
        <p>{{ message }}</p>
        <button v-on:click="addMessage">add Click</button>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    // 반응형 객체 생성하기
    setup(){
        // 2) ref
        // number, String과 같이 primitive type을 반응형으로 만들때 사용
        let message = ref('Hello Vue!'); 
        
        const addMessage = () => {
        // message의 값에 접근할 때 : message.value로 한다. 
        message.value = message.value + '!'; // 객체의 value로 접근하는 형태 
    };
    return {
        message,
        addMessage,
    };

    },// setup
}
</script>

<style lang="scss" scoped>

</style>
