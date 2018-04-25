// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
import IndexPage from './pages/index.vue'
import VueResource from 'vue-resource'
import Detail from './pages/detail.vue'
import DetailAnaPage from './pages/details/ana.vue'
import DetailCouPage from './pages/details/cou.vue'
import DetailForPage from './pages/details/for.vue'
import DetailPubPage from './pages/details/pub.vue'
Vue.use(VueRouter); // 注册router 
Vue.use(VueResource); // 声明resource
let router = new VueRouter({
	mode: 'history', // 默认设置history哈希，设置之后没有哈希  处理非HTML5
	routes: [
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/detail',
			component: Detail,
			children: [
				{
					path: 'ana',
					component: DetailAnaPage
				},
				{
					path: 'cou',
					component: DetailCouPage
				},
				{
					path: 'for',
					component: DetailForPage
				},
				{
					path: 'pub',
					component: DetailPubPage
				},
			]
		}
	]
});

new Vue({
	el: '#app',
	router, 
	template: '<Layout/>',
	components: {
		Layout
	}
});