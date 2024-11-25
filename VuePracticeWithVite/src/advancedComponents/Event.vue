<template>
  <div class="row g-3">
    <!-- emit 사용법 -->
    <!-- (1) $emit('실행할 이벤트명') -->
    <!-- 이벤트는 script 내에서 실행 -->
    <!-- emit : 컴포넌트 내장 메소드  -->
    <!-- <button class="btn btn-info" @click="$emit('createPost', 1, 2, 3, '홍길동')"> Button! </button> -->
    
    <div class="col col-2">
      <select v-model="type" class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="news">뉴스</option>
        <option value="notice">공지사항</option>
      </select>
    </div>

    <div class="col col-8">
      <input 
      type="text"
      class="form-control"
      v-model="title"
      />
      <br>
      <input 
      type="text"
      class="form-control"
      v-model="contents"
      />
    </div>

    <div class="col col-2 d-grid">
      <button 
      class="btn btn-info" 
      @click="createPost"
      > Add!
      </button>
    </div>

  
  </div>
</template>

<script>
import { ref } from 'vue';


export default {

  // createPost === 부모컴포넌트(AppSecond)에서 선언됬던 methodPost
  // 이벤트에 대한 메소드 선언은 부모컴포넌트에서
  // 자식 컴포넌트에선, 메소드 선언에 대한 유효성 검사를 한다.
  // 부모 컴포넌트 : 자식컴포넌트에서 선언된 이벤트에 대한 메소드 작성

  // (3) emits 옵션 선언
  // emits 옵션을 이용하여 이벤트를 선언할 수 있다(문자열 배열, 객체 문법).
  
  // 문자열 배열 선언
  // emits : ['createPost'],
  
  // 객체문법 선언
  // -> 유효성 검사(validation)을 설정할 수 있다. 없으면 null로 두기
  // 이벤트명(createPost) : 메소드(value)
  // 밑 emit의 title.value값이 넘어온다 -> newTitle로 이름 명명하기
  emits :{
    // 부모 컴포넌트에서 선언된 메소드(methodPost, 여기선 이름이 createPost)
    // ✨ 에 대한 유효성 검사

    // 유효성 검사가 있을 경우
    createPost : newPost =>{ 
      // console.log('validator :', newTitle);
      if(!newPost.type){
        return false;
      }else if(!newPost.title){
        return false;
      }
      return true;
    }

    // 유효성 검사가 없을 경우
    // createPost : null;
  },  

  // emits를 통해 이벤트를 선언하는 것은 자유지만, 선언하는 것이 컴포넌트 구조 유지에 좋다.
  // non-props에서 이벤트를 제외시키기 위해선, 이벤트를 선언해야한다(어차피 해야함)

  // setup함수의 첫번째 파라미터 : props
  // 두번째 파라미터 : context
  // context객체에는 emit메소드를 포함한다
  // (2) 이 emit을 활용해 이벤트를 걸 수 있다.
  
  // context.emit으로 할 수 있지만, 코드 효율을 위해 {emit}와 같이 작성할 수 있다.
  setup(props, {emit}){
    // context.emit
    const title = ref('');
    const type = ref('news');
    const contents = ref('');

    // ✨ 이벤트(createPost) 선언
    const createPost = () => {
      const newPost = { // 이때, createPost안에 선언된 newPost는 return문에 작성하지 않는다.
        // 왜냐면 newPost는 지역변수이기 때문.
        id:5,
        title : title.value,
        contents : contents.value,
        type : type.value,
        isLike: true,
      };
      // 여기 안에서 이벤트 실행
      emit('createPost', newPost);

      type.value = 'news';
      title.value = '';
    };

    return {createPost, title, type, contents, };

  }

}
</script>

<style>

</style>

