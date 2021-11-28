<template>
  <div id="App">
    <span>姓名： {{ name }}</span>
    <span>年龄：{{ age }}</span>
    <span>性别：{{ sex }}</span>
    <div class="line">
        <button @click="handleName">按钮</button>
        <button @click="handleAge">按钮</button>
    </div>
  </div>
</template>

<script>
/* 
  ref ： 
    其实这里的 ref 其实就是Object.defienProperty ，别看我们只是传了一个 基本数据类型的数据，其实vue帮我们把这个数据进行了一次包裹，类似这样 传入的是 '李四',ref进行包裹变成了 {value: '李四'},变成了一个引用数据类型，
    然后通过Object.defineProperty进行了数据劫持，劫持的就是value属性，value属性一旦发生改变，就会触发set钩子，从而实现发布订阅，响应式更新，所以要更改值的时候，需要通过.value的形式去设置新的值，只有这样，才会被
    Object.defineProperty 所劫持到
*/

/**
 * reactive
 *  reactive这个钩子其实就是 proxy代理，因为reactive的值必须是一个 引用数据类型，reactive会对这个源对象进行数据劫持，可以监听到无论多深层级的属性变化，可以监听到属性的动态添加，动态删除，数组的下标赋值，弥补了Object.defineProperty
 *  上的不足，其实ref的值也可以是 引用数据类型，但是如果是引用数据类型的话，ref其实本质上还是调用了 reactive来帮忙处理，将这个属性进行proxy代理，所以这个复杂数据类型发生了任何变化，proxy均可捕获到
 */


import {ref} from 'vue'
export default {
  name: "App",
    setup() {
        const name = ref('张三')
        const age = ref('12')
        const handleName = () => name.value = '李四'
        const handleAge = () => age.value++
        return {
            name,
            handleName,
            handleAge,
            age,
            sex: '男'
        }
    },
  components: {},
};
</script>
