// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
import IndexPage from './pages/index.vue'
import VueResource from 'vue-resource'
Vue.use(VueRouter); // 注册router
<<<<<<< HEAD
Vue.use(VueResource); // 声明resource
=======
Vue.use(VueResource);
>>>>>>> 041b7b8c91efaeed4309fe14588b76c3034e81c7
let router = new VueRouter({
    mode: 'history', // 默认设置history哈希，设置之后没有哈希  处理非HTML5
    routes: [{
        path: '/',
        component: IndexPage
    }]
});

new Vue({
    el: '#app',
    router,
    template: '<Layout/>',
    components: {
        Layout
    }
});