<template>
	<section>
		<div class="row about p-0">
			<!-- Footer -->

			<footer class="text-center text-lg-start footer-content">
				<!-- Section: Links  -->

				<div class="container text-center text-md-start mt-3">
					<div class="row d-flex flex-column flex-md-row footer-comp">
						<div class="col">
							<div class="row"><h5>Horaires d'ouverture</h5></div>
							<div class="row">
								<p>
									Lun&nbsp;: FERMÉ<br />
									Du Mardi au Mercredi&nbsp;: {{ mardi }}<br />Jeudi &nbsp;: {{ jeudi }}<br />Vendredi
									&nbsp;: {{ vendredi }}<br />Samedi &nbsp;: {{ samedi }}<br />
								</p>
							</div>
							<!-- <div class="row">
								<p>
									15 rue Jean Mace<br />Paris 75011<br /><BootstrapIcon icon="phone"></BootstrapIcon
									>&nbsp;06 20 81 41 41<br /><BootstrapIcon icon="telephone"></BootstrapIcon>&nbsp;01
									43 72 87 70<br />
								</p>
							</div> -->
						</div>
						<div class="col citation">
							<div class="row"><h5>La presse parle de nous</h5></div>
							<div class="row">
								<div class="quote">
									<div class="text">
										<p>On a trouvé la coiffeuse idéale.</p>
										<p>
											<a
												class="author"
												href="https://www.mylittleparis.com/mode-beaute/les-belles-plantes-meilleur-coiffeur-de-paris"
												target="_blank"
												>My Little Paris</a
											>
										</p>
									</div>
								</div>
								<div class="quote">
									<div class="text">
										<p>Une alternative à Christophe Robin.</p>
										<p>
											<a
												class="author"
												href="https://lilibarbery.com/beauty/adresses/cheveux/article-les-belles-plantes/"
												target="_blank"
												>Lili Barbery</a
											>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="row"><h5>Nous Joindre</h5></div>
							<div class="row social">
								<div class="col">
									<a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
										<a class="icon-name" href="https://fr-fr.facebook.com/salonlesbellesplantes/"
											><BootstrapIcon icon="facebook" class="icon fb" />&nbsp;Facebook</a
										>
									</a>

									<a class="nav-link" href="#" tabindex="-1" aria-disabled="true"
										><a class="icon-name" href="https://www.instagram.com/les.belles.plantes/?hl=fr"
											><BootstrapIcon icon="instagram" class="icon ig" />&nbsp;Instagram</a
										></a
									>
									<div class="row my-1">
										<p>
											<!-- 15 rue Jean Mace<br />Paris 75011<br /> -->
											<BootstrapIcon icon="phone"></BootstrapIcon>&nbsp;06 20 81 41 41<br /><BootstrapIcon
												icon="telephone"
											></BootstrapIcon
											>&nbsp;01 43 72 87 70<br />
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Copyright -->
				<div class="text-center border footer-bottom">
					<a class="text-reset fw-bold" href="https://lesbellesplantes.fr//"> Les Belles Plantes</a> © 2022
					Tous droits réservés.
				</div>
				<!-- Copyright -->

				<!-- Section: Links  -->
			</footer>
			<!-- Footer -->
		</div>
	</section>
</template>

<script>
export default {
	name: "FooterBottom",
	data() {
		return {
			mardi: "9h30 à 19h",
			jeudi: "9h30 à 21h",
			vendredi: "9h30 à 20h",
			samedi: "9h à 18h",
		};
	},
	props: {},
};
</script>
<style scoped>
h3 {
	font-size: clamp(24px, 5vw, 25px);
	margin: 10px 0;
	font-weight: bold;
	text-transform: uppercase;
}
p,
a {
	padding: 0;

	text-decoration: none;
}

.social {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.citation p,
a {
	margin: 0;
}
.ig {
	color: #f46f30;
	text-decoration: none;
	transition: all 0.3s ease-in-out;
}
.ig:hover {
	color: #f46f30;
	transform: scale(1.5);
}
.fb {
	color: #3b5998;
	text-decoration: none;
	transition: all 0.3s ease-in-out;
}
.fb:hover {
	color: #3b5998;
	transform: scale(1.5);
}
/* sourlignement */
.author {
	font-style: italic;
	text-decoration: none;
	background-size: 0 100;
	background: linear-gradient(to top, #b8ddc0 0%, #b8ddc0 10%, transparent 80%) no-repeat left bottom / 0% 100%;
	transition: background-size 0.4s;
}
.author:hover {
	background-size: 100% 100%;
}
/* sourlignement */

.icon-name {
	color: #3b5998;
}
.footer-comp {
	text-align: center;
}

.footer-content {
	background-color: #dfede2;
	color: #1c2f59;
}
.footer-bottom {
	background: #b8ddc0;
}
</style>
