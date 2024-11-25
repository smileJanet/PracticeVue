<template>
  <label>
    <input 
    type="text" 
    v-model="familyname"
    class="form-control"
    placeholder="Family name(성)"
    />
  </label>
  &nbsp;  
  <label>
    <input 
    type="text" 
    v-model="givenname"
    class="form-control" 
    placeholder="Given name(이름)"
    />
  </label>

</template>

<script>
import { computed } from 'vue';

export default {

  props : {
    familyname : String, // 부모로부터 전달된 familyname
    givenname : String, // 부모로부터 전달된 givenname
  },
  emits : [ // 이경우 배열로 쓰는게 좋다. 객체가 좋은거지 무조건 객체하라는건 아님
    'update:familyname',
    'update:givenname'
],

  setup(props, {emit}){
    // familyname처리 computed()
    const familyname = computed({
      get(){
        return props.familyname;
      },
      set(newFamilyname){ // 변경된 familyname
        emit('update:familyname', newFamilyname); // 부모에게 변경된 familyname 전달
        console.log("new family name: ", newFamilyname);
      }
    });

    const givenname = computed({
      get(){
        return props.givenname;
      },
      set(newGivenname){ // 변경된 givenname
        emit('update:givenname', newGivenname); // 부모에게 변경된 givenname 전달
        console.log("new given name: ", newGivenname);
      }
    });

    return{
      familyname,
      givenname,
    }
  }

}
</script>

<style>

</style>