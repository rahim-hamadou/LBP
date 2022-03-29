<template>
	<div class="row border">
		<!-- Footer -->
		<footer class="text-center text-lg-start bg-light text-muted">
			<!-- Section: Links  -->
			<section class="">
				<div class="container text-center text-md-start mt-5">
					<!-- Grid row -->
					<div class="row mt-3">
						<!-- Grid column -->
						<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<!-- Content -->
							<h6 class="text-uppercase fw-bold mb-4">
								<i class="fas fa-gem me-3"></i>Les belles Plantes
							</h6>
							<p>
								Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
							</p>
							<div class="quote">
								<div class="text">On a trouvé la coiffeuse idéale.</div>
								<div class="author">
									<a
										href="https://www.mylittleparis.com/mode-beaute/les-belles-plantes-meilleur-coiffeur-de-paris"
										target="_blank"
										>My Little Paris</a
									>
								</div>
							</div>
							<div class="quote">
								<div class="text">Une alternative à Christophe Robin.</div>
								<div class="author">
									<a
										href="https://lilibarbery.com/beauty/adresses/cheveux/article-les-belles-plantes/"
										target="_blank"
										>Lili Barbery</a
									>
								</div>
							</div>
						</div>
						<!-- Grid column -->

						<!-- Grid column -->
						<div class="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
							<!-- Links -->
							<h6 class="text-uppercase fw-bold mb-4">Horaires</h6>
							<div>Mardi / Mercredi de 10h à 19h</div>

							<div>Jeudi de 10h à 21h</div>
							<div>Vendredi de 10h à 20h</div>
							<div>Samedi, de 9h30 à 18h</div>
						</div>
						<!-- Grid column -->

						<!-- Grid column -->
						<div class="col-md-8 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<!-- Links -->
							<h6 class="text-uppercase fw-bold mb-4">Contact</h6>
							<p><BootstrapIcon icon="house" /> 15 rue Jean Mace 75011</p>
							<p>
								<BootstrapIcon icon="envelope" />
								gaelle.grippon@gmail.com
							</p>
							<p><BootstrapIcon icon="phone" /> + 01.43.72.87.70</p>
							<p><BootstrapIcon icon="phone" /> + 06.20.81.41.41</p>
						</div>
						<!-- Grid column -->
					</div>
					<!-- Grid row -->
				</div>
			</section>
			<!-- Section: Links  -->

			<!-- Copyright -->
			<div class="text-center p-4 border">
				<a class="text-reset fw-bold" href="https://lesbellesplantes.fr//">Les Belles Plantes</a> © 2022 Tous
				droits réservés.
			</div>
			<!-- Copyright -->
		</footer>
		<!-- Footer -->
	</div>
</template>

<script>
export default {
	name: "FooterBottom",
	props: {},
};
</script>
<style scoped>
.quote .text::before {
	content: "“";
}
.quote .text::after {
	content: "“";
}

/* sourlignement */
.author a {
	font-style: italic;
	text-decoration: none;
	background-size: 0 100;
	background: linear-gradient(to top, wheat 0%, wheat 10%, transparent 80%) no-repeat left bottom / 0% 100%;
	transition: background-size 0.4s;
}
.author a:hover {
	background-size: 100% 100%;
}
/* sourlignement */
</style>
