/**
 * Created by linhaifeng on 2016/10/28.
 */
import Vue from 'vue';
import VueRouter from 'vueRouter';
import App from '../app';
import Index from '../page/index';
import Page1 from '../page/page1';
import Home from '../page/home';
import Article from '../page/article';
import HomeUserInfo from '../page/homeUserInfo';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: App,
        children: [

            { path: 'index', name:'index', component: Index },

            { path: 'page1', name:'page1', component: Page1 },

            { path: 'home/:id', name:'home', component: Home },

            { path: 'HomeUserInfo/:uid', name:'homeUserInfo', component: HomeUserInfo },

            { path:'article/:id', name:'article', component : Article},

        ]
    }
];


const router = new VueRouter({
    routes:routes, // short for routes: routes
    linkActiveClass:'active',     //router-link的选中状态的class，也有一个默认的值
    history:true
});


export  default router