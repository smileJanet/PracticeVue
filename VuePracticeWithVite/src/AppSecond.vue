<template>
<div>
<div id="app" style="border: 1px solid #3CB371; border-radius:5%;">
    <h2 style="color:	#3CB371;">Hello, Vue3!</h2>
    
    <div class="row g-1">

    <div class="col col-4">
    <Props title="하드코딩 제목" contents="하드코딩 내용"/> 
    <!--하드코딩 방식-->
    </div>

    <div class="col col-4">
    <Props :title="post.title" :contents="post.contents" /> 
    <!--객체에 접근하는 방식(v-bind이용해서)-->
    </div>

    <div v-for="post in posts" :key="post.id" class="col col-4">
    <!-- Vue에선 컴포넌트에서 선언할 땐 PascalCase, templete안에서 쓸 땐 kebab-case로 작성한다(앞 강의 참조) -->
    <!-- Props컴포넌트에선 isLike로 선언했지만, 부모 컴포넌트(AppSecond)에서 사용될 땐 is-like로 작성해도 문제 없다 -->
    
    <!-- <Props :title='post.title' :contents='post.contents' :type='post.type' :is-like='post.isLike' @toggle-like="post.isLike = !post.isLike" /> -->

    </div>

    </div>
    
    <hr />
    
    <!-- label태그에 상속이 되있는 것을 확인할 수 있다 -->
    <!-- 부모컴포넌트 내에서 자식 컴포넌트의 class, id, style 등을 부여하면  -->
    <!-- 자식 컴포넌트 내 루트 요소인 label태그에서 해당 속성들을 상속받은 것을 확인할 수 있다  -->
    
    <!-- 만약 부모 컴포넌트와 자식 컴포넌트 모두 class, style, id 등이 정의되어 있다면 ? -->
    <!-- class와 style은 부모 속성 + 자식 속성으로 병합되고 -->
    <!-- 나머지 속성(ex. id)은 부모 속성으로 덮어쓰기 된다  -->
    
    <!-- 
    <NonProps
    v-model="username"
        label='name'
        class='parent-class'
        style='color:red'
        id='parent-id'
        />
    -->    
    
    <!--  v-on 이벤트 리스너 실습 -->
    <!-- non-props 속성은 자식 컴포넌트의 루트 속성에 상속된다.  -->
    <NonProps 
        @click="sayHello"
        class="my-button"
        id="my-button"
    />
    <!-- 그런데 class와 id는 상속하고 싶을 때? -->
    <!-- 내장 객체 attribute를 사용한다 -->
</div>
</div>
</template>

<script> 
// options api방식
// advanced - components 
// 에러가 너무 많아서 셋팅이 오래 걸렸다.
// props라는 예약어가 있으므로, props가 아닌 Props로 써야 올바르게 컴포넌트가 컴파일 될 수 있다.
// 그리고 컴포넌트는 기본적으로 대문자로 시작한다.

// script setup  composition api방식, setup(){}이 겸용된 상태. import만 하면 컴포넌트 사용 가능
// 지금 파일과 같은 script 내 components :{} 방식 : options api 방식, import + components{}객체에 명시해야 함. 좀 더 복잡하고 어려움. 


import Props from './advancedComponents/props.vue'
import NonProps from './advancedComponents/NonProps.vue'
import {reactive} from  'vue'

export default {

    components:{ 
        Props,
        NonProps,
    },

    setup(){
    const post = reactive({
        title : '반응형 제목',
        contents : '반응형 내용'
    });
    
    const posts = reactive([
        {id:1, title : 'title1', contents : 'contents1', type:'news', isLike : true,},
        {id:2, title : 'title2', contents : 'contents2', type:'notice', isLike : true,},
        {id:3, title : 'title3', contents : 'contents3', type:'notice', isLike : false,},
        {id:4, title : 'title4', contents : 'contents4', type:'news', isLike : false,},
    ]);

    const sayHello = () => {
        alert('안녕하세요!');
    }

    return {
        post,
        posts,
        sayHello,

        };
    }
}
</script>

<style>

</style>