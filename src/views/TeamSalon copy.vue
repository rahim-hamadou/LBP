<template>
	<div>
		<div mb-5>
			<NavBarTop></NavBarTop>
		</div>

		<div class="container-fluid my-5">
			<div class="">
				<div data-aos="fade-up" class="row v-slider-bloc">
					<h1>L'histoire des Belles Plantes, un salon de coiffure unique.</h1>
				</div>

				<div class="row v-slider-bloc">
					<div class="col-9">
						<LaTeam
							titleTeam="Pourquoi Les Belles Plantes pour un salon de coiffure ?
"
							contentTeam="« Les Belles Plantes », c'est l'histoire d'une coiffeuse qui pratique depuis 20 ans, et experte dans la coloration végétale depuis plus de 15 ans. Sa passion pour son métier l'a poussé à créer ce salon de coiffure. Ce salon, né d'un amour de l'environnement, est spécialisé dans les colorations 100% végétales (oui oui, c'est encore possible de ne pas avoir de produits chimiques de nos jours), mais également dans les balayages et ombrés à l'argile, ainsi que dans les soins des cheveux par les plantes. Nous accordons également énormément d'importance à vos coupes de cheveux, et c'est pourquoi nous bannissons tout effilage.

"
						></LaTeam>
					</div>
				</div>
				<div class="col banner-img v-slider-bloc banner">
					<!-- <img src="" alt="" /> -->
				</div>

				<div class="row v-slider-bloc">
					<div class="col-9">
						<LaTeam
							titleTeam="Un endroit dédié à vos cheveux et à votre confort
"
							contentTeam="Le salon de coiffure « Les Belles Plantes » a été imaginé comme un espace à part, un lieu exigeant, engagé et donnant corps et consistance aux envies de ses nombreuses clientes parisiennes (mais pas que !) que l'équipe qualifiée du salon se plaît quotidiennement à sublimer. C'est dans un décor cosy et minimaliste sur un agréable fond de bois et de plantes que nous vous accueillons autour de la table avec du thé, du chocolat et quelques douceurs pour faire de votre réservation dans le salon un moment d'évasion, loin des tracas de la vie quotidienne.

"
						></LaTeam>
					</div>
				</div>
				<div class="col banner-img v-slider-bloc banner">
					<!-- <img src="" alt="" /> -->
				</div>

				<div class="row v-slider-bloc">
					<div class="col-9">
						<LaTeam
							titleTeam="Le petit plus du salon
"
							contentTeam="Bien entendu, le Wi-Fi est à votre disposition pour faire partager à toutes vos connaissances votre bulle de décompression ! Si vous n'êtes pas du genre « connecté », des livres et magazines sont à votre disposition pour compléter ce rendez-vous. Nous faisons de votre rendez-vous un temps de coiffure intimiste et chaleureux afin de correspondre le mieux aux envies de chaque client. « Les Belles Plantes », c'est plus qu'un lieu de travail, c'est une véritable passion et une philosophie de vie que nous décidons de partager tous ensemble. Notre salon se veut respectueux des hommes et de l'environnement, et c'est pour cela que nous sommes presque zéro déchets ! Même vos cheveux sont récoltés et recyclés grâce à l'association Coiffeurs Justes. Nous sommes également alimentés par l'électricité verte de chez Enercoop, et nous vous proposons des shampooings que vous pourrez venir faire recharger au lieu d'en acheter des nouveaux !"
						></LaTeam>
					</div>
				</div>
				<div class="col banner-img v-slider-bloc banner">
					<!-- <img src="" alt="" /> -->
				</div>
			</div>
			<div class="my-3">
				<div class="row v-slider-bloc">
					<h1>Venez découvrir la coiffure végétale dans notre salon</h1>
				</div>
				<div class="col mx-auto my-4 v-slider-bloc">
					<MapInfo class="mapScreen"></MapInfo>
				</div>

				<div class="">
					<div class="row v-slider-bloc">
						<div class="col-9">
							<HairCare
								titleHair="Retrouvez vos habitudes aux Belles Plantes
"
								contentHair="Pour tous les friands de coloration végétale, vous trouverez votre bonheur dans notre salon de coiffure. Nous proposons également des colorations alternatives, semi-végétales afin de se convertir en douceur vers le 100% naturel. Le salon propose également de vous faire de magnifiques balayages ou ombrés, et ce à l’argile !

"
							></HairCare>
						</div>
					</div>
					<div class="col banner-img v-slider-bloc banner">
						<!-- <img src="" alt="" /> -->
					</div>
					<div class="row v-slider-bloc">
						<div class="col-9">
							<HairCare
								titleHair="Les Belles Plantes, bien plus qu'un salon de coiffure
"
								contentHair="Nous vous proposons, en plus des coupes et colorations, une gamme de soins naturels haut de gamme (MARCAPAR ou 2MOSS) ayant pour vocation « le bien-être et la beauté du cheveu », dans le but de redonner force et brillance à vos cheveux. L’équipe des Belles Plantes, passionnée par les plantes et par ce qu’offre la nature, vous propose des mélanges de plantes adaptés à la nature de vos cheveux grâce aux trouvailles qu'elle fait aux quatre coins du monde.

"
							></HairCare>
						</div>
					</div>
					<div class="col banner-img v-slider-bloc banner">
						<!-- <img src="" alt="" /> -->
					</div>

					<div class="row v-slider-bloc">
						<div class="col-9">
							<HairCare
								titleHair=""
								contentHair="Pour sublimer la beauté de ses coupes et couleur, nous disposons d'un comptoir à maquillage entièrement BIO, végan et rechargeable de la marque ZAO dans lequel vous pourrez piocher les produits qui vous conviennent. L’équipe saura évidemment aiguiller les indécises pour qu’elles puissent sortir du salon en étant pleinement épanouies. Enfin, des ateliers d’initiation / coaching avec une maquilleuse, une spécialiste des huiles essentielles et végétales ou d’autres intervenants dans le domaine de la beauté seront mis en place tout au long de l’année et resteront accessible sur réservation. (Pour être tenu des actualités, suivez nous sur Facebook et Instagram)

"
							></HairCare>
						</div>
					</div>
					<div class="col banner-img v-slider-bloc banner">
						<!-- <img src="" alt="" /> -->
					</div>
				</div>
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
import MapInfo from "@/components/MapInfo.vue";

export default {
	name: "TeamSalon",
	components: {
		// LeCheveux,
		LaTeam,
		NavBarTop,
		FooterBottom,
		HairCare,
		MapInfo,
	},
};
</script>
<style scoped>
/* snap-scroll */
.container-fluid {
	height: 80vh;
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
.v-slider-bloc:nth-child(1) {
	background-color: red;
}
.v-slider-bloc:nth-child(2) {
	background-color: rgb(28, 138, 34);
}
.v-slider-bloc + .banner {
	background-color: rgb(0, 110, 255);
	height: 90vh;
}
.v-slider-bloc:nth-child(4) {
	background-color: rgb(194, 146, 41);
}

/* snap-scroll */

.border {
	border: 12px solid black;
}
.banner-img {
	background: url("../assets/Les_Belles_Plantes/Les_Belles_Plantes_FRK_378718_4_xxxxxx.jpg");

	overflow: hidden;
	height: 300px;
	width: 100%;
	background-position: center;
	background-size: cover;
}
.banner-img:nth-child(1) {
	background: url("../assets/gallery/plantes-vertes-66.jpeg");
	background-position: center;
	background-size: cover;
}
.banner-img:nth-child(2) {
	background: url("../assets/gallery/plantes-vertes-11.jpeg");
	background-position: center;
	background-size: cover;
}
.banner-img:nth-child(3) {
	background: url("../assets/gallery/plantes-vertes-22.jpeg");
	background-position: center;
	background-size: cover;
}
.banner-img:nth-child(4) {
	background: url("../assets/gallery/plantes-vertes-33.jpeg");
	background-position: center;
	background-size: cover;
}
.banner-img:nth-child(5) {
	background: url("../assets/gallery/plantes-vertes-00.jpeg");
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
}
.banner-img:nth-child(6) {
	background: url("../assets/gallery/plantes-vertes-55.jpeg");
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
}

/* MAP */
.mapScreen {
	width: 100%;
}
/* MAP */
</style>
