import { createApp } from "vue";
import App from "./modules/App/App";
import router from "./modules/App/routes/index";
import { createPinia } from "pinia";
import "./index.css";
import axios from "./utils/axios";
export const AppInstance = createApp(App);
console.log(
  `%cURL Shortener App\nVersion: ${process.env.VUE_APP_VERSION}\nOrigin: ${window.location.origin}\nAPI Endpoint: ${process.env.VUE_APP_API_ENDPOINT}\nMode: ${process.env.NODE_ENV}`,
  "color:#FFA522; font-weight: 700;"
);

AppInstance.config.globalProperties.$axios = {
  ...axios,
};

const Init = () => {
  AppInstance.use(createPinia());
  AppInstance.use(router);

  AppInstance.mount("#app");
};
Init();
