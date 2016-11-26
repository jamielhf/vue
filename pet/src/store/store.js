/**
 * Created by linhaifeng on 2016/10/28.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import article from './modules/article';
import calendar from './modules/calendar';
import home from './modules/home';
import comm from './modules/comm';

Vue.use(Vuex);


const store = new Vuex.Store({
    modules: {
        comm,
        index,
        article,
        calendar,
        home
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
});


export default store