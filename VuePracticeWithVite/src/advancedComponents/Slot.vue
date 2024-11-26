<template>
  <button class="fancy-btn">
		<!-- 상위 컴포넌트에서 slot의 내용을 제공하지 않을 때, 기본 slot내용을 설정할 수 있다. -->
		<!-- <slot> Babo <span>😝</span></slot> -->
		<slot></slot>

		<!-- Slot에 이름을 붙여 여러 slot을 사용할 수 있다. -->
		<!-- name이 없는 slot은 암묵적으로 default값이다. -->
	</button>

	<div class="card">
		<div class="card-header">
			<slot name="header">#header</slot>
		</div>
		<div class="card-body">
			<slot :child-message="childMessage"></slot>
		</div>
		<div class="card-footer text-body-secondary">
			<slot name="footer">#footer</slot>
		</div>
	</div>

	
		<!-- Slot또한 여러 값을 한번에 Props처럼 전달할 수 있지만, -->
		<!-- Props는 부모가 자식에게 전달, Slot은 자식이 부모에게 전달 -->
</template>

<script>
import { ref } from 'vue';

export default {

  setup(){
		const childMessage = ref('child component 메시지');

		return{
			childMessage,

		}


  }

}
</script>

<style scoped>
.fancy-btn {
	color: #fff;
	background: linear-gradient(315deg, #42d392 25%, #647eff);
	border: none;
	padding: 5px 12px;
	margin: 5px;
	border-radius: 8px;
	cursor: pointer;
}
</style>