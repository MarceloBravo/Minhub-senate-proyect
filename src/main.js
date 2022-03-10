import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";  //Implementando las rutas

createApp(App).use(router).mount('#app')
