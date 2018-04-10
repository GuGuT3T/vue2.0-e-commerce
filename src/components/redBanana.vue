<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <p>{{ $route.params.color }}</p>
      <button @click="getParam">get param</button>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'i am redBanana'
    }
  },
  methods: {
    getParam () {
      console.log(this.$route.params) // 注入之后可以直接使用
    }
  }
};
</script>

