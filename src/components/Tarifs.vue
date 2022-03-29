<template>
	<div class="tarif">
		<div class="informations__prices">
			<h2>Prix de nos prestations (+30€ pour une coupe)</h2>
			<p>
				<a href="https://widget.treatwell.fr/salon/les-belles-plantes/" target="_blank"
					>Coloration végétales (+ Shampoing, soin et séchage) : <span>80€ à 120€ </span></a
				>
			</p>
			<p>
				<a href="https://widget.treatwell.fr/salon/les-belles-plantes/" target="_blank"
					>Balayage à l'argile (selon longueur et épaisseur) : <span>60€ à 170€ </span>
				</a>
			</p>
			<p>
				<a href="https://widget.treatwell.fr/salon/les-belles-plantes/" target="_blank"
					>Coupe (+ shampoing et séchage) : <span>55€ à 70€</span></a
				>
			</p>
			<p>
				<a href="https://widget.treatwell.fr/salon/les-belles-plantes/" target="_blank"
					>Brushing (selon longueur) : <span>35€ à 45€</span></a
				>
			</p>
			<p>
				<a href="https://widget.treatwell.fr/salon/les-belles-plantes/" target="_blank"
					>Soin aux huiles : <span>40€</span></a
				>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "TarifsInfo",
	props: {
		msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
