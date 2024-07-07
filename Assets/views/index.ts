import 'vite/modulepreload-polyfill';
import { createApp } from 'vue'
import '../style.css'
import IndexApp from './Index.vue'

createApp(IndexApp).mount('#app')
