<template>
    <div>
        <hr>
        <h3> 반응형을 잃지 않고 값을 출력하기 = 데이터 구조분해 </h3>
        <h4>Refs를 이용해서 출력하기</h4>
        <p>author : {{ author }}</p>
        <p>title : {{ title }}</p>
        <br>
        <h4>Ref를 이용해서 출력하기</h4>
        <p>author : {{ onlyAuthor }}</p>
        <p>title : {{ onlyTitle }}</p>    </div>
</template>

<script>
// toRefs, toRef도 import가 필요하다.
import {reactive, toRefs, toRef} from 'vue'

export default {
    setup(){

        const book = reactive({
        author: '뷰고수',
        year: '2024',
        title: '뷰를 마스터합시다',
        description: '뷰 고수가 되고 싶으면 읽으시오',
        price: '5000만원'
        });

        // let {author, title} = book;
        // 이렇게 작성하고 book을 return하면 반응성을 잃어버린다.
        
        let {author, title} = toRefs(book); // 위 const의 book과동기화된다.
        // 하나씩 가져오고 싶으면?
        const onlyAuthor = toRef(book, 'author');
        const onlyTitle = toRef(book, 'title');

    return {
        author,
        title,
        // book, -- 우리가 생각하는대로 똑같이 reactive객체를 반환하면
        // 앞선 author, title이 반응성을 잃게 된다. {author, title} = book;가 의미없어짐
        // 걍 string이 되어벌임 - 전체 다 출력되어버린다.

        // 이런 경우 반응형 객체를 일련의 ref들로 변환해야 한다. 
        // ref로 변환 시 반응형 연결을 유지한다.
        // 이를 막기 위해서 toRefs, toRef가 나왔다.
        onlyAuthor,
        onlyTitle,

    };
    } // setup

} // export
</script>

<style>
</style>