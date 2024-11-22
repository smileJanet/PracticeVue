<!-- 반응형 api -->
<!-- 어떠한 반응형 상태를 항시 감시하고 있다가, 데이터가 변경되는 그 시점에 작업을 수행하는 기법 -->
<!-- watch의 형태
watch (message, (newValue, oldValue) =>{
    console.log('새로운 값 : ', newValue);
    console.log('이전 값: ', oldValue);
}) -->

<template>
    <h3> Watch, WatchEffect </h3>
    <h4> (1) watch </h4>
    <p>반응형 상태를 항상 감시하고, 데이터가 변경되는 그 시점에 작업을 수행하는 기법</p>
    <input type="text" v-model="message" />
    <p>{{ message }} (읽고 콘솔창 확인)</p>

    x : <input type="text" v-model.number="x" /> &nbsp;&nbsp;&nbsp;
    y : <input type="text" v-model.number="y" />
    <br /><br />
    <button @click="obj.count++">Increment</button>

    <br />
    <p>greet : {{ greet }}</p>
    <p>reverseGreet : {{ reverseGreet }}</p>

    <h4> (2) watchEffect </h4>
    <!-- form의 내용이 변경되면 watchEffect가 작동되는 형태 -->
    <form action="" @submit.prevent="save(title, contents)">
        <input type="text" v-model.lazy="title" placeholder="Title" /> <br /><br />
        <textarea v-model.lazy="contents" placeholder="Contents"></textarea>
        <hr />
        <button> Save! </button>
    </form>

</template>

<script>
import { reactive, ref, watch, watchEffect } from 'vue';

export default {
    setup(){
        const message = ref('');
        // Message와 같이, 첫번째 매개변수는 다양한 타입이 될 수 있다.
        // ref, reactive, computed(), getter함수, array 등...다 들어올 수 있다.
        watch(message, (newValue, oldValue)=>{ // 콜백함수로 새로운 값, 이전 값이 매개변수로 요구됨 
            console.log('newValue : ', newValue);
            console.log('oldValue : ', oldValue);
        });

        // 실습
        const x = ref(0);
        const y = ref(0);

        // ref를 인자로 받았을 때(x, y)
        watch(() =>  x.value + y.value, sum => {
            console.log('sum : ', sum);
        } );

        //array를 인자로 받았을 때
        watch([x,y], ([newX, newY])=>{
            console.log("newX : ", newX, "newY : ", newY);
        })

        // object형을 인자로 받았을 때
        const obj = reactive({count:0});
        // watch(obj.count, (newValue, oldValue)=>{
        //     console.log('newValue : ' , newValue);
        //     console.log('oldValue : ' , oldValue);
        // })

        // 위와 같은 방법으로 객체 내 속성을 바꿀 수 없으므로
        // getter함수를 써야 한다.
        // + getter 함수란 : () => {return ...}과 같이 생긴 것
        watch(()=>obj.count, (newValue, oldValue)=>{
            console.log('newValue : ' , newValue);
            console.log('oldValue : ' , oldValue);
        })

        // 반응형 객체를 직접 watch()를 하면 암시적으로 깊은 감시자가 생성된다.
        // 즉, 속성뿐 만 아니라 모든 중첩된 속성에도 트리거 된다.
        const person = reactive({
        name: '홍길동',
        age: 30,
        hobby: '운동',
        obj: {
            count: 0, // 여기까지 감지
        },
        });

        // watch(person, (newValue) => {
        // console.log('newValue: ', newValue);
        // });

        // 단, 중첩된 속성이 바뀐다고 감지되진 않고
        // 객체 자체가 바뀌어야 감지된다.
        // ex. 위 예시에서 obj의 count가 올라간다고 감지가 되진 않고
        // 그대신 person 자체가 바뀌어야(ex. age : 31, 32..)
        watch(
            ()=> person.obj, //getter함수
            (newValue)=> {
            console.log('newValue :', newValue);
            },
        );

        // 위와 같이 값이 변해도 바로 반영을 하고 싶다면
        // immediate를 사용할 수 있다.
        // immediate (옵션) : 최초에 즉시 실행
        const greet = ref('Hello, Vue!');
        const reverseGreet = ref('');

        watch(greet, (newValue) => {
            console.log("immediate applied");
            reverseGreet.value = newValue.split('').reverse().join('');
        },{
            immediate:true,
        });

        // reverseGreet.value = greet.value.split('').reverse().join('');

        // Computed vs Watch는 비슷한 느낌을 가지고 있다.
        // computed : 반응형 데이터의 종속관계를 자동으로 셋팅하고자 할 때
        // ex) greet에 따라서 어떠한 값이 세팅되야 할 때는 computed()를 사용함이 옳다.

        // watch : 반응형 데이터가 변경되는 시점에 DOM 변경, API호출, 비즈니스 로직 실행을 위해
        // 복잡한 로직을 수행할 때는 watch로 하는 것이 유리하다.
        // watch가 성능을 좀 더 잡아먹는다.

        // watchEffect
        // 콜백함수 안의 반응형 데이터가 감지되면 자동으로 반응해서 어떠한 작업을 수행하는 객체
        const title = ref('');
        const contents = ref('');
        const save = (title, contents)=>{
            console.log(`저장되었습니다. title : ${title}, contents : ${contents} `);
        }

        watchEffect(()=>{
            console.log('watchEffect');
            save(title.value, contents.value);
        });
        // watch와 다르게 최초 1번은 무조건 즉시 실행한다.
        // 그러나 딱봐도 성능면에서 좋지는 않아 보이므로
        // focus가 떨어졌을 때 update되는 방향으로 하는게 맞아 보인다
        // = v-model의 lazy를 실행할 것이다. -> 잘 되는 것을 확인

        // watch와 watchEffect의 차이점?
        // 둘 다 관련 작업을 수행할 수 있도록 도와주지만....
        // 관련된 반응형 데이터를 추적하는 방식이 좀 다르다.

        // watch는 명시적으로 관찰된 소스만 추적하며, 콜백함수 내에서 엑세스한 값은 추적하지 않는다.
        // 반응형 데이터(ref, reactive)의 변화를 감지하고 특정 로직을 실행한다.
        // 첫번째 인자로 감시할 데이터(newValue & oldValue), 두번째 인자로 그 데이터가 변할 때 실행할 콜백함수를 지정한다(()=>{})
        // watchEffect는 동기 실행 중 액세스되는 모든 반응 속성을 자동으로 추적한다. 
        // 자동으로 반응형 데이터를 추적하며, 실행되는 코드 내에서 사용되는 반응형 데이터를 자동 추적.
        // 즉시 실행되며, 컴포넌트가 처음 마운트 될 때 + 반응형 데이터가 변경 될 때 실행한다.
        // 이전 값과 새로운 값에 대한 비교가 없고, 데이터 변화에 따라 자동으로 업데이트 된다.


        return {
            message,
            x,
            y,
            obj, 
            person,
            greet,
            reverseGreet,
            title,
            contents,
            save,

        };
    }

}
</script>

<style>

</style>