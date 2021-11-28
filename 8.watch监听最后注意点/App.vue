<template>
  <div id="App">
    <div class="line">
      <span>金额：</span>
      <span>{{ count }}</span>
    </div>
    <div class="line">
      <span>信息：</span>
      <span>{{ info.msg }}</span>
    </div>
    <hr />
    <div class="line">
      <button @click="count++">加一</button>
      <button @click="info.msg += '!'">改变信息</button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "App",
  setup() {
    const count = ref(0);
    const info = ref({
      msg: "你好",
    });
    
    // 这里要注意的是，如果是ref代理的数据，这个数据并且还是基本数据类型的话，那么我们监听的时候，直接就写要监听的值就好
    watch(count,(newV,oldV) => {
        console.log('count属性监听完毕')
    })

    // 如果我们监听的是ref代理的引用数据类型数据的话，那么就需要学value属性，因为这个时候value的属性值就是 Proxy对象，并且是reactive创建的proxy对象，我们如果不写value的话，那么实际上监听的是ref本身，除非value的引用发生变化，
    // 否则永远无法监听到数据发生变化,其实就是基本数据类型和引用数据类型数据的区别，基本数据类型发生改变，是地址发生了变化，值是在栈里放的，每个栈存放的是一个地址，但是复杂数据类型，值是在堆里存放的，栈里的地址指向的是堆里的这个数据，
    // 如果我们不改变地址的话，那么watch监听不加value是永远监听不到变化的，只有加上value，才会对proxy对象进行监听,对proxy对象中的每个属性进行监听
    watch(info.value,(newV,oldV) => {
        console.log('info属性监听完毕')
    })

    return {
      count,
      info,
    };
  },
};
</script>
