<template>
	<div>
		<h2>{{ titleTeam }}</h2>
		<p>{{ contentTeam }}</p>
	</div>
</template>
<script>
export default {
	name: "LaTeam",
	data() {
		return {
			lien: <a href="https://www.enercoop.fr/">Enercoop</a>,
		};
	},
	props: {
		titleTeam: String,
		contentTeam: String,
	},
};
</script>
<style>
* {
	font-size: 1rem;
}
h2 {
	font-size: clamp(20px, 5vw, 25px);
	overflow: hidden;
}
</style>
