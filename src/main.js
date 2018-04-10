// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router' // 引入库
import Apple from './components/apple'
import Banana from './components/banana'
import redBanana from './components/redBanana'
import Vuex from 'vuex'
Vue.config.productionTip = false;
Vue.use(VRouter); // 注册使用路由
Vue.use(Vuex); // 注册Vuex

let router = new VRouter({
    mode: 'history', // 默认设置history哈希，设置之后没有哈希  处理非HTML5
    routes: [{
            path: '/',
            redirect: '/banana' // 重定向
        },
        {
            path: '/apple/:color', // 每一个对应映射表  ：之后跟参数（可以有多个参数）
            name: 'applePage',
            component: {
                viewA: Apple,
                viewB: Banana
            }
        },
        {
            path: '/banana',
            component: Banana,
            children: [{
                path: 'red',
                component: redBanana
            }]
        }
    ]
});

let store = new Vuex.Store({
    state: {
        totalPrice: 0
    },
    mutations: { // 同步
        increment(state, price) {
            state.totalPrice += price;
        },
        decrement(state, price) {
            state.totalPrice -= price;
        }
    },
    actions: { // 可以进行异步
        increase(context, price) {
            context.commit('increment', price)
        }
    }
})



new Vue({
    el: '#app',
    router,
    store,
    // router: router ,
    template: '<App/>',
    components: {
        App
    }
});
export default router; //将路由器导出