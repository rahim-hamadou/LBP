<template>
	<div class="home">
		<div class="mb-5">
			<NavBarTop></NavBarTop>
		</div>
		<div class="container-fluid">
			<!-- <div class="v-slider-bloc"> -->
			<!-- Banner -->
			<div class="col bg-lbp mx-0 my-4 flex-column header-top">
				<div class="col logo my-4">
					<img src="../assets/bg/LBP_logo.png" alt="logo du salon de coiffure les belles plantes" />
				</div>
				<div class="col my-1">
					<button type="button" class="btn btn-booking">
						<a
							class="btn-booking booking"
							href="https://widget.treatwell.fr/salon/les-belles-plantes/"
							target="_blank"
							>Réserver</a
						>
					</button>
				</div>
				<!-- </div> -->
				<!-- Banner -->
			</div>
			<div class="container-fluid v-slider-bloc">
				<div
					class="row d-flex flex-column align-items-center flex-md-row align-items-sm-center align-items-md-center"
				>
					<div class="col">
						<h1>Les Belles Plantes, un salon de coiffure nature, BIO et vegan</h1>
						<p class="description mx-3">
							Le salon de coiffure « Les Belles Plantes » tire son nom des bienfaits naturels des végétaux
							utilisés (henné, amla, indigo, camomille, curcuma, brou de noix....) pour réparer, mettre en
							beauté ou colorer en douceur des cheveux et un cuir chevelu, régulièrement malmenés par la
							pollution et les agressions extérieures, « Les Belles Plantes » propose une gamme de
							produits et soins adaptés entièrement naturels, dont la plus part sont issus de
							l'agriculture biologique, labellisés ecocert et vegan.
							<br /><br />
							Grâce à l’expertise, à l’œil et au talent de l'équipe, la coloration végétale prend toute sa
							dimension esthétique sur tous types de cheveux. Naturelle et subtile, les cheveux sont
							gainés, revigorés et nourris véritablement.
						</p>
					</div>
					<div class="col-sm-8 d-flex justify-content-center col-md-4">
						<div class="card-info-1"></div>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-5">
			<FooterBottom></FooterBottom>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import NavBarTop from "@/components/NavBarTop.vue";
import FooterBottom from "@/components/FooterBottom.vue";
import NavBarTop from "@/components/NavBarTop.vue";
// import CardInfo from "@/components/CardInfo.vue";
// import MapInfoVue from "@/components/MapInfo.vue";

export default {
	name: "HomeView",
	components: {
		NavBarTop,
		// CardInfo,
		FooterBottom,
		// MapInfoVue,

		// NavBarTop,
	},
	data() {
		return {};
	},
};
</script>

<style scoped>
.bg-lbp {
	background: url("../assets/bg/LBP_BG.jpg");
	/* background: url("../assets/bg/LBP_logo.png"); */
	background-position: center;
	height: 80vh;
	width: 100%;
	background-repeat: no-repeat;
}
/* .logo {
	width: 10vw;
} */

.btn-booking {
	color: white;
	font-size: 2rem;
	background-color: #1c334f;
	padding: 10px 15px;
	text-decoration: none;
	width: auto;
	margin: 0;
}

.card-info-1 {
	background: url("../assets/Les_Belles_Plantes/Les_Belles_Plantes_FRK_378718_4_xxxxxx.jpg");
	background-size: cover;
	overflow: hidden;
	height: 300px;
	width: 100%;
	background-position: center;
}
.news {
	overflow: hidden;
}
.header-top {
	/* overflow: hidden; */
	display: flex;
	height: 75vh;
	align-items: center;
	justify-content: center;
}

/* snap-scroll
.container-fluid {
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
} */
/* .v-slider-bloc:nth-child(4) {
	background-color: rgb(194, 146, 41);
} */

/* snap-scroll */
/* illustration */
.exemple {
	overflow: hidden;
	height: 200px;
	width: auto;
}
/* illustration */
</style>
