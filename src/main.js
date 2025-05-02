import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import { createPinia } from 'pinia';

const app = createApp(App);

// plugins
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(Toast);

app.mount("#app");
