import 'vite/modulepreload-polyfill';
import { createApp } from 'vue'
import '../style.css'
import PrivacyApp from './Privacy.vue'

createApp(PrivacyApp).mount('#app')
