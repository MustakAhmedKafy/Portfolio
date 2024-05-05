import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//  window.$ = require("jquery");
//  window.JQuery = require("jquery");

// pagination
import VueAwesomePaginate from "vue-awesome-paginate";

import "vue-awesome-paginate/dist/style.css";

// createApp(App).mount("#app");
createApp(App).use(VueAwesomePaginate).mount("#app");
