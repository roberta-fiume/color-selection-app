import Vue from 'vue'
import App from './App.vue'

export const colorBus = new Vue();

// export const colorBusBox = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
