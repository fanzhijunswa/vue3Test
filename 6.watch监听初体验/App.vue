<template>
  <div id="App">
    <div class="line">
      <span>金额：</span>
      <span>{{ count }}</span>
    </div>
    <div class="line">
      <span>信息：</span>
      <span>{{ msg }}</span>
    </div>
    <hr />
    <div class="line">
      <button @click="count++">加一</button>
      <button @click="msg += '!'">改变信息</button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "App",
  setup() {
    const count = ref(0);
    const msg = ref("你好啊");
    /**
       * 第一种形式，最简单的形式，参数一就是要监听的响应式数据，参数二就是回调函数
       * watch(count,(newVal,oldVal) => {
          console.log('当前新值为：'+newVal)
        })
    */

   // 这是监听的第二种完全形式，watch有三个参数，第一个参数可以是一个数组，同时监听多个响应式数据，参数二的newVal和oldVal的值也会是同长度的一个数组，值的顺序和受试者的顺序是一样的，参数三是watch的额外配置，比如 deep和immediate
    watch(
      [count, msg],
      (newVal, oldVal) => {
        console.log("监听触发了");
        console.log(newVal);
      },
      { immediate: true }
    );
    return {
      count,
      msg,
    };
  },
};
</script>
