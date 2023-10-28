<template>
	<div class="lg:float-right lg:w-[75vw]">
		<div class="hidden lg:block">
			<!-- offers and review section -->
			<section class="flex gap-4 h-fit">
				<!-- offer cover -->
				<img :src="slides[slideIndex].cover" class="rounded h-100% w-[70%]" loading="lazy">
				<!-- offer shots -->
				<div class="flex flex-col gap-1 h-[100%]">
					<span class="gradient-bg rounded p-8 h-auto">
						<div class="flex flex-col gap-4">
							<h1 class="font-bold">{{ slides[slideIndex].name }}</h1>
							<p class="font-light">{{ slides[slideIndex].brief }}</p>
						</div>
						<div class="pt-10">
							<p class="flex items-center gap-5"><ion-icon name="cash-outline"></ion-icon>{{ slides[slideIndex].price }}$</p>
							<button class="bg-[#00000080] p-2 rounded shadow flex-center gap-5">Order Now<ion-icon name="arrow-forward-outline"></ion-icon></button>
						</div>
					</span>
					<div class="flex gap-1 h-[50%]">
						<img :src="slides[slideIndex].first_shot" class="w-[50%] h-max rounded" loading="lazy">
						<img :src="slides[slideIndex].second_shot" class="w-[50%] h-max rounded" loading="lazy">
					</div>
				</div>
			</section>
			<div class="slide-index w-[100%] flex-center p-5 gap-4">
			<button 
			    v-for="(slide, index) in slides" 
			    :key="index" 
			    class="slide-btn" 
			    :class="{ 'bg-primary': index === slideIndex }" 
			    @click="changeSlide(index)"
			></button>
			</div>		
		</div>

		<section id="games-list">
			<div class="w-[100%] flex justify-between">
				<p>Trending Games</p>
				<p>Show All</p>
			</div>
			<div class="grid grid-cols-4 gap-8">
				<a href="#" v-for="game in trendingGames">
					<img :src="game.pic" :alt="game.name" class="w-[240px] h-[240px] object-cover rounded"
					loading="lazy">
				</a>											
			</div>
		</section>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'BodyContent',
		data(){
			return {
				slides: [{
					name: "Valorant",
					brief: "Team Deathmatch game mode, with 50 kills to win. Abilities are not allowed to be used, and players spawn in as a random agent",
					cover: "./src/assets/valorant.jpg",
					first_shot: "./src/assets/valorant-1.webp",
					second_shot: "./src/assets/valorant-2.jpg",
					price: "16.44"
				},
				{
					name: "vxbv",
					brief: "mbn",
					cover: ",n",
					first_shot: ".,m",
					second_shot: "vxc",
					price: "nbv"
				}
				],
				slideIndex: 0,
				trendingGames: [{
					name: "hogwarts legacy",
					pic: "./src/assets/hogwartslegacy.jpg",
					url: "#"
				},{
					name: "GTAV",
					pic: "./src/assets/gtav.png",
					url: "#"
				},{
					name: "Call of Duty",
					pic: "./src/assets/cod.jpg",
					url: "#"
				},{
					name: "Cyberpunk2077",
					pic: "./src/assets/cyberpunk_2077.jpg",
					url: "#"
				}]
			}
		},
		methods: {
			changeSlide: function(index){
				this.slideIndex = index;
			}
		}
	}
</script>