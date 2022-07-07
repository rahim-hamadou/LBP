<template>
	<div data-aos="fade-up">
		<h2>{{ titleHair }}</h2>
		<p>
			{{ contentHair }}
		</p>
		<div v-html="data"></div>
	</div>
</template>
<script>
export default {
	name: "HairCare",
	props: {
		titleHair: String,
		contentHair: String,
		contentHairPlus: String,
		linkElect: String,
	},
	data() {
		return {
			enercoop: "https://www.enercoop.fr/",
		};
	},
};
</script>
<style lang="scss" scoped></style>
