import "mdb-vue-ui-kit/css/mdb.min.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import TextClamp from 'vue3-text-clamp';

import { setup as setupFirebase } from './services/firebase.service'


setupFirebase()

createApp(App).use(router).use(createPinia()).use(TextClamp).mount("#app");
