<template>
	<div>
		<div mb-2>
			<NavBarTop></NavBarTop>
		</div>

		<div class="about my-2">
			<div class="">
				<div class="row my-4">
					<div class="row flex-md-row flex-sm-column">
						<div class="col"><TarifsInfo /></div>
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
// import ContactInfo from "../components/Contact.vue";
// import MapInfo from "../components/MapInfo.vue";
import FooterBottom from "@/components/FooterBottom.vue";
import NavBarTop from "@/components/NavBarTop.vue";

export default {
	name: "AboutView",
	components: {
		TarifsInfo,
		// MapInfo,
		// ContactInfo,
		NavBarTop,
		FooterBottom,
	},
};
</script>

<style scoped lang="scss">
// .container {
// 	height: 70vh;
// 	overflow-y: scroll;
// 	scroll-snap-type: y mandatory;
// }

// .v-slider-bloc {
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	border-bottom: 5px solid black;
// 	height: 90vh;
// 	scroll-snap-align: center;
// }
</style>
