import Vue from 'vue'
//import store from './store/store'
import App from './App.vue'
import Calendar from './modules/index';



Vue.use(Calendar);

new Vue({
  el: '#app',
  //store,
  render: h => h(App)
})
