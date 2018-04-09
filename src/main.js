// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router' // 引入库
import Apple from './components/apple'
import Banana from './components/banana'
Vue.config.productionTip = false;
Vue.use(VRouter); // 注册使用路由

let router = new VRouter({
    mode: 'history', //映射关系 默认为哈希，设置之后没有哈希
    routes: [{
            path: '/apple', // 每一个对应映射表
            componet: Apple
        },
        {
            path: '/banana',
            componet: Banana
        }
    ]
})
new Vue({
    el: '#app',
    router,
    // router: router ,
    template: '<App/>',
    components: { App }
});
export default router; //将路由器导出