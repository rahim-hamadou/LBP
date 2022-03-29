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
}
html {
	--res: calc(0.01 * 10vmin);
}
h1,
h2,
h3,
h4,
h5,
h6,
a,
span,
p:not(nav) {
	font-size: calc(25 * var(--res));
	// font-size: clamp(20px, 3vw, 40px);
}
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
	// color: #2c3e50;
}
</style>
