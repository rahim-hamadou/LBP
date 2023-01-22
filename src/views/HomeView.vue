<template>
	<div class="home align-center">
		<div class="mb-5">
			<NavBarTop></NavBarTop>
		</div>
		<div class="container-fluid">
			<!-- <div class="v-slider-bloc"> -->
			<!-- Banner -->
			<div class="col bg-lbp mx-0 my-4 flex-column header-top">
				<div
					data-aos="fade-down"
					data-aos-duration="800"
					data-aos-delay="50"
					data-aos-mirror="true"
					class="col logo my-4"
				>
					<img src="../assets/bg/LBP_logo.png" alt="logo du salon de coiffure les belles plantes" />
				</div>
				<div data-aos="zoom-in-up" data-aos-delay="350" class="col my-1">
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
			<div class="container-fluid w-100 mx-auto align-center">
				<div
					class="row d-flex flex-column align-items-center flex-md-row mx-auto align-items-sm-center align-items-md-center"
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
				</div>
				<div class="container-fluid my-3">
					<div class="my-2 row d-flex justify-content-center align-items-center">
						<div
							class="row-sm-8 d-flex justify-content-center w-100 align-items-center flex-column flex-md-row"
						>
							<div data-aos="fade-right" class="row-md-5 row-sm-12 card-info-2"></div>
							<div class="col-sm-12 col-md-7 text-description">
								Retrouvez vos habitudes aux Belles Plantes Pour tous les friands de coloration végétale,
								vous trouverez votre bonheur dans notre salon de coiffure. Nous proposons également des
								colorations alternatives, semi-végétales afin de se convertir en douceur vers le 100%
								naturel. Le salon propose également de vous faire de magnifiques balayages ou ombrés, et
								ce à l’argile !
							</div>
						</div>
						<div class="my-2 row justify-content-sm-center justify-content-md-center">
							<div
								class="row-sm-8 d-flex justify-content-center w-100 align-items-center flex-column-reverse flex-md-row"
							>
								<div class="col-sm-12 col-md-7 text-description">
									Retrouvez vos habitudes aux Belles Plantes Pour tous les friands de coloration
									végétale, vous trouverez votre bonheur dans notre salon de coiffure. Nous proposons
									également des colorations alternatives, semi-végétales afin de se convertir en
									douceur vers le 100% naturel. Le salon propose également de vous faire de
									magnifiques balayages ou ombrés, et ce à l’argile !
								</div>
								<div data-aos="fade-left" class="row-md-5 row-sm-12 card-info-3"></div>
							</div>
						</div>
						<div class="my-2 row justify-content-sm-center">
							<div
								class="row-sm-8 d-flex justify-content-center w-100 align-items-center flex-column flex-md-row"
							>
								<div data-aos="fade-right" class="row-md-5 row-sm-12 card-info-4"></div>
								<div class="col-sm-12 col-md-7 text-description">
									Retrouvez vos habitudes aux Belles Plantes Pour tous les friands de coloration
									végétale, vous trouverez votre bonheur dans notre salon de coiffure. Nous proposons
									également des colorations alternatives, semi-végétales afin de se convertir en
									douceur vers le 100% naturel. Le salon propose également de vous faire de
									magnifiques balayages ou ombrés, et ce à l’argile !
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-5 p-0">
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
	created() {
		document.title = "Accueil";
	},
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
.container-fluid {
	padding: 0;
}
h1 {
	font-family: "Comic Neue", cursive;
}
.bg-lbp {
	background: url("../assets/bg/LBP_BG.jpg");
	/* background: url("../assets/bg/LBP_logo.png"); */
	background-position: center;
	height: 80vh;
	width: 100%;
	background-repeat: no-repeat;
}
.logo {
	margin: auto;
}
.logo img {
	height: 100%;
	width: 90%;
	font-size: 10px;
}

.btn-booking {
	color: white;
	font-size: 1.8rem;
	background-color: #1c334f;
	padding: 10px;
	text-decoration: none;
	width: auto;
	margin: 0;
}

.card-info-2 {
	background: url("../assets/Les_Belles_Plantes/Les_Belles_Plantes_FRK_378718_13_9_xxx.jpg");
	background-size: cover;
	overflow: hidden;
	height: 300px;
	width: 100%;
	background-position: center;
}
.card-info-3 {
	background: url("../assets/Les_Belles_Plantes/Les_Belles_Plantes_FRK_378718_4_x.jpg");
	background-size: cover;
	overflow: hidden;
	height: 300px;
	width: 100%;
	background-position: center;
}
.card-info-4 {
	background: url("../assets/Les_Belles_Plantes/Les_Belles_Plantes_FRK_378718_13_9.jpg");
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
	margin: 0 !important;
}
.illustration {
	height: 300px;
}

.text-description {
	padding: 20px;
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
