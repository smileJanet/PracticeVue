<template>
  <!-- <label     
    class='child-class'
    style='border:1px solid red; padding: 10px; border-radius:10px;'
    id='child-id'>
    {{ label }}
    <input v-model="value" type="text">
  </label> -->
    <div class="p-3 bg-warning">
    <button class="btn btn-primary" type="button" v-bind="$attrs"> Button!  </button>
    <!-- {{ $attrs }}를 사용해서 부모 컴포넌트에서 정해진 class, id를 상속받을 수 있다 -->
    <!-- {{ $attrs }} 이것은 setup의 두번째 객체 context에서 사용할 수 있다.  -->
    <!-- v-bind=$attrs를 통해서 부모 컴포넌트에 적용된 non-props들을 자식 컴포넌트의 루트 속성이 아닌 다른 속성에도 적용할 수 있다. -->
    </div>
    <br />

    <!-- Non-props는 루트 컴포넌트에 상속이 되는데...과연 label과 input 중 어느 곳이 상속이 될까? -->
    <!-- v-bind=$attrs를 통해서 어느 컴포넌트에 상속을 할 지 명시해야 한다. -->
    <label class="form-label" id="child-id"> {{ label }}</label>
    <input type="text" v-model="value" class="form-control" v-bind="$attrs"/>

</template>

<script>
import { computed } from 'vue'

export default {
    props :['modelValue', 'label'],
    emits : ['update:modelValue'],

    // 상속 거부는 자식 컴포넌트에서 해야 한다.
    inheritAttrs : false,

    setup(props, context){
      context.attrs
      //console.log(context.attrs);
      //console.log(context.attrs.class);
      //console.log(context.attrs.id);
      //console.log(context.attrs.onClick);
      const value = computed({
        get(){
          return props.modelValue;
        },
        set(value){
          emit('update:modelValue', value);
        },
      });

      return {
        value
      };
    },
    
};
</script>

<style>

</style>