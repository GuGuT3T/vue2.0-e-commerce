<template>
  <!-- <comA></comA> -->
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
    <a v-if="isPartA">partA</a>
    <!-- <a v-show="!isPartA">partB</a> -->
    <a v-else>no data</a>
    <button v-on:click="addItem">添加</button>
    <button v-on:click="toggle">切换</button>
    <!-- . 提供修改器 -->
    <button @click.stop>切换</button><!--阻止冒泡-->
    <input @keydown.13="onkeydown">
    <br>
    <!-- 自定义事件 -->
    <com-a @my-event="onComaMyEvent"></com-a>
    表单事件绑定
    <p>v-model.lazy</p>
    <p>v-model.number（数字转为number类型）</p>
    <p>v-model.trim(裁剪空格特殊字符)</p>
    <input v-model.trim="myValue" type="text">
    {{ myValue }}
    <p>多选</p>
    <input v-model="mybox" value="apple" type="checkbox">
    <input v-model="mybox" value="apple1" type="checkbox">
    <input v-model="mybox" value="apple2" type="checkbox">
    {{ mybox }}
    <br>
    <p>单选</p>
    <input v-model="mybox1" value="apple" type="radio">
    <input v-model="mybox1" value="apple1" type="radio">
    <input v-model="mybox1" value="apple2" type="radio">
    {{ mybox1 }}
    <p>select 动态绑定属性用v-bind</p>
    <select v-model="selection"  name="" id="">
      <option v-for="item in selectOption" :value="item.value">{{item.text}}</option>
    </select>
    {{ selection }}
    <br>
     计算属性
   <input type="text" v-model="myValue1">
   {{ myValueWithoutNum }}
   {{ getMyValueWithoutNum() }}
   <br>
   属性监听watch
   <input type="text" v-model="myVal">
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
      myVal: '',
      myValue1 : '计算属性',
      selectOption: [
        {
          text: "apple",
          value: 0
        },
        {
          text: "banner",
          value: 1
        }
      ],
      selection: "3333",
      mybox: [],
      mybox1: [],
      myValue: "空",
      hello: "word",
      link: "http://www.baidu.com",
      classStr: "qqq",
      className: {
        //绑定对象
        "red-font": true,
        "blue-font": false
      },
      classArr: ["red-font", "blue-font"],
      classA: "red-font",
      classB: "blue-font",
      hasError: false,
      isPartA: true,
      linkCss: {
        color: "#000"
      },
      num: 1,
      status: false,
      list: [
        {
          name: "apple",
          price: 34
        },
        {
          name: "apple2",
          price: 36
        }
      ],
      oblist: {
        name: "apple",
        price: 34
      }
    };
  },
  watch: { // 属性监听
    myVal (val,oldVal) {
      console.log(val,oldVal)
    }
  },
  computed: { // 计算属性
    myValueWithoutNum () { // 只会根据data的myValue1变量 更新
      return this.myValue1.replace(/\d/g,''); // 计算属性删除数字
    }
  },
  methods: {
    // addItem: function(){ //ES5

    // },
    getMyValueWithoutNum () { // 无论什么时候调用都会重新获取值
      return this.myValue1.replace(/\d/g,'');
    },
    addItem() {
      // this.list.push({ // 会更新
      //   name:'apple1',
      //   price: 66
      // })
      // this.list[1] = { // 不会更新
      //   name:'apple1',
      //   price: 66
      // }
      Vue.set(this.list, 1, {
        name: "apple1",
        price: 66
      });
      this.linkCss = {
        color: "red"
      };
    },
    toggle() {
      this.isPartA = !this.isPartA;
    },
    onkeydown() {
      alert(1);
    },
    onComaMyEvent(parmfromA) {
      console.log(parmfromA);
      console.log("自定义事件");
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
