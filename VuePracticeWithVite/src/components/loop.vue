<template>
    <div>
        <hr>
        <h3> 반복문(목록) 렌더링 </h3>
        <h4> 전체 출력 </h4>

        <!-- 항목을 나열할 땐 반드시 각 속성에 key값이 있어야 한다(ex. item.id - 각 항목별로 다른 번호가 매겨짐) -->
        <ol>
        <!-- for in문과 유사 -->
        <!-- <li v-for="item in items" :key="item.id"> 
        {{ item.message }}
        </li> -->
        <!-- 콤마를 통해 인덱스도 출력할 수 있다. -->
        <li v-for="(item, index) in items" :key="item.id" style="padding:5px;"> 
        {{ item.message }}&nbsp;&nbsp;[{{ index }}]
        </li>
        </ol> 

        <hr />
        <h4> 짝수 출력 </h4>
        <ol>
        <li v-for="item in evenItems" :key="item.id" style="padding:5px;">
        {{ item.message }}&nbsp;&nbsp;[{{ item.id }}]
        </li>
        </ol>

        <hr />
        <h4> 객체 출력(key:value) </h4>
        <ol>
        <li style="padding:5px;" v-for="(value, key, index) in myObject" :key="key">
        {{ index }} , {{ key }} : {{ value }}
        </li>
        </ol>


    </div>
</template>

<script>

import { reactive, computed } from 'vue'

export default {
    setup(){

        // 전체 출력
        const items = reactive([
        { id: 1, message: 'Java' }, // id: 반복문의 키(인덱스같은개념) 역할
        { id: 2, message: 'HTML' },
        { id: 3, message: 'CSS' },
        { id: 4, message: 'JavaScript' },
        ]);

        // 짝수번째 항목만 출력
        const evenItems = computed(()=> items.filter(item => item.id % 2 == 0));

        // v-for로 객체 출력
        const myObject = reactive({ 
            // key : value 순 (index처럼 명칭이 있다.)
            title : '인간 실격',
            author : '다자이 오사무',
            price : 15000,
        })

    return {
        items,
        evenItems,
        myObject,
    };
    } // setup

} // export
</script>

<style>
</style>