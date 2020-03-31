import Vue from 'vue';
import App from './App.vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import VueClipboards from "vue-clipboards";
import ClickOutside from 'vue-click-outside'

import {
  store
} from './store/store.js';

Vue.config.productionTip = false
Vue.component('v-select', vSelect);
Vue.use(VueClipboards);
Vue.use(ClickOutside);

// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes: [

//   ]
// });
// 전역 사용자 정의 디렉티브 v-focus 등록
Vue.directive('focus', {
  // 바인딩 된 엘리먼트가 DOM에 삽입되었을 때...
  inserted: function (el) {
    // 엘리먼트에 포커스를 줍니다
    el.focus()
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
