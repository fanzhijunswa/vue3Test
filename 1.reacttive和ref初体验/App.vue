<template>
  <div id="App">
   
  </div>
</template>
·
<script>
import { ref, reactive } from "vue";
export default {
  name: "App",
  setup() {
    let obj = reactive({
      name: "樊志军",
      age: 12,
      hobby: ["篮球", "足球"],
      other: {
          add: '北京',
          marry:'未婚'
      }
    });
    const setOptions = reactive({
        yellow: 'yellow',
        red: 'red',
        blue: 'blue'
    })

    const handleName = () => {
        obj.name = '张三'
    };
    const handleAge = () => {
        obj.age+=1
    };
    const handleHobby = () => {
        obj.hobby[0] = '吃饭'
        obj.hobby[1] = '睡觉'
    };
    const handleOther = () => {
        obj.other.add = '上海'
        obj.other.marry = '订婚'
    };
    const handleColor = () => {
        setOptions.yellow = '黄色'
        setOptions.red = '红色'
        setOptions.blue = '蓝色'
        console.log(setOptions)
    }
    return {
      obj,
      ...setOptions,
      handleName,
      handleColor,
      handleAge,
      handleOther,
      handleHobby
    };
  },
  components: {},
};
</script>
