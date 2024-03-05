import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const currentDomain = window.location.hostname;
if (currentDomain !== 'ykdev.online' && currentDomain !== 'localhost') {
  window.location.href = 'https://ykdev.online';
}
createApp(App).use(router).mount('#app')
