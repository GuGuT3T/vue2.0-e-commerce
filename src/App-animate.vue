<template>
  <!-- <comA></comA> -->
  <div id="app">
   <button v-on:click="show = !show">
       toggle
   </button>
    <button @click="toggleCom">
       动态组件
   </button>
   <div class="ab">
       <transition name="fade">  <!--内置组件  -->
        <p v-show="show">i am show</p>
       </transition>  
       <transition name="my-trans">  <!--内置组件--> 
        <p v-show="show">i am show</p>
       </transition>  
       <transition name="fade">  <!--内置组件--> 
        <p v-if="show" key="1">i am show</p>
        <p v-else key="2">i am not show</p>  // 相同标签名不会调用动画 用key
       </transition>
   </div>
   <div>
        <transition name="fade" mode="out-in">  //默认先进新的 再进旧的
           <div :is="currenView"></div>
        </transition>
   </div>
  </div>
  
</template>

<script>
import Vue from "vue";
import comA from "./components/a";
import comB from "./components/b";
export default {
  components: {
    // ES6 
    comA,comB
  },
  // components: { // ES5
  //   componentA ：componentA
  //   },
  name: "App",
  data() {
    return {
      currenView: "com-b",
      myVal: "11",
      show: true
    };
  },
  methods: {
    getEvent(hello) {
      console.log(hello);
    },
    toggleCom() {
        console.log(1)
        console.log(this.currenView)
      if (this.currenView === 'com-a') {
        console.log(1111)
        this.currenView = 'com-b';
      }else{
          console.log(2222)
          this.currenView = 'com-a';
      }
    }
  }
};
</script>

<style>
html {
  width: 100%;
  height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.my-trans-leave-active,
.my-trans-enter-active {
  transition: all 0.5s ease-out;
}
.my-trans-enter {
  transform: translateY(-500px);
  opacity: 0;
}
.my-trans-leave-active {
  transform: translateY(500px);
  opacity: 0;
}
</style>
