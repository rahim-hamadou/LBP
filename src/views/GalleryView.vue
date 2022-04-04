<template>
	<div class="gallery mt-5">
		<NavBarTop></NavBarTop>
		<div data-aos="fade-down" data-aos-duration="800" data-aos-delay="50" class="mt-5">
			<h1 class="my-3 pt-4">Les Belles Plantes en images</h1>
		</div>

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
