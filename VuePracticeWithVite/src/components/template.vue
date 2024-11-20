<template>
    <div>
        <hr>
        <h2>보간법</h2>
        <p v-once>{{ message }}</p>
        <p>{{ message }}</p>
        <button v-on:click="message = message + '!'">
            Click!
        </button>

        <hr>
        <h2>v-html</h2>
        <!-- v-html태그는 {{  }}이렇게 쓰는 것이 아니다. 태그 안에 작성할 것 -->
        <!-- v-html은 악성 스크립트에 취약한 디렉티브이기 때문에 사용 시 주의해야 한다  -->
        <span v-html="rawHtml"></span> 

        <hr>
        <h2>v-bind(속성 바인딩)</h2>
        <div v-bind:title="dynamicTitle"> 마우스를 올려보시오 </div>

        <!-- v-bind는 자주 사용하기 때문에 단축키워드가 있다 (:) -->
        <div :title="dynamicTitle"> 마우스를 올려보시오 </div>
        <input type="text" value="홍길동" v-bind:disabled="isDisabled" /> &nbsp;

        <!-- 다중 속성 바인딩 -->
        <!-- 여러개의 속성을 한번에 바인딩할 수 있다. -->
        <input v-bind="attrs" />

        <hr>
        <h2>JavaScript 표현식 사용</h2>
        <!-- {{}} 안에선 JavaScript 표현식을 사용할 수 있다. -->
        {{ message.split('').reverse().join('') }} &nbsp;
        {{ isDisabled ? 'Yes' : 'No' }}

    </div>
</template>

<script>
    import {ref} from 'vue';

    export default{
        setup(){
            const message = ref ('Hello, Janet!');
            const rawHtml = ref('<h4 style="color:royalblue;">안녕하세요</h4>');
            const dynamicTitle = ref('Hello, PrettyGirl!');
            const isDisabled = ref(false);
            const attrs = ref({ // 객체이므로 {}에 감싸야한다. 잊지 말것~
                type:'text',
                value:'123456',
                disabled: false,
            });

            return{
                message,
                rawHtml,
                dynamicTitle,
                isDisabled,
                attrs,
            };
        },
    };
</script>

<style lang="scss" scoped></style>