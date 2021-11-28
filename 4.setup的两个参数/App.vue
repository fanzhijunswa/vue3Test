<template>
  <div id="App">
    <Son 
      name="樊志军" 
      :age="12" 
      :options="{add:'北京',sex:'男'}" 
      :hobby="['吃饭','唱歌','睡觉']"
      @son-click="handleClick"
    >
      <!-- 在vue3中，也推荐这样去使用 插槽，v-slot就是 匿名插槽，v-slot:插槽名  就是命名插槽, v-slot="值" 就是作用域插槽 -->
      <template v-slot:container="scope">
        <span>{{ `我叫${scope.row.name},我今年${scope.row.age}岁啦` }}</span>          
      </template>
    </Son>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: "App",
  components: {
    Son
  },
  setup() {
    const handleClick = val => {
      console.log(`子组件触发我的事件了，传递过来的值为：${val}`)
    }
    return {
      handleClick
    }
  },
};
</script>
