<template>
    <div>
        <hr>
        <h3> 바인딩 Binding </h3>
        <h4> 클래스 바인딩 </h4>
        <!-- <div class="text" :class="classObj">텍스트 입니다.</div> -->
        <!-- <div class="text" :class="[activeClass, errorClass]">텍스트 입니다.</div> -->
        <div class="text" :class="[isActive? 'active-class' : 'class']">텍스트 입니다.</div>

        <!-- <div class="active">텍스트 입니다.</div> 와 같은 상태 -->
        <!-- text-danger : 중간에 대쉬(-)와 같은 특문이 있는 클래스명은 ''로 감싸서 사용할 수 있다. -->
        <!-- 바인딩할 클래스가 많으면 객체 형태로 만들어서 선언할 수 있다. -->
        <button v-on:click="toggle">toggle</button>
        <button v-on:click="hasError = !hasError">toggleError</button>
        
        <hr>
        <h4> 인라인 바인딩 </h4>
        <div :style="styleObj">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum doloribus accusantium saepe minus expedita corrupti illum ad sapiente eveniet esse dolores consectetur modi quod, officiis architecto, rerum unde illo perferendis.</div>
        <button v-on:click="fontSize--"> ➖ </button>
        <button v-on:click="fontSize++"> ✖️ </button>
    </div>
</template>

<script>

import { ref, reactive, computed } from 'vue';

export default {
    setup(){
        // 1. 클래스 바인딩
        const isActive = ref(true);
        const hasError = ref(false); // true일때 class에 바인딩
        const toggle = () => {
            isActive.value = !isActive.value;
        };

        // (3) 배열을 통해서 바인딩을 할 수도 있다.
        // Computed() 밑으로 가면 unreachable code가 되서 위로 뺐다.
        const activeClass = ref('active');
        const errorClass = ref('error');

        // (1) 평범하게 reactive()를 사용함

        // const classObj = reactive({
        //     active : isActive, // isActive : true이므로
        //     'text-danger' : hasError, // hasError : false이므로
        // })

        // 위 classObj와 같이 클래스에 true 상태가 많다면
        // (2) computed()를 활용해서 객체로 작성할 수 있다.
        // computed()에서 활용할 때는 unwrapping이 적용되지 않는다.
        // 반드시 value를 써줄것
        const classObj = computed(()=>{
            return{
                active : isActive.value,
                'text-danger' : hasError.value,
            };


        });

        //================================================================

        // 2. 인라인 바인딩
        // const styleObj = reactive({
        //     color : 'hotpink',
        //     fontSize : '20px',
        // });

        // computed 스타일 바인딩
            // const styleObj = computed(()=>{
            // return{
            //     color : 'hotpink',
            //     fontSize : '20px',
            // }
            // });

        // 폰트 사이즈 키우고 줄이기.
        const fontSize = ref(13);
        const styleObj = computed(()=>{
            return{
                color : 'hotpink',
                fontSize : fontSize.value + 'px', // 13px로 바인딩됨
            }
            });
        

    return {
        // 1. 클래스 바인딩
        isActive,
        toggle, 
        hasError,
        classObj,
        activeClass,
        errorClass,

        // 2. 인라인 바인딩
        styleObj,
        fontSize,

    };
    } // setup

} // export
</script>

<style lang="scss" scoped>
    .active{ // 바인딩 된 클래스
        color:#3CB371;
    }

    .text-danger{ // 바인딩 된 클래스
        color : red;
    }
</style>