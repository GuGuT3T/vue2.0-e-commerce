<template>
  <div>
      {{ hello }}
      <br>
      <!-- {{ number }} -->
      <br>
      <!-- {{ numberToDo }} 使用驼峰 -->
      <!-- {{ myValue }} 动态绑定 -->
      <!-- <button @click="emitMyEvent">emit</button> -->
      <!-- <slot name="header">no header</slot> -->
      <!-- <slot name="footer">no footer</slot> -->
  </div>
</template>
<script>
export default {
  props: {
    number: [Number, String],
    "number-to-do": [Number, String, Object],
    "my-value": [Number, String]
  },
  data() {
    return {
      hello: "i am component b"
    };
  },
  methods: {
    emitMyEvent() {
      this.$emit("my-event", this.hello); // my-evnt 父组件的事件
    }
  }
};
//   props: ["number","number-to-do"], //父传子 相当于当data声明(大小写不敏感，用-)
</script>

