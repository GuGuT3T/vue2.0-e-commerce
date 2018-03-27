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
    <a v-bind:href="link">1111</a>
    <a :href="link">222</a>
    <a :class="classStr">222</a>
    <a :class="className">绑定对象</a>
    <a :class="classArr">绑定数组</a>
    <a :class="[classA,classB]">标签绑定数组</a>
    <a :class="[classA,{'red-font2':hasError}]">混合绑定</a>
    <a :style="linkCss">绑定样式</a>
    <button v-on:click="addItem">添加</button>
  </div>
</template>

<script>
import Vue from 'vue'
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
      link: 'http://www.baidu.com',
      classStr: 'qqq',
      className: { //绑定对象
        'red-font':true,
        'blue-font': false,
      },
      classArr: ['red-font','blue-font'],
      classA: 'red-font',
      classB: 'blue-font',
      hasError: false,
      linkCss: {
        color: '#000'
      },
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
          // this.list.push({ // 会更新
          //   name:'apple1',
          //   price: 66
          // })
          // this.list[1] = { // 不会更新
          //   name:'apple1',
          //   price: 66
          // }
          Vue.set(this.list,1,{
            name: 'apple1',
            price: 66
          })
          this.linkCss = {
            color: 'red'
          }
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
.qqq{
  color: blue;
}
</style>
