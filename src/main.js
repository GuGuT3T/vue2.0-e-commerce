// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
    // 组件注册
Vue.component('my-header', {
        template: '<p>{{fruit}} 我是头部</p>',
        data: function() {
            return {
                fruit: '水果1'
            }
        }
    })
    // let myHeader2Child = {
    //     template: '<p> 我是头部2子 </p>',
    // }
let myHeader2 = {
    template: '<p>{{fruit}} 我是头部2</p>',
    // components: {
    //     'my-header2-child': myHeader2Child
    // },
    data: function() {
        return {
            fruit: '水果2'
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
new Vue({
    el: '#app',
    data: {
        word: 'hello word2'
    },
    components: {
        'my-header2': myHeader2
    }
})