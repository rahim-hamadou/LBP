import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";

//Add all icons to the library so you can use it in your page
library.add(fas, far, fab);

createApp(App).component("BootstrapIcon", BootstrapIcon).component("fa", FontAwesomeIcon).use(router).mount("#app");
