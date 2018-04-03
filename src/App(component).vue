<template>
  <!-- <comA></comA> -->
  <div id="app">
    <com-a number=5></com-a>
    <com-a number-to-do=10></com-a> 不能使用驼峰命名
    <input type="text" v-model="myVal">
    <com-a :my-value="myVal" @my-event="getEvent">
      <p slot="header">header/123//传往子组件（slot标签）</p>
      <p slot="footer">footer</p>
    </com-a>
    <p>动态组件</p>
    <input type="text" v-model.neumber="myVal">
    <kepp-alive> // 缓存起来提高加载速度
      <p :is="currenView"></p>
    </kepp-alive>
  </div>
  
</template>

<script>
import Vue from "vue";
import comA from "./components/a";
export default {
  
  components: {
    // ES6
    comA
  },
  // components: { // ES5
  //   componentA ：componentA
  //   },
  name: "App",
  data() {
    return {
      currenView: 'com-a',
     myVal: '11',
    }
  },
  methods: {
    getEvent (hello){
      console.log(hello)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: red;
}
.qqq {
  color: blue;
}
</style>
