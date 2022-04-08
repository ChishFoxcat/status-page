import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';

const VueAPP = createApp(App);
VueAPP.use(store);
VueAPP.use(router);
VueAPP.use(TDesign);
VueAPP.mount('#CHISH-STATUS');

if (process.env.NODE_ENV === 'production') {
    console.clear();
}
