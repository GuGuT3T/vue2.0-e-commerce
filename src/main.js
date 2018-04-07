// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App-animate'
import router from './router'
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App) //ES6
        // render: function(h) {
        //     return h(App)
        // }
});