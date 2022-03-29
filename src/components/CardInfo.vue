<template lang="">
	<div>
		<div class="flip-card">
			<div class="flip-card-inner">
				<div class="flip-card-front centerCard">
					<img src="{{hairdresser}}" alt="hairdresser" />

					<!-- <img src="{{hairdresspic}}" alt="un(e) coiffeur(se)" /> -->
				</div>
				<div class="flip-card-back d-flex">
					<p>{{ content }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "CardInfo",
	data() {
		return {
			// title: "toto",
			// contentTitle: "tata",
			// content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, reprehenderit excepturi ",
		};
	},
	props: {
		title: String,
		content: String,
		hairdresser: String,
	},
};
</script>
<style lang="scss" scoped>
.flip-card {
	background-color: transparent;
	width: 30vw;
	height: 30vh;
	perspective: 1000px;
	overflow: hidden;
}
.flip-card:nth-child(1) {
}

.flip-card-inner {
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.6s;
	transform-style: preserve-3d;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
	transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.flip-card-front {
	background-color: #bbb;
	color: black;
}

.flip-card-back {
	background-color: #2980b9;
	color: white;
	transform: rotateY(180deg);
}
.centerCard {
	display: flex;
	align-items: center;
	justify-content: center;
}
.dispoCard {
	display: flex;

	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
</style>
