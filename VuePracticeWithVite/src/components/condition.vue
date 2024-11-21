<template>
    <div>
        <hr>
        <h3> 조건부 렌더링 </h3>
        <h4> v-if, v-else 실습</h4>
        <!-- v-if는 false일 때 랜더링조차 되지 않는다 -->
        <p v-if="visible">Hello, Vue!</p>
        <p v-else>Bye, Vue!</p>
        <button v-on:click="visible = !visible">Click!</button>
        <hr>
        <h4> v-if, v-else, v-else if 실습</h4>

        <p v-if="type === 'A'">🍎입니다.</p>
        <p v-else-if="type === 'B'">🍌입니다.</p>
        <p v-else-if="type === 'C'">🍒입니다.</p>
        <p v-else>먹으면 안됩니다.</p>

        <button v-on:click="type = 'A'">🍎</button>
        <button v-on:click="type = 'B'">🍌</button>
        <button v-on:click="type = 'C'">🍒</button>
        <button v-on:click="type = 'F'">⚗️</button>

        <hr>
        <!-- 여러개의 html 요소를 v-if 디렉티브로 연결하고 싶으면 template를 이용할 수 있다. -->
        <!-- 그럼 이 템플릿 뭉텅이에 모두 조건문이 걸린 거다. -->
        <h4 v-if="hidden">숨겼다</h4>
        <h4 v-else>보인다</h4>

        <template v-if="visible">
        <p>까꿍</p>
        <p>약오르지</p>
        </template>

        <button v-on:click="toggleVisibility">템플릿으로 조건문 걸어버리기</button>

        <!-- v-show -->
        <hr>
        <h4>v-show 실습</h4>
        <p v-show="ok">show 실습입니당</p>
        <button v-on:click="ok=!ok">show toggle</button>
        <!-- ok가 false로 바뀌면 랜더링이 안되는 것처럼 보이지만 -->
        <!-- html속성 내에선 display:none;일 뿐이다. -->

        <!-- v-if와 v-show의 차이점 -->
        <!-- v-if는 조건이 false이면 랜더링조차 안되지만 -->
        <!-- v-show는 조건이 false여도 일단 랜더링이 된다. 보이지만 않을 뿐 -->
        <!-- v-if는 전환 비용이 높고, v-show는 초기 렌더링 비용이 높다. -->
        <!-- 무언가를 자주 전환한다면 v-show가 이득 -->
        <!-- 조건이 자주 바뀌지 않거나, 요소를 한번만 렌더링하면 되는 경우 v-if가 이득 -->

        <!-- 추가 : v-if와 v-for을 같이 사용하는 것을 권장하지 '않는다!' -->
    </div>
</template>

<script>

import { ref } from 'vue'

export default {
    setup(){
        // v-if
        const visible = ref(false);
        const type = ref('A');
        const hidden = ref(true);
        const toggleVisibility = () => {
            visible.value = !visible.value;
            hidden.value = !visible.value;
        }

        // v-show
        const ok = ref(true);

    return {
        visible,
        type,
        hidden,
        toggleVisibility,
        ok,
    };
    } // setup

} // export
</script>

<style>
</style>