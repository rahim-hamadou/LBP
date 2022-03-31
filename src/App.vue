<template>
	<div class="navigation">
		<router-view />
	</div>
</template>

<script>
// import HomeView from "@/views/HomeView.vue";

export default {
	components: {
		// HomeView,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss">
// base
* {
	::before,
	::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
}

html {
	// --res: calc(0.01 * 10vmin);
	font-size: clamp(13px, 5vw, 20px);
}

body {
	font-size: 1.6rem;
	line-height: 1.4;
}
a,
a:visited {
	color: inherit;
}

// h1,
// h2,
// h3,
// h4,
// h5,
// h6,
// a,
// span,
// p:not(nav) {
// 	font-size: calc(30 * var(--res));
// 	font-size: clamp(20px, 3vw, 40px);
// }
// import
@import url(../src/scss/main.scss);
// import

// Main

// Footer
#app {
	background-color: v-bind(colorP);
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #1c2f59;
}
</style>
