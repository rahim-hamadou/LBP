<template>
	<div>
		<h2>{{ titleHair }}</h2>
		<p>
			{{ contentHair }}
		</p>
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
