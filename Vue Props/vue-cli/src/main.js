import Vue from 'vue'
import App from './App.vue'
import User from './components/User.vue'
Vue.component('user', User)

new Vue({
  el: '#app',
  render: h => h(App)
})

export const eventBus = new Vue({

  methods:{
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});