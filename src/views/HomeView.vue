<template>
	<div class="home">
		<div class="mb-5">
			<NavBarTop></NavBarTop>
		</div>
		<div class="container-fluid">
			<div class="v-slider-bloc">
				<!-- Banner -->
				<div class="col bg-lbp mx-0 my-4 flex-column">
					<div class="col my-4">
						<img src="../assets/bg/LBP_logo.png" alt="logo du salon de coiffure les belles plantes" />
					</div>
					<div class="col">
						<button type="button" class="btn btn-booking">
							<a
								class="btn-booking booking"
								href="https://widget.treatwell.fr/salon/les-belles-plantes/"
								target="_blank"
								>Réserver</a
							>
						</button>
					</div>
				</div>
				<!-- Banner -->
			</div>
			<div class="v-slider-bloc">
				<div
					class="row d-flex flex-column flex-lg-row align-items-sm-center align-items-lg-center justify-content-center"
				>
					<div class="col">
						<h1>
							<span class="italic">Les Belles Plantes</span>, un salon de coiffure nature, BIO et vegan
						</h1>
						<p class="description mx-5">
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
					<div class="col-4 d-flex justify-content-center">
						<div class="illustration">
							<img src="../assets/bg/LBP_logo.png" alt="" />
						</div>
					</div>
				</div>
			</div>

			<div class="v-slider-bloc flex-sm-column flex-md-row justify-content-around">
				<CardInfo
					title="L'histoire du salon
"
					content="Le salon de coiffure  Les Belles Plantes  a été imaginé comme un espace à part, un lieu exigeant, engagé et donnant corps et consistance aux envies de ses clients."
				></CardInfo>
				<CardInfo
					title="Découvrez le salon de coiffure végétale"
					content="Les Belles plantes propose toutes prestations, allant de la coupe aux ciseaux pour messieurs, passant par la coloration végétale ou semi-végétale pour madame, sans oublier les soins régénérateurs..."
				></CardInfo>
				<CardInfo
					hairdresser="../assets/team/hairdress-1.jpeg"
					title="Nos plus belles coiffures"
					content="Les Belles Plantes, ça n'est pas qu'un salon de coiffure ! C'est également un lieu de création !"
				></CardInfo>
			</div>

			<div class="v-slider-bloc">
				<FooterBottom></FooterBottom>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import NavBarTop from "@/components/NavBarTop.vue";
import FooterBottom from "@/components/FooterBottom.vue";
import NavBarTop from "@/components/NavBarTop.vue";
import CardInfo from "@/components/CardInfo.vue";
// import MapInfoVue from "@/components/MapInfo.vue";

export default {
	name: "HomeView",
	components: {
		NavBarTop,
		CardInfo,
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

.btn-booking {
	color: white;
	font-size: 1.2rem;
	background-color: #1c334f;
	padding: 10px 15px;
	text-decoration: none;
}
.italic {
	font-style: italic;
}
.card-info-1 {
	background: url("../assets/Les_Belles_Plantes/Les_Belles_Plantes_FRK_378718_4_xxxxxx.jpg");
	background-size: cover;
	overflow: hidden;
	height: 300px;
	width: auto;
	background-position: center;
}
.news {
	overflow: hidden;
}

/* snap-scroll */
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
}
/* .v-slider-bloc:nth-child(4) {
	background-color: rgb(194, 146, 41);
} */

/* snap-scroll */
/* illustration */
.illustration {
	background-color: rgb(214, 75, 20);
	/* height: 40vh; */
	padding: 10px;
	width: 25vh;
	border-radius: 35% 35% 0 0;
	display: flex;
	align-items: center;
	justify-content: center;
}
/* illustration */
</style>
