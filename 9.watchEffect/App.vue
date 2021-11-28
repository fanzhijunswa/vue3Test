<template>
  <div id="App">
    <div class="line">
      <span>金额：</span>
      <span>{{ count }}</span>
    </div>
    <div class="line">
      <span>信息：</span>
      <span>{{ info.a.b.c }}</span>
    </div>
    <div class="line">
      <span>结果：</span>
      <span>{{ result }}</span>
    </div>
    <hr />
    <div class="line">
      <button @click="count++">加一</button>
      <button @click="info.a.b.c += 'c'">改变信息</button>
      <button @click="result = 0">改变result</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive,watchEffect } from "vue";
export default {
  name: "App",
  setup() {
    const count = ref(0);
    const info = reactive({
      a:{
          b: {
              c: 'c'
          }
      },
    });

    const result = ref('')
    // watchEffect 在初始化的时候就会立即执行，watchEffct 会记录内部使用了哪些响应式数据（注意是使用，不包含赋值，使用的意思是参与运算），一旦响应式数据发生了改变，则watchEffct就会触发，哪怕是深层次的数据，也可以监听到
    watchEffect(() => {
        const _count = count.value
        const _infoC = info.a.b.c
        result.value = _count + _infoC
        console.log('我执行了，setup初始化的时候，我就会执行')
    })

    return {
      count,
      info,
      result
    };
  },
};
</script>
