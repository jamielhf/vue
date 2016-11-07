import Vue from 'vue';

import VueResource from 'vue-resource';
import router from './router/router';
import store from './store/store';


//如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：

Vue.use(VueResource);



const app = new Vue({
    router,
   
    store
}).$mount('#app');

