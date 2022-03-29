<template>
	<div>
		<div mb-5>
			<NavBarTop></NavBarTop>
		</div>

		<div class="container about my-5">
			<h1>Informations du salon</h1>

			<div class="row my-4">
				<!-- <div class="col red border">red</div>
			<div class="col blue border">blue</div>
			<div class="col green border">green</div> -->
			</div>
			<div class="row flex-md-row flex-sm-column">
				<div class="col"><TarifsInfo /></div>
				<div class="col"><ContactInfo></ContactInfo></div>
			</div>
			<div class="row mx-auto justify-content-center loca">
				<div class="col mx-auto my-4">
					<MapInfo></MapInfo>
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

<style scoped lang="scss"></style>
