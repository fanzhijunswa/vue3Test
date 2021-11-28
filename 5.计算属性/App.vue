<template>
  <div id="App">
    <div class="line">
      <span>姓：</span>
      <span :style="{margin: '0 10px'}">{{ person.firstName }}</span>
      <input type="text" v-model="person.firstName" />
    </div>
    <br />
    <div class="line">
      <span>名：</span>
      <span :style="{margin: '0 10px'}">{{ person.lastName }}</span>
      <input type="text" v-model="person.lastName" />
    </div>
    <br />
    <div class="line">
      <span>全名：</span>
      <span>{{ person.fullName }}</span>
    </div>
    <br />
    <div class="line">
        <span>动态全名：</span>
        <span>{{ person.activeFullName }}</span>
        <input type="text" v-model="person.activeFullName">
    </div>
  </div>
</template>

<script>
// 计算属性需要额外的引入一个API
import { reactive,computed } from "vue";
export default {
  name: "App",
  setup() {
    const person = reactive({
      firstName: "樊",
      lastName: "志军",
    });
    // 这里的计算属性，可以挂载到我们的person实例上，因为person是reactive用proxy生成的代理对象，可以动态添加响应式属性，所以自然可以放入到person实例上
    person.fullName = computed(() => `${person.firstName}-${person.lastName}`)

    // 计算属性的修改 
    // 在这里activeFullName依赖的是上一个计算属性，这个计算属性修改的时候，需要将person中的firstName和lastName进行修改，从而上一个计算属性会重新计算，而本计算属性所依赖的又是上一个计算属性的值，从而发生改变
    person.activeFullName = computed({
        get() {
            return person.fullName
        },
        set(val){
            const [firstName,lastName] = val.match(/([a-z|A-Z|0-9|\u4e00-\u9fa5]+)/g)
            // 在这里可以将n个目标对象中的属性覆盖到 源对象上，也会被proxy所检测到
            Object.assign(person,{firstName,lastName})
        }
    })
    return {
      person
    };
  },
};
</script>
