import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// boostrap
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap";

// bootstrap
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";

// animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
	initClassName: "aos-init", // class applied after initialization
	animatedClassName: "aos-animate", // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: "ease", // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

//Add all icons to the library so you can use it in your page
library.add(fas, far, fab);

createApp(App).component("BootstrapIcon", BootstrapIcon).component("fa", FontAwesomeIcon).use(router).mount("#app");
