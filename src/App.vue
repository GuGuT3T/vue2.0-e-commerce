<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-link :to="{path:'apple'}">Go to apple</router-link>
    <router-link :to="{path:'banana'}">Go to banana</router-link>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: "app",
  components: {
    // hello
  },
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
