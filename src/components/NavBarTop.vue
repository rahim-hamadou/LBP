<template>
	<div>
		<nav class="navbar fixed-top navbar-expand-md navbar-light bg-light nav-top">
			<div class="container-fluid navigation-bar">
				<a class="navbar-brand me-0" href="#" title="les belles plantes"
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
					</ul>
					<!-- social -->

					<div class="social">
						<ul class="social d-flex justify-content-center">
							<li class="nav-item">
								<a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
									<a class="fb" href="https://fr-fr.facebook.com/salonlesbellesplantes/"
										><BootstrapIcon icon="facebook"
									/></a>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#" tabindex="-1" aria-disabled="true"
									><a class="ig" href="https://www.instagram.com/les.belles.plantes/?hl=fr"
										><BootstrapIcon icon="instagram" class="icon" /></a
								></a>
							</li>
						</ul>
					</div>
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
	background-color: #0087ca;
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
	background-color: rgb(214, 75, 20);
}
nav {
	padding: 0px;

	a {
		font-weight: bold;
		color: #000;

		&.router-link-exact-active {
			color: #42b983;
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

.ig:hover {
	color: #f46f30;
}
.fb:hover {
	color: #3b5998;
}
</style>
