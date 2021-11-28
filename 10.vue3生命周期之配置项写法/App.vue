<template>
  <div id="App">
      <div class="line">
        <span>
            当前状态为：
        </span>
        <button @click="flag = !flag">{{ flagText }}</button>
      </div>
      <Son  v-if="flag"/>
  </div>
</template>

<script>
import Son from './Son.vue'
import {computed,ref} from 'vue'
export default {
  name: "App",
  setup() {
      const flag = ref(true)
      const flagText = computed(() => flag.value ? '隐藏' : '显示')
        return {
            flag,
            flagText
        }
  },
  components: {
      Son
  }
};
</script>
