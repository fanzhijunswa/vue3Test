<template>
  <div id="App">
    <div class="line">
      <div>姓名：{{ name }}</div>
      <div>年龄: {{ age }}</div>
      <div>性别: {{ sex }}</div>
      <div>c：{{ c }}</div>
      <h2>{{ info }}</h2>
    </div>
    <hr />
    <div class="line">
      <button @click="name += '!'">改变性别</button>
      <button @click="age += 1">改变年龄</button>
      <button @click="sex += '*'">改变性别</button>
      <button @click="c += 'c'">改变其它</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRef, ref, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    const info = reactive({
      name: "樊志军",
      age: 12,
      sex: "男",
      a: {
        b: {
          c: "c",
        },
      },
    });

    // 所以在这里，解释下 toRef的作用是什么，参数一是toRef要代理的对象，参数二是toRef要代理的对象键，其实toRef也是创建一个ref对象，但是这个ref对象的value值并非是属于自己的，而是代理的 reactive对象的值，也就是说 这个 toRef创建出来的ref对象，
    // get 拿的是代理reactive的键值，set 设置值的时候，是给reactive代理的键设置值，最后拿的时候是从reactive的数据里拿，toRef只是作为一个桥梁
    const name = toRef(info, "name");
    const age = toRef(info, "age");
    const sex = toRef(info, "sex");
    const c = toRef(info.a.b, "c");
    const infoRef = toRefs(info);
    console.log(infoRef);
    return {
      name,
      age,
      sex,
      c,
    };

    /**(1)
     * toRefs 不用指定代理键名，只需要给予目标对象即可，toRefs会对这个目标对象进行迭代，将目标对象中的所有最外层key进行代理，并创建对应的ref对象，所以下面代码得到的值就是
     * {
     *  name: Ref对象,
     *  age: Ref对象
     *  sex: Ref对象
     *  a: Ref对象
     * }
     */

    /**(2)
     * 注意，以下这样写也是错的，因为ref虽然是创建了一个响应式的数据，但是注意,ref是创建，并不是作为一个桥梁，所以如果修改了name,age,sex任意一个属性，只是单纯的修改了ref创建的这个对象的值，并非修改的是info中的值，也就是说并非修改了代理info的值，
     * 这样的话，我们无论怎么修改值，info的值都是不变的，所以这样页面用到这个Info的时候，就会出现数据不对的问题
     * return {
            info,
            name: ref(info.name),
            age: ref(info.age),
            sex: ref(info.sex),
            c: ref(info.a.b.c),
        }
     */

    /** (3)
        注意这个return 千万不能这么写，这样写的话，其实就相当于把info这个proxy代理对象中代理的属性给拆出来了，变成了一个基本数据类型，不具备任何响应式，响应式的前提是有 get 和set，而这种方式只是将值给拎出来了，不具备响应式
        return {
            name: info.name,
            age: info.age,
            sex: info.sex,
            c: info.a.b.c,
        };
      * 
    */
  },
};
</script>
