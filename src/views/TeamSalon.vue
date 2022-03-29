<template>
	<div>
		<div mb-5>
			<NavBarTop></NavBarTop>
		</div>

		<div class="border my-5">
			<div>
				<h1>L'histoire des Belles Plantes, un salon de coiffure unique.</h1>
				<LaTeam></LaTeam>
				<LaTeam></LaTeam>
				<LaTeam></LaTeam>
			</div>
			<div>
				<h1>Venez découvrir la coiffure végétale dans notre salon</h1>
				<HairCare></HairCare>
				<HairCare></HairCare>
				<HairCare></HairCare>
			</div>
		</div>
		<FooterBottom></FooterBottom>
	</div>
	<!-- </div> -->
</template>
<script>
import HairCare from "../components/HairCare.vue";
import LaTeam from "../components/LaTeam.vue";
import FooterBottom from "@/components/FooterBottom.vue";
import NavBarTop from "@/components/NavBarTop.vue";

export default {
	name: "TeamSalon",
	components: {
		// LeCheveux,
		LaTeam,
		NavBarTop,
		FooterBottom,
		HairCare,
	},
};
</script>
<style scoped>
/* snap-scroll */
/* .container-fluid {
	height: 100vh;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
}

.v-slider-bloc {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 40px;
	border-bottom: 5px solid black;
	height: 100vh;
	scroll-snap-align: center;
}
.v-slider-bloc:nth-child(1) {
	background-color: red;
}
.v-slider-bloc:nth-child(2) {
	background-color: rgb(28, 138, 34);
}
.v-slider-bloc:nth-child(3) {
	background-color: rgb(0, 110, 255);
}
.v-slider-bloc:nth-child(4) {
	background-color: rgb(194, 146, 41);
} */

/* snap-scroll */

.border {
	border: 10px solid black;
}
</style>
