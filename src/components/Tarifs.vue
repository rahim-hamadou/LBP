<template>
	<div class="tarif">
		<div data-aos="fade-down" data-aos-duration="800" data-aos-delay="50" class="my-4">
			<h1>Prix de nos prestations</h1>
		</div>

		<div class="container informations__prices">
			<div class="row mx-auto justify-content-center">
				<div class="row">
					<h3 class="focus center mb-3">COLORATION VÉGÉTALE*</h3>
					<!-- <h6>Blond cuivré / marron</h6> -->
					<div data-aos="fade-right" class="col">
						<h6>
							1 application (Blond cuivré / marron ,reflets et transparence des cheveux blancs) shampooing
							+ soin massant + séchage
						</h6>
						<ul>
							<li>
								cheveux courts {{ vegetale.simple.cheveuxCourts }} / avec coupe
								{{ vegetale.simple.cheveuxCourtsCoupe }}
							</li>
							<li>
								cheveux mi longs {{ vegetale.simple.cheveuxMiLongs }} / avec coupe
								{{ vegetale.simple.cheveuxMiLongsCoupe }}
							</li>
							<li>
								cheveux longs {{ vegetale.simple.cheveuxlongs }} / avec coupe
								{{ vegetale.simple.cheveuxLongsCoupe }}
							</li>
						</ul>
					</div>
					<div data-aos="fade-left" class="col">
						<h6>
							2 applications (100% couverture des cheveux blancs) marron ou brun + shampoing + soin
							massant + séchage
						</h6>
						<ul>
							<li>
								cheveux courts {{ vegetale.double.cheveuxCourts }} / avec coupe
								{{ vegetale.double.cheveuxCourtsCoupe }}
							</li>
							<li>
								cheveux mi longs {{ vegetale.double.cheveuxMiLongs }} / avec coupe
								{{ vegetale.double.cheveuxMiLongsCoupe }}
							</li>
							<li>
								cheveux longs {{ vegetale.double.cheveuxlongs }} / avec coupe
								{{ vegetale.double.cheveuxLongsCoupe }}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="row">
				<div data-aos="fade-up-right" class="col">
					<h3 class="focus center">COUPE*</h3>

					<ul>
						<li>coupe cheveux très courts (tondeuse/rasé) avec shampoing {{ coupe.cheveuxTresCourts }}</li>
						<li>coupe cheveux courts avec shampoing soin massant séchage {{ coupe.cheveuxCourts }}</li>
						<li>coupe cheveux longs shampoing soin massant séchage {{ coupe.cheveuxLongs }}</li>
						<li>
							coupe tranformation avec conseil morpho shampoing soin massant séchage
							{{ coupe.cheveuxTransfo }}
						</li>
					</ul>
				</div>
			</div>

			<div data-aos="fade-up-left" class="row mx-auto justify-content-center">
				<div class="col">
					<h3 class="focus center">ÉCLAIRCISSEMENT À L'ARGILE</h3>

					<ul>
						<li>balayage à l'argile de {{ eclaircissement.balayageArgile }}</li>
						<li>ombré à l'argile de {{ eclaircissement.ombreArgile }}</li>
					</ul>
				</div>
			</div>

			<div data-aos="fade-right" class="row mx-auto justify-content-center">
				<h3 class="focus center">COLORATION ALTERNATIVE*</h3>
				<p>application couleur shampoing soin massant séchage</p>
				<ul>
					<li>racine court {{ alternative.racineCourt }} /avec coupe {{ alternative.racineCourtCoupe }}</li>
					<li>racine long {{ alternative.racineLong }} / avec coupe {{ alternative.racineLongCoupe }}</li>
				</ul>
			</div>
			<div class="col mx-auto justify-content-center v-slider-bloc">
				<div data-aos="fade-left" class="col">
					<h3 class="focus center">BRUSHING*</h3>

					<ul>
						<li>brushing cheveux courts soin massant {{ Brushing.cheveuxCourtSoin }}</li>
						<li>brushing cheveux longs soin massant {{ Brushing.cheveuxLongSoin }}</li>
					</ul>
				</div>
				<div data-aos="fade-right" class="col">
					<h3 class="focus center">BRUSHING EN PLUS D'UN FORFAITS COUPE OU COULEUR</h3>

					<ul>
						<li>cheveux courts {{ BrushExtra.cheveuxCourts }}</li>
						<li>cheveux mi-longs {{ BrushExtra.cheveuxMiLongs }}</li>
						<li>cheveux longs {{ BrushExtra.cheveuxlongs }}</li>
					</ul>
				</div>
				<div data-aos="fade-left" class="col">
					<h3 class="focus center">SOIN</h3>

					<ul>
						<li>soin hydratant (20min) séchage {{ Soin.soinHydra }}</li>
					</ul>
				</div>
				<div data-aos="fade-up" class="row mt-3 justify-content-center">
					<p class="alias mt-0">*supplément de 10 à 20 euros en fonction de l'épaisseur</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TarifsInfo",
	data() {
		return {
			vegetale: {
				simple: {
					cheveuxCourts: "85€",
					cheveuxCourtsCoupe: "120€",
					cheveuxCourtsBrush: "135€",
					cheveuxMiLongs: "90€",
					cheveuxMiLongsCoupe: "125€",
					cheveuxMiLongsBrush: "150€",
					cheveuxLongs: "100€",
					cheveuxLongsCoupe: "135€",
					cheveuxLongsBrush: "165€",
				},
				double: {
					cheveuxCourts: "115€",
					cheveuxCourtsCoupe: "150€",
					cheveuxCourtsBrush: "180€",
					cheveuxMiLongs: "120€",
					cheveuxMiLongsCoupe: "155€",
					cheveuxMiLongsBrush: "185€",
					cheveuxLongs: "125€",
					cheveuxLongsCoupe: "160€",
					cheveuxLongsBrush: "190€",
				},
			},
			alternative: {
				racineCourt: "85€",
				racineCourtCoupe: "120€",
				racineLong: "95€",
				racineLongCoupe: "130€",
			},
			eclaircissement: {
				balayageArgile: "110€ à 170€",
				ombreArgile: "150€ à 190€",
			},
			coupe: {
				cheveuxTresCourts: "35€",
				cheveuxCourts: "55€",
				cheveuxCourtsbrush: "70€",
				cheveuxLongs: "60€",
				cheveuxLongsBrush: "90€",
				cheveuxTransfo: "80€",
				cheveuxTransfoBrush: "100€",
			},
			Brushing: {
				cheveuxCourtSoin: "45€",
				cheveuxLongSoin: "55€",
			},
			BrushExtra: {
				cheveuxCourts: "15€",
				cheveuxMiLongs: "25€",
				cheveuxlongs: "30€",
			},
			Soin: {
				soinHydra: "45€",
			},
		};
	},
	props: {
		msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-family: "Comic Neue", cursive;
}
ul {
	list-style: none;
}
.informations__prices {
	text-align: center;
	text-decoration: none;
}
.informations__prices a {
	color: black;
}
span {
	font-style: italic;
}
/* .informations__prices {
	font-size: 60%;
} */

.center {
	text-align: center;
	margin: 0 auto;
}

.alias {
	border-radius: 8px;
	background-color: #cde6f5;
	margin: 0;
	width: fit-content;
}
/* DONT USE */

/* sourlignement */
/* .focus {
	font-style: italic;
	width: auto;
	font-style: italic;
	text-decoration: none;
	background-size: 0 100;
	background: linear-gradient(to top, #b8ddc0 0%, #b8ddc0 10%, transparent 80%) no-repeat left bottom / 0% 100%;
	transition: background-size 0.4s;
}
.focus:hover {
	background-size: 120% 20%;
} */
/* sourlignement */
/* Scroll */
/* .container {
	height: 70vh;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
} */

/* .v-slider-bloc {
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 5px solid black;
	height: 80vh;
	scroll-snap-align: center;
} */
/* scroll */
</style>
