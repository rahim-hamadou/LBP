<template>
	<div class="gallery my-5">
		<NavBarTop></NavBarTop>
		<h1>Les Belles Plantes en images</h1>
		<CarouselDemo></CarouselDemo>
		<FooterBottom></FooterBottom>
	</div>
</template>

<script>
// @ is an alias to /src
// import NavBarTop from "@/components/NavBarTop.vue";
import CarouselDemo from "@/components/CarouselDemo.vue";
import FooterBottom from "@/components/FooterBottom.vue";
import NavBarTop from "@/components/NavBarTop.vue";

export default {
	name: "GalleryView",
	components: { CarouselDemo, NavBarTop, FooterBottom },
};
</script>
