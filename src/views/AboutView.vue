<template>
	<div>
		<div mb-5>
			<NavBarTop></NavBarTop>
		</div>

		<div class="container about my-5">
			<h1>Informations du salon</h1>
			<div class="container">
				<div class="row my-4 v-slider-bloc">
					<div class="row flex-md-row flex-sm-column">
						<div class="col"><TarifsInfo /></div>
						<div class="col"><ContactInfo></ContactInfo></div>
					</div>
				</div>

				<div class="row mx-auto justify-content-center loca v-slider-bloc">
					<div class="col mx-auto my-4">
						<MapInfo></MapInfo>
					</div>
				</div>
			</div>
		</div>

		<FooterBottom></FooterBottom>
	</div>
</template>

<script>
// @ is an alias to /src
// import NavBarTop from "@/components/NavBarTop.vue";
import TarifsInfo from "@/components/Tarifs.vue";
import ContactInfo from "../components/Contact.vue";
import MapInfo from "../components/MapInfo.vue";
import FooterBottom from "@/components/FooterBottom.vue";
import NavBarTop from "@/components/NavBarTop.vue";

export default {
	name: "AboutView",
	components: {
		TarifsInfo,
		MapInfo,
		ContactInfo,
		NavBarTop,
		FooterBottom,
	},
};
</script>

<style scoped lang="scss">
.container {
	height: 70vh;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
}

.v-slider-bloc {
	display: flex;
	justify-content: center;
	align-items: center;
	/* font-size: 40px; */
	border-bottom: 5px solid black;
	height: 100vh;
	scroll-snap-align: center;
}
</style>
