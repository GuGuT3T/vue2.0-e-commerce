<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <router-view></router-view>
      // vuex Demo
      {{price}}
      <button @click="addOne">add</button>
      <button @click="minusOne">minus</button>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'i am banana',
      price: 5
    }
  },
   methods: {
    getParam () {
      console.log(this.$route.params) // 注入之后可以直接使用
    },
    addOne () {
      this.$store.commit('increment',this.price);
    },
    minusOne () {
      this.$store.commit('decrement',this.price);
    },
  }
};
</script>

