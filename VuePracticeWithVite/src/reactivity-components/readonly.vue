<template>
  <div></div>
</template>

<script>
import {reactive, readonly} from 'vue';

export default {
    setup(){
        const original = reactive({
            count : 0,
        });

        const copy = readonly(original);
        
        original.count++;
        original.count++;

        copy.count++;
        copy.count++;

        console.log('original.count : ', original.count);
        console.log('copy.count : ', copy.count);
        // console에 경고창이 나는 것을 확인하였다.
        // 복사본을 변이하고자 한다면 경고와 함께 실패한다.
        // hook.js:608 [Vue warn] Set operation on key "count" failed: target is readonly. Proxy(Object)

        return{
            original, 
            copy,
        };
    }

};
</script>

<style>

</style>