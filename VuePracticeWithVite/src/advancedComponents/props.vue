<template>
  <div class="card">
      <div class="card-body">
        <!-- News(뉴스) or Notice(공지사항) -->
          <!-- <span class="badge bg-secondary">{{ type === 'news'?'News📰':'Notice✉️' }} </span> -->
          <span class="badge bg-secondary">{{ isTypeClass }} </span>
          <h4 class="card-title red mt-2">{{ title }}</h4>
          <p class="card-text">
            {{ contents }}
          </p>
        <!-- <a v-if="isLike" href="#" class="btn btn-danger">Like❤️</a> -->   
        <!-- <a v-else href="#" class="btn btn-outline-danger">Like❤️</a> -->
        <a class="btn" :class="isLikeClass" href="#" @click="toggleLike">Like❤️</a>
        
      </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import computedVue from '../components/computed.vue';

export default {
  // props:['title', 'contents'], // 문자열로 선언하는 방식 
  // 공식 문서에는 이 방법을 권장하지 않고,
  // {}객체 선언을 통해서 더 정확한 선언 방식을 사용할 것을 권장한다. 
  props : {
    type : {
      type : String, // 타입(뉴스 vs 공지사항)의 자료형 : String
      default : 'news', // 기본값 : News
      validate : (value) => { // 정규화는 함수를 통해 정의할 수 있다.
        return [news, notice].includes(value); // value값이 news or notice일 때만 반환한다. 
      },
    },
    title : {
      type : String, // 제목의 자료형 : String1
      required : true, // 제목은 반드시 필요한 속성이므로 required : true
    },
    contents : {
      type:  String,
      // required : true,
    },
    isLike : { // 자식컴포넌트에선 isLike로 선언되었지만 부모컴포넌트의 template에선 is-like로 사용될 수 있다.
      type : Boolean,
      default : false,
    },
  },
  // props와 마찬가지로 emit도 선언해야 한다.
  emits:['toggleLike'],

  // 자식 -> 부모 컴포넌트로 이벤트를 올리는 방법?
  // setup함수의 첫번째 인자 : props
  // setup함수의 두번째 인자 : context. context 안에는 emit이라는 메소드가 있다. 
  setup(props, context){
    // console.log(props.title);
    const isLikeClass = computed(()=> props.isLike ? 'btn btn-danger': 'btn btn-outline-danger');
    const isTypeClass = computed(()=> props.type === 'news' ? 'News📰': 'Notice✉️');
    const toggleLike =()=>{
      // props.isLike = !props.isLike;
      // emit 사용해보기
      context.emit('toggleLike');
    }
    
    return {
      isLikeClass,
      isTypeClass,
      toggleLike,
    };
  }

}
</script>

<style>

</style>