<template>
  <div id="Son">
    <h2>我是子组件</h2>
    <div class="line">父组件传递过来我的名字： {{ name }}</div>
    <div class="line">父组件传递过来我的年龄： {{ age }}</div>
    <div class="line">父组件传递过来我的其它属性： {{ JSON.stringify(options) }}</div>
    <slot name="container" :row="{name: '小猪佩奇',age: 1}">
        <span :style="{color: 'red'}">我是默认数据</span>
    </slot>
    <div class="line">
        <button @click="handleChangeName">修改基本数据类型</button>
        <button @click="handleChangeOptions">修改引用数据类型</button>
        <button @click="handleSonClick">触发事件</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Son",
  // 在本组件中要用到哪些属性，均需要在这里声明，否则将落入context中的attrs中
  props: {
    name: String,
    age: Number,
    options: {
        type: Object,
        default: () => ({})
    }
  },
  // 父组件声明的事件，可以选择是否在这里声明一下，要在本组件中会触发哪些事件
  emits: ['son-click'],

  // 尤其要注意，setup钩子的执行是在beforeCreate之前的,所以无法访问到this这个关键字，可以理解为已经变为了React Hook写法了
  setup(props, context) {
    // 第一个参数 props,只有在上面声明要用哪些props的时候，参数一的props才会访问的到
    console.log(props);
    console.log(context)
    // 父组件传递过来的值传递类型属性就是只读的，在子组件内不能进行任何修改
    const handleChangeName = () => props.name = '李四'
    // 复杂数据类型通过Props传递过来，虽然值是可以修改的，但是不会触发响应式，还是必须在父组件上才可以对属性进行操作
    const handleChangeOptions = () => {
        props.options.sex = '不知道'
        props.options.other = '其它'
        console.log(props)
    }
    // 这里的context作为 setup的第二个参数其实就是上下文的意思，在这里可以拿到子组件身上的一些额外属性，比如下面的attrs，其实就是父组件给子组件传递了一些属性，但是子组件在props声明接收属性时，只选择接收了一部分属性，那么剩余的属性就是在子组件的attrs身上
    console.log(context.attrs.hobby)
    // context第二属性， emit，事件触发
    const handleSonClick = () => context.emit('son-click',999)

    // context 第三属性 slot 插槽（虚拟dom）
    console.log(context.slots)
    return {
      ...props,
      handleChangeName,
      handleChangeOptions,
      handleSonClick
    };
  },
};
</script>
