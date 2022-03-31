<template>
	<div class="tarif">
		<div class="">
			<h1>Prix de nos prestations</h1>
		</div>

		<div class="container-fluid informations__prices">
			<div class="row mx-auto justify-content-center v-slider-bloc">
				<div class="col">
					<h3>COLORATION VÉGÉTALE*</h3>
					<h6>Blond cuivré / marron</h6>
					<h6>
						1 application (reflets et transparence des cheveux blancs) shampooing + soin massant + séchage
						/brush
					</h6>
					<ul>
						<li>
							cheveux courts {{ vegetale.simple.cheveuxCourts }} / avec coupe
							{{ vegetale.simple.cheveuxCourtsCoupe }} / brush
							{{ vegetale.simple.cheveuxCourtsBrush }}
						</li>
						<li>
							cheveux mi longs {{ vegetale.simple.cheveuxMiLongs }} / avec coupe
							{{ vegetale.simple.cheveuxMiLongsCoupe }} / brush {{ vegetale.simple.cheveuxMiLongsBrush }}
						</li>
						<li>
							cheveux longs {{ vegetale.simple.cheveuxlongs }} / avec coupe
							{{ vegetale.simple.cheveuxLongsCoupe }} / brush {{ vegetale.simple.cheveuxLongsBrush }}
						</li>
					</ul>
					<h6>
						2 applications (100% couverture des cheveux blancs) marron ou brun + shampoing + soin massant +
						séchage / brush
					</h6>
					<ul>
						<li>
							cheveux courts {{ vegetale.double.cheveuxCourts }} / avec coupe
							{{ vegetale.double.cheveuxCourtsCoupe }} / brush
							{{ vegetale.double.cheveuxCourtsBrush }}
						</li>
						<li>
							cheveux mi longs {{ vegetale.double.cheveuxMiLongs }} / avec coupe
							{{ vegetale.double.cheveuxMiLongsCoupe }} / brush {{ vegetale.double.cheveuxMiLongsBrush }}
						</li>
						<li>
							cheveux longs {{ vegetale.double.cheveuxlongs }} / avec coupe
							{{ vegetale.double.cheveuxLongsCoupe }} / brush {{ vegetale.double.cheveuxLongsBrush }}
						</li>
					</ul>
				</div>
			</div>
			<div class="row mx-auto justify-content-center v-slider-bloc">
				<h3>COLORATION ALTERNATIVE*</h3>
				<p>application couleur shampoing soin massant séchage</p>
				<ul>
					<li>racine court {{ alternative.racineCourt }} /avec coupe {{ alternative.racineCourtCoupe }}</li>
					<li>racine long {{ alternative.racineLong }} / avec coupe {{ alternative.racineLongCoupe }}</li>
				</ul>
			</div>

			<div class="row mx-auto justify-content-center v-slider-bloc">
				<div class="col">
					<h2>ÉCLAIRCISSEMENT À L'ARGILE</h2>

					<ul>
						<li>balayage à l'argile de {{ eclaircissement.balayageArgile }}</li>
						<li>ombré à l'argile de {{ eclaircissement.ombreArgile }}</li>
					</ul>
				</div>
			</div>
			<div class="col v-slider-bloc">
				<div class="col">
					<h2>COUPE* / AVEC BRUSH</h2>

					<ul>
						<li>coupe cheveux très courts (tondeuse/rasé) avec shampoing {{ coupe.cheveuxTresCourts }}</li>
						<li>
							coupe cheveux courts avec shampoing soin massant séchage {{ coupe.cheveuxCourts }} /
							{{ coupe.cheveuxCourtsbrush }}
						</li>
						<li>
							coupe cheveux longs shampoing soin massant séchage {{ coupe.cheveuxLongs }} /
							{{ coupe.cheveuxLongsBrush }}
						</li>
						<li>
							coupe tranformation avec conseil morpho shampoing soin massant séchage
							{{ coupe.cheveuxTransfo }} / {{ coupe.cheveuxTransfoBrush }}
						</li>
					</ul>
				</div>
			</div>
			<div class="row mx-auto justify-content-center v-slider-bloc">
				<div class="col">
					<h2>BRUSHING*</h2>

					<ul>
						<li>brushing cheveux courts soin massant {{ Brushing.cheveuxCourtSoin }}</li>
						<li>brushing cheveux longs soin massant {{ Brushing.cheveuxLongSoin }}</li>
					</ul>
				</div>
				<div class="col">
					<h2>BRUSHING EN PLUS D'UN FORFAITS COUPE OU COULEUR</h2>

					<ul>
						<li>cheveux courts {{ BrushExtra.cheveuxCourts }}</li>
						<li>cheveux mi-longs {{ BrushExtra.cheveuxMiLongs }}</li>
						<li>cheveux longs {{ BrushExtra.cheveuxlongs }}</li>
					</ul>
				</div>
			</div>
			<!-- <div class="row mx-auto justify-content-center loca v-slider-bloc"></div> -->
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

/* Scroll */
.container-fluid {
	height: 70vh;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
}

.v-slider-bloc {
	display: flex;
	justify-content: center;
	align-items: center;

	border-bottom: 5px solid black;
	height: 80vh;
	scroll-snap-align: center;
}
/* scroll */
</style>
