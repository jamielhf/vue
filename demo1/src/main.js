import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vueRouter';
import App from './app';
import Index from './page/index'; 
import Page1 from './page/page1';
import Page2 from './page/page2';

require('./css/style.scss');
//如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
Vue.use(VueRouter);

const routes = [
    { path: '/', component: App,
        children: [

            { path: 'index', name:'index', component: Index },

            { path: 'page1', name:'page1', component: Page1 },

            { path: 'page2/:id', name:'page2', component: Page2 }
        ]
    }
];





const router = new VueRouter({
    routes:routes, // short for routes: routes
    linkActiveClass:'active'     //router-link的选中状态的class，也有一个默认的值

});


const app = new Vue({
    router
}).$mount('#app');

