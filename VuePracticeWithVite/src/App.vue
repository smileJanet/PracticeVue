<template>
  <div id="app" style="border: 1px solid #3CB371; border-radius:5%;">
    <h2 style="color:	#3CB371;">Hello, Vue3!</h2>
    <!-- <Setup /> -->
    <!-- <Template /> -->
    <!-- <reactive /> -->
    <!-- <ref /> -->
    <!-- <unwrapping /> -->
    <!-- <destruct /> -->
    <!-- <readonly /> -->
    <!-- <computed /> -->
    <!-- <binding /> -->
    <!-- <condition /> -->
    <loop />

  </div>
</template>

<script setup>
// composition api
import Setup from './components/setup.vue'
import Template from './components/template.vue'
import reactive from './components/Reactivity_reactive.vue'
import ref from './components/Reactivity_ref.vue'
import unwrapping from './components/unwrapping.vue'
import destruct from './components/destruct.vue'
import readonly from './components/readonly.vue'
import computed from './components/computed.vue'
import binding from './components/binding.vue'
import condition from './components/condition.vue'
import loop from './components/loop.vue'


</script>