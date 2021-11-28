<template>
  <div id="App">
    <div class="line">
      <span>金额：</span>
      <span>{{ info.count }}</span>
    </div>
    <div class="line">
      <span>信息：</span>
      <span>{{ info.msg }}</span>
    </div>
    <div class="line">
      <span>深层级字母：</span>
      <span>{{ info.a.b.c }}</span>
    </div>
    <hr />
    <div class="line">
      <button @click="info.count++">加一</button>
      <button @click="info.msg += '!'">改变信息</button>
      <button @click="info.a.b.c += 'c'">改变深层数据</button>
    </div>
  </div>
</template>

<script>
import { reactive, watch } from "vue";
export default {
  name: "App",
  setup() {
    const info = reactive({
      count: 0,
      msg: "你",
      a: {
        b: {
          c: "c",
        },
      },
    });
    /**
       * 情况二  watch监听如果监听的是reactive 代理的对象，那么 参数二中的newV和oldV始终都会是一致的
       * watch(info,(newV,oldV) => {
            console.log(newV)
            console.log(oldV)
        });
    */

    /**
      * 情况三 watch监听如果监听的是reactive 代理的对象，那么无论这个代理对象层级有多深，都会监听的到，所以deep 属性失效了，reactive强制开启了 deep
      * watch(info, (newV, oldV) => {
            console.log(newV)
            console.log(oldV)
        });
    */

    /**
      * 情况四 watch监听如果要监听reactive内的某个属性的话，第一个参数需要是一个回调函数，返回的就是reactive中的某个要监听的属性，这个时候，newV和oldV又恢复了
      * watch(
            () => info.count,
            (newV, oldV) => {
                console.log(newV);
                console.log(oldV);
            }
        );
    */

    /**
      * 情况五 watch监听如果要监听reactive内的多个属性的话，第一参数需要是一个数组，然后按序放入回调函数，返回值为要监听的属性
      * watch([() => info.count, () => info.msg], (newV, oldV) => {
            console.log(newV);
            console.log(oldV);
        });
    */

   /**
    * 情况六 watch监听如果要监听reactive中的某个属性，但是这个属性还是引用数据类型的话，那么要实现深度监听，那么就必须要配置deep深度监听了
    * 这里我感觉是因为 watch监听的如果就是一个完整的 reactive代理的对象的话，这个对象因为被递归劫持了，所以内部无论层级多深，只要发生改变，即可捕获到发生变化，从而不需要配置 deep
    * 但是这里的话，是从reactive代理对象中吐出的某个引用数据类型的数据，监听这个数据的话，就必须要配置deep
    */
    watch(() => info.a,(newV,oldV) => {
        console.log(newV)
        console.log(oldV)
    },{deep: false})
    return {
      info,
    };
  },
};
</script>
