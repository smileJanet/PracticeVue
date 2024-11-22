<template>
    <hr />
    <h3> 양방향 바인딩(v-model) </h3>
    <li> 단방향 바인딩 : javascript → html로 값은 가는데 html → javascript로 데이터가 가지 않는 현상 </li>
    <li> 양방향 바인딩 : javascript ↔ html 둘 다 데이터가 잘 교류되는 상태</li>

    <h4> v-model 적용 전 </h4>
    <input type="text" :value="inputValue" />
    <div>{{ inputValue }}</div>
    
    <!-- dev tool에서 임의로 inputValue를 고치면 반영이 되지만 -->
    <!-- input태그에서 inputValue의 값을 바꾼다고 반영되진 않는다. -->
    <!-- 단방향 바인딩의 폐해 -->
    
    <br />
    <input 
    type="text" 
    :value="inputValue" 
    @input="event => {inputValue = event.target.value}" 
    />
    <div>{{ inputValue }}</div>
    <!-- @input : 입력 이벤트가 발생할 때 마다 실행될 이벤트 핸들러를 정의 -->
    <!-- event => {inputValue = event.target.value} : 사용자가 입력할 때 마다 입력된 값(event.target.value)을 inputValue변수에 할당 -->
    
    <!-- Q1. event.target.value란? -->
    <!-- A1. html요소에서 발생한 이벤트에 대한 정보를 포함하는 이벤트 객체(Event Object)에서
    해당 이벤트를 발생시킨 HTML요소의 값을 나타냄 -->
    <!-- event : 이벤트 객체 -->
    <!-- target : 이벤트가 발생한 html요소(위 예제에선 input태그를 의미) -->
    <!-- value : 해당 html요소의 현재 값(위 예제에선 사용자가 입력한 텍스트 값) -->
    
    <!-- 이 모든 노가다를 단순화 한 것이 v-model -->
    <br />
    <textarea :value="textareaValue" @input="event => {textareaValue = event.target.value}"></textarea>
    <div>{{ textareaValue }}</div>
    
    <!-- 내부적으로 html요소가 어떤 요소냐에 따라 서로 다른 속성(:value) or 이벤트(@input)를 사용한다. -->
    <!-- input type="text"와 textarea는 value속성과 input이벤트를 사용한다. -->
    <!-- checkbox와 radio버튼은 checked속성과 change이벤트를 사용한다 -->
    <!-- select태그는 value속성과 change이벤트에서 사용한다. -->
    <!-- 줄글보다 예시가 더 나을듯 -->
    
    <b> checkbox, radio 실습 </b> <br />
    <!-- v-model 사용 안할때 -->
    <label form="checkbox" >{{ checkboxValue }}</label>
    <input type="checkbox" 
            id="checkbox" 
            :checked="checkboxValue" 
            @change="event=>{checkboxValue = event.target.checked}"/>
    <br />
    <label>
        <input type="radio" 
            name="type" 
            value="o" 
            @change="event=>{radioValue = event.target.value}" /> o형 
    </label>
    <label>
        <input type="radio" 
            name="type" 
            value="a" 
            @change="event=>{radioValue = event.target.value}" /> a형 
    </label>
    <div>{{ radioValue }}</div>

    <b> selectValue실습 </b> <br />
    <select @change="event=>{selectValue = event.target.value}">
    <option value="html">HTML 수업</option>
    <option value="css">CSS 수업</option>
    <option value="javascript">JavaScript 수업</option>
    </select>
    <div>{{ selectValue }}</div>

    <br />

    <h4> v-model 적용 후 </h4>
    <!-- v-model 사용 할 때 -->
    <b> checkbox 실습 </b> <br />
    <label form="checkbox" >{{ checkboxValue }}</label>
    <input type="checkbox" 
            id="checkbox" 
            v-model="checkboxValue"
            true-value="Yes" 
            false-value="No"/>
    <!-- checkbox의 경우 true-value, false-value와 같이 true, false일 때 나타낼 값을 설정할 수 있다. -->
    <br />

    <b> radio 실습 </b> <br />
    <label>
        <input type="radio" 
            name="type" 
            value="Blueberry🫐" 
            v-model="fruitValue" /> 🫐 
    </label>
    <label>
        <input type="radio" 
            name="type" 
            value="Peach🍑" 
            v-model="fruitValue" /> 🍑 
    </label>
    <div>{{ fruitValue }}</div>

    <br />
    <b> selectValue실습 </b> <br />
    <select v-model="selectValue">
    <option value="html">HTML 수업</option>
    <option value="css">CSS 수업</option>
    <option value="javascript">JavaScript 수업</option>
    </select>
    <div>{{ selectValue }}</div>

    <!-- 실무에선 v-model이 아닌 풀어서 써야 하는 경우도 있다. 
    어쨌든 둘 다 알아야 함....
    -->
    <br />

    <h4> v-model 수식어 </h4>
    <!-- v-model 수식어 -->
    <!-- 1. lazy -->
    <!-- v-model은 input이벤트 후 입력과 데이터를 동기화 하는데, lazy수식어를 추가하여 change이벤트 이후에 동기화할 수 있다. -->
    <!-- input태그에서 입력을 다 하고 focus가 떨어졌을 때 이벤트 실행 -->
    lazy : <input type="text" v-model.lazy="inputValue" />
    <div>{{ inputValue }}</div>

    <!-- 2. number -->
    <!-- 숫자 타입만 받을 때 : 사용자 입력이 자동으로 number타입으로 형변환 되기 원할 때 -->
    number : <input type="text" v-model.number="inputValue" />
    <div>{{ typeof inputValue }}</div>

    <!-- 3. trim-->
    <!-- 사용자가 입력한 데이터의 앞뒤 공백을 없애고 싶을 때-->
    number : <input type="text" v-model.trim="inputValue" />
    <div>{{ inputValue }}</div>

</template>

<script>
import { ref } from 'vue';

export default {
    setup(){
        const inputValue = ref(null);
        const textareaValue = ref(null);
        const checkboxValue = ref('Yes');
        const radioValue = ref('o');
        const fruitValue = ref('');
        const selectValue = ref('html');

        return{
            inputValue,
            textareaValue,
            checkboxValue,
            radioValue,
            fruitValue,
            selectValue,

        };
    }

}
</script>

<style scoped>
    h4{
        background-color:greenyellow;
        width:200px;
        text-align:center;
        margin:auto; 
    }
</style>