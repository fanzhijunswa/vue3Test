<template>
  <div id="App">
    <div class="line">
      <span>count： {{ count }}</span>
      <button @click="count++">+1</button>
    </div>
    <div class="line">
        <h2>当前x坐标：{{point.x}},当前Y坐标：{{point.y}}</h2>
    </div>
  </div>
</template>

<script>
// 首先ref和reactive等等这个都叫Hook，hook的意义其实就是复用，将公共的逻辑拆分出来，想要用的话直接引入即可，hook记住一定要return出来数据，不然就没有了意义，hook return 出来的值如果是一个响应式数据，那么我们接受的时候，由于复杂数据类型传递的是
// 地址，所以我们的point就是reactive创建出来的proxy代理对象，那么Hook中一旦数据发生了改变，则我们的point属性也会发生对应的变化，从而触发proxy的set以及get钩子
import { ref } from "vue";
import usePoint from './Hooks/usePoint'
export default {
  name: "App",
  setup() {
    const count = ref(0);
    const point = usePoint()
    return {
      count,
      point
    };
  },
};
</script>
