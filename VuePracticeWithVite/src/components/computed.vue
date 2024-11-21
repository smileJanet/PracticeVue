<!-- 템플릿 메소드 {{}} -->
<!-- 
    매우 많이 쓰이고 유용한 것도 사실이지만...
    너무 많이 사용하면 유지보수가 어려워질 수 있다.

    이럴때 계산된 속성(computed property)를 사용할 수 있다.
-->

<template>
  <div>
    <hr>
    <h3>Computed property</h3>
    <h4>담당 선생님 : {{ teacher.name }}</h4>
    <!-- <p>강의가 있습니까 ? : {{ teacher.lectures.length > 0 ? 'Yes😊' : 'No😔' }}</p> -->
    <!-- 이렇게 하면 복잡하니까 -->
    <p> 강의가 있습니까 (computed속성) ? : {{ hasLecture }}</p>
    <p> 강의가 있습니까 (메소드) ? : {{ existLecture() }}</p>

    <!-- <p> 강의가 있습니까 (computed속성) ? : {{ hasLecture }}</p>
    <p> 강의가 있습니까 (메소드) ? : {{ existLecture() }}</p>
    <p> 강의가 있습니까 (computed속성) ? : {{ hasLecture }}</p>
    <p> 강의가 있습니까 (메소드) ? : {{ existLecture() }}</p>
    <p> 강의가 있습니까 (computed속성) ? : {{ hasLecture }}</p>
    <p> 강의가 있습니까 (메소드) ? : {{ existLecture() }}</p> -->

    <!-- computed에서 사용된 데이터는 캐시에 적용되므로, 이후에 출력할 땐 캐시에 저장된 데이터를 다시 불러오는 방식이다. -->
    <!-- 캐시의 데이터가 변하는 시기는? : 반응형 데이터가 업데이트 되는 시기 -->

    <!-- 반면 method는 실행할 때 마다 계속 출력하게 되므로 성능면에서 효율이 좋지 않다. -->
    <!-- 즉 성량을 생각하면 computed 객체를 사용하는 것이 더 좋다. -->

    <button v-on:click="counter++">Counter : {{ counter }}</button>

    <h4>수강생 이름 : {{ fullName }}</h4>
  </div>
</template>

<script>
// computed도 반드시 import를 해야한다(어쨌든 vue의 속성이니까)
import {ref, reactive, computed} from 'vue';

export default {
    setup(){
        const teacher = reactive({
            name : 'Janet',
            lectures : [
                'HTML/CSS',
                'JavaScript',
                'Vue3',
            ],
        });
        
        const hasLecture = computed (() => {
            console.log("computed");
            return teacher.lectures.length > 0 ? 'Yes😊' : 'No😔'
        });

        const existLecture = () => {
            console.log("method");
            return teacher.lectures.length > 0 ? 'Yes😊' : 'No😔'
        };

        const counter = ref(0);

        // 컴퓨터 성능 면에서 더 가성비가 있는 쪽?
        // computed > 메소드

        // computed는 기본적으로 getter전용(=읽기 전용)이다.
        // 따라서 새로운 값을 할당하려 한다면 런타임 경고가 발생함.
        // 새로운 계산된 속성이 필요한 경우에 getter과 setter를 모두 제공하여 속성을 만들 수 있다.

        const firstName = ref('Lee');
        const lastName = ref('JuYoung');
        //const fullName = computed(()=> firstName.value + ' ' + lastName.value );
        // fullName 선언문에 다시 한번 getter(), setter()메소드를 사용할 수 있다.
        const fullName = computed({
            get(){
                return firstName.value + ' ' + lastName.value;
            },
            set(value){
                console.log('set의 value : ', value);
                // console.log(value.split(' ')); // 배열[]로 반환됨
                // const [first, last] = value.split(' '); // 이게 구조분해다
                // console.log('first : ' , first ); // Jang
                // console.log('last : ' , last  ); // InKyung

                // 이렇게 줄일 수 있겠지
                [firstName.value, lastName.value] = value.split(' ');
                // firstName.value : Jang이 담기고
                // lastName.vaue : InKyung이 담긴다.

            },
        });

        // question : computed(()=>{})와 computed(()=>) 의 차이는?
        // 볼록문법{}, 단일 표현식 문법({}생략)
        // 볼록문법{} : 여러줄의 로직을 처리해야 할 때. return을 반드시 명시
        // 단일 표현식 문법 : 하나의 표현식만 있을 때(= 함수 본문이 한줄로 끝날 때). {}과 return 키워드 생략 가능.

        // ref객체니까 value를 사용해서 출력(reactive는 ㄴㄴ)
        console.log('Console 출력 : ', fullName.value);
        
        // get(), set()없이 값 바꿔보자
        // fullName.value = 'Jang Inkyung'; // Write operation failed: computed value is readonly 출력. 당연히 에러남
        
        // get(), set()을 통해 값을 바꿀려고 한다. fullName에 새로운 값을 대입하자
        fullName.value = 'Jang Inkyung';
        // Jang Inkyung이 set()내 value(매개변수)에 들어갔기 때문에 fullName이 업데이트 된 상태이다.
        // 이제 get()을 통해 Jang(firstName.value), Inkyung(lastName.value)을 출력해야 한다
        

    return {
        teacher,
        hasLecture,
        existLecture,
        counter,
        fullName,
    };    
    },

}
</script>

<style>

</style>