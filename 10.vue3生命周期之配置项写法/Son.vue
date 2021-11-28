<template>
  <div id="Son">
      <div class="line">
          <span>count: {{ count }}</span>
          <button @click="count+=1">+1</button>
      </div>
  </div>
</template>

<script>
// 这里没有什么好说的，setup的优先级是最高的，但是这种写法是vue2中的配置项写法，而且做了改动无非就是将destoryed改了名变成了unMounted
import {ref} from 'vue'
export default {
  name: "Son",
  setup() {
    console.log("我是第一个执行的---setup");
    const count = ref(0)
    return {
        count
    }
  },
  beforeCreate() {
    console.log("我是第二个执行的---beforeCreate");
  },
  created() {
    console.log("我是第三个执行的---created");
  },
  beforeMount() {
    console.log("我是第四个执行的---beforeMount");
  },
  mounted() {
    console.log("我是第五个执行的---mounted");
  },
  beforeUpdate() {
    console.log("我是第六个执行的---beforeUpdate");
  },
  updated() {
    console.log("我是第七个执行的---updated");
  },
  beforeUnmount() {
    console.log("我是第八个执行的---beforeUnmount");
  },
  unmounted() {
    console.log("我是第九个执行的---unmounted");
  },
};
</script>
