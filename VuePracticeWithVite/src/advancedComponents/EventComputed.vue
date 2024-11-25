<template>

    <label>
        {{ label }}
        <input type="text" 
        :value="modelValue" 
        @input="event => {$emit('update:modelValue', event.target.value)}" />
        <!-- $emit('update:modelValue', event.target.value) : 자식이 부모에게 이벤트를 검 -->
        <!-- 자식컴포넌트에서 부모에게 update:modelValue라는 이벤트를 발생시킴 -->
        <!-- event.target.value : 사용자가 입력한 값 -->

        <!-- 부모컴포넌트에서 username이 무엇인지 정의하고 있지만 -->
        <!-- 자식컴포넌트에서 username이 무엇인지 정의하고 있지 않아 오류가 발생했다. -->
        <!-- 자식컴포넌트는 부모의 modelValue값을 받아 이를 사용해야 한다. -->
    </label>
    
    <br /><br />

    <label>
      <input 
      type="text"
      v-model="value"
      />
    </label>

</template>

<script>
import { computed } from 'vue';

export default {
  // modelValue(Props)
  // 부모 컴포넌트 → 자식 컴포넌트로 전달되는 값을 나타내는 Props
  // v-model을 사용할 때 자식 컴포넌트가 부모로부터 값을 받는 Property이름을 modelValue로 자동 지정한다/
  // 즉 자식 컴포넌트는 modelValue를 읽기 전용으로 받아서 사용할 수 있다. 
  // = 부모 컴포넌트에서 v-model로 자식 컴포넌트에게 데이터를 전달할 때,
  // 이 값이 modelValue라는 이름으로 자식에게 전달된다.

  // update:modelValue(emits)
  // 자식 컴포넌트 → 부모 컴포넌트로 값을 전달할 때 사용되는 이벤트
  // 자식 컴포넌트에서 입력된 값이 변경될 때, 부모 컴포넌트에 값을 알리기 위해
  // update:modelValue이벤트를 발생시킨다.

  // props : ['modelValue', 'label'], // 부모로부터 modelValue값을 받아
  props : ['title','label'], // modelValue의 이름을 바꾸고 싶을 때 : 부모에게 v-model:title이라고 했으므로 여기도 'title'로 변경
  emits : ['update:title'], // update:modelValue로 부모에게 이벤트를 발생시킬 수 있다.
                            // 여기도 update:title로 modelValue의 이름을 바꿀 수 있다.

  setup(props, {emit}){
    // 컴포넌트 안에서 computed를 사용하여 v-model을 구현할 수 있다.
    const value = computed({
      get(){
        return props.title; // 부모 컴포넌트로 받아온 값 props의 modelValue를 이용하여 값 출력
      },
      set(value){
        emit('update:title', value);
        // update:modelValue : 자식 → 부모로 설정할 이벤트명
        // value : 부모 → 자식으로부터 받아온 값을 다시 자식 → 부모한테 반영함
      }
  });

    return { value, }
  }

}
</script>

<style>

</style>