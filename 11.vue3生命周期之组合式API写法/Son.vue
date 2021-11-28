<template>
  <div id="Son">
      <div class="line">
          <span>count: {{ count }}</span>
          <button @click="count+=1">+1</button>
      </div>
  </div>
</template>

<script>
// 这种写法就是 组合式API写法，这种写法是没有 created和beforeCreated的，因为官方没有提供这三个组合式API，如果组合式API生命周期和配置项生命周期一起写的话，其实组合式API的优先级更高
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
export default {
  name: "Son",
  setup() {
    console.log("我是第一个执行的---setup");
    const count = ref(0)
    onBeforeMount(() => {
        console.log("我是第二个执行的---onBeforeMount");
    })
    onMounted(() => {
         console.log("我是第三个执行的---onMounted");
    })
    onBeforeUpdate(() =>{
        console.log("我是第四个执行的---onBeforeUpdate");
    })
    onUpdated(() => {
        console.log("我是第五个执行的---onUpdated");
    })
    onBeforeUnmount(() => {
        console.log("我是第六个执行的---onBeforeUnmount");
    })
    onUnmounted(() => {
        console.log("我是第七个执行的---onUnmounted");
    })
    return {
        count
    }
  },
//   beforeCreate() {
//     console.log("我是第二个执行的---beforeCreate");
//   },
//   created() {
//     console.log("我是第三个执行的---created");
//   },
//   beforeMount() {
//     console.log("我是第四个执行的---beforeMount");
//   },
//   mounted() {
//     console.log("我是第五个执行的---mounted");
//   },
//   beforeUpdate() {
//     console.log("我是第六个执行的---beforeUpdate");
//   },
//   updated() {
//     console.log("我是第七个执行的---updated");
//   },
//   beforeUnmount() {
//     console.log("我是第八个执行的---beforeUnmount");
//   },
//   unmounted() {
//     console.log("我是第九个执行的---unmounted");
//   },
};
</script>
