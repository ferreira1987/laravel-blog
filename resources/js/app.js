require('./bootstrap');

import { createApp } from 'vue';
import Home from './components/blog/Home.vue'

const app = createApp(Home);

app.mount('#app');