import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import supabase from "vue-3-supabase";
import store from "./store/index.js";

const app = createApp(App);

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.VUE_APP_SUPABASE_ANON_KEY;

app.use(supabase, {
  supabaseUrl: supabaseUrl,
  supabaseKey: supabaseAnonKey,
  options: {},
});

app.use(router);
app.use(store);
app.mount("#app");
