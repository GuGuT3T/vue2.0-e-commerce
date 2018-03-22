// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
    // 组件注册
Vue.component('my-header', {
    template: '<p>{{fruit}} 我是头部</p>',
    data: function() { // 避免直接引用赋值
        return {
            fruit: '水果1'
        }
    }
})
let myHeader2Child = {
    template: '<p> 我是头部2子 </p>',
}
let myHeader2 = {
    template: '<p v-html="" v-on:keydown.enter = "">{{fruit}}' +
        // '<component :is="my-header"></component>' +
        '我是头部2 </p>',
    // components: {
    //     'my-header2-child': myHeader2Child
    // },
    data: function() {
        return {
            fruit: '水果2',
            html: '测试v-html'
        }
    }
}

// new Vue({
//         el: '#app',
//         router,
//         template: '<div>{{ fruit }}</div>',
//         data: {
//             fruit: 'apple'
//         }
//     })
// new Vue({ // 组件与组件之间的挂载
//     el: 'body',
//     router,
//     components: { App }
// })
let root = new Vue({
    el: '#app',
    data: {
        word: 'hello word2'
    },
    components: {
        'my-header2': myHeader2
    }
})
root.$data
console.log(root.$data.word)
root.$on('emit', function() {

});