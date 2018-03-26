<template>
<!-- <componentA></componentA> -->
  <div id="app">
    {{ hello }}
    <p v-html='hello'></p>
    {{ num + 1}}
    {{ status ? 'success' : 'fail'  }}
    <ul>
      <li v-for = "(item,index) in list" :class="{add:index % 2}">
      {{ item.name }} - {{ item.price }} - {{ index }}
      </li>
    </ul>
    <ul>
        <li v-for = "(value,key) in oblist">{{value}}+{{key}}</li>
    </ul>
    <button v-on:click="addItem">添加</button>
  </div>
</template>

<script>
// import componentA from './components/a'
export default {
  // components: { // ES6
  //   componentA
  //   },
   // components: { // ES5
  //   componentA ：componentA
  //   },
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
      ],
      oblist: {
        name: 'apple',
        price: 34,
      },
    }
  },
  methods: {
    // addItem: function(){ //ES5

    // },
    addItem (){
          console.log(this.list)
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
