<template>
  <div id="app">
    {{ hello }}
    <p v-html='hello'></p>
    {{ num + 1}}
    {{ status ? 'success' : 'fail'  }}
    <li v-for = "(item,index) in list" :class="{add:index % 2}">
      {{ item.name }} - {{ item.price }} - {{ index }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      hello: 'word',
      num: 1,
      status: false,
      list: [
        {
          name:'apple',
          price: 34
        },
        {
          name:'apple2',
          price: 36
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: red;
}
</style>
