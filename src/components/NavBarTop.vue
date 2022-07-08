<template>
	<div class="container">
		<nav class="navbar fixed-top navbar-expand-md navbar-light bg-light nav-top">
			<div class="container-fluid navigation-bar navigation-place">
				<a
					class="navbar-brand me-0 nav-content nameSite"
					href="https://lesbellesplantes.fr/"
					title="les belles plantes"
					>Les Belles Plantes<i class="bi-alarm"></i>
				</a>

				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul class="navbar-nav align-items-center">
						<li class="nav-item hover-underline-animation">
							<router-link to="/">Accueil</router-link>
						</li>
						<li class="nav-item hover-underline-animation">
							<router-link to="/prestations">Prestations</router-link>
						</li>
						<li class="nav-item hover-underline-animation">
							<router-link to="/salon">Le Salon</router-link>
						</li>
						<li class="nav-item hover-underline-animation">
							<router-link cl to="/gallery">Galerie</router-link>
						</li>
						<li class="nav-item hover-underline-animation">
							<!-- <router-link cl to="/gallery">Galerie</router-link> -->
							<a
								class="btn-booking booking"
								href="https://widget.treatwell.fr/salon/les-belles-plantes/"
								target="_blank"
								>Réserver</a
							>
						</li>
					</ul>
					<!-- social -->

					<div class="social">
						<ul class="social d-flex justify-content-center">
							<li class="nav-item">
								<a class="nav-link logoSocial" href="#" tabindex="-1" aria-disabled="true">
									<a class="fb" href="https://fr-fr.facebook.com/salonlesbellesplantes/"
										><BootstrapIcon icon="facebook" class="icon fb"
									/></a>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link logoSocial" href="#" tabindex="-1" aria-disabled="true"
									><a class="ig" href="https://www.instagram.com/les.belles.plantes/?hl=fr"
										><BootstrapIcon icon="instagram" class="icon ig" /></a
								></a>
							</li>
						</ul>
					</div>
					<div class="social"></div>
					<!-- social -->
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: "NavBarTop",
	props: {
		// msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//title

.nameSite {
	font-family: "Comic Neue", cursive;
	&:hover {
		color: white;
	}
}
.navigation-place {
	padding: 0 15px !important;
}
// Tools
.blue {
	background-color: blue;
	border: 2px solid black;
}
.red {
	background-color: red;
	border: 2px solid black;
}
.green {
	background-color: green;
	border: 2px solid black;
}
.border {
	background-color: wheat;
	border: 11px solid #1c6ea4;
	border-radius: 17px;
}

.test {
	color: red;
	background-color: yellow;
}

// underline
.hover-underline-animation {
	display: inline-block;
	position: relative;
	color: #0087ca;
}

.hover-underline-animation:after {
	content: "";
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 2px;
	bottom: 0;
	left: 0;
	background-color: #fff;
	transform-origin: bottom right;
	transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
	transform: scaleX(1);
	transform-origin: bottom left;
}
// underline

// Tools
// Header
.navigation-bar {
	background-color: #8dafc2;
	padding: 0;
}
nav {
	width: 100%;
	padding: 0px;

	a {
		font-weight: bold;
		color: #000;

		&.router-link-exact-active {
			color: #fff;
		}
	}
}
.icon:hover,
.icon:active {
	cursor: pointer;
}

ul {
	margin: 0;
	list-style-type: none;
}

li a {
	text-decoration: none;
	color: #1c2f59;
}

li .nav-item:hover {
	color: #d6249f;
	// text-decoration: underline;
}
.nav-item {
	text-decoration: none;
	text-transform: uppercase;
	margin: 10px;
}

.social {
	padding: 0;
}
.social li {
	margin: 0;
}
.logoSocial {
	padding: 0;
	margin: 0 15px;
}

.ig {
	padding: 0;
	//margin: 15px;
	color: #f46f30;
	text-decoration: none;
	transition: all 0.3s ease-in-out;
}
.fb {
	padding: 10;
	//margin: 15px;
	color: #3b5998;
	text-decoration: none;
	transition: all 0.3s ease-in-out;
}
.ig:hover {
	color: #f46f30;
	transform: scale(1.5);
}
.fb:hover {
	color: #3b5998;
	transform: scale(1.5);
}
.nav-content {
	color: #1c2f59;
}
</style>
