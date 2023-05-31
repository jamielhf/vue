import Vue from 'vue'
import App from './App.vue'
import Calendar from './modules/index';

export default Calendar


Vue.use(Calendar);

new Vue({
  el: '#app',
  //store,
  render: h => h(App)
})
