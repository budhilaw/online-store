<script lang="ts">
	import { onMount } from 'svelte';
	import { cartStore } from '$lib/stores/cart';

	onMount(() => {
		cartStore.init();
	});
</script>

<svelte:head>
	<title>About Us - GameTech Store | Gaming Hardware Specialists</title>
	<meta name="description" content="Learn about GameTech Store - Indonesia's premier destination for gaming hardware, PC components, and gaming peripherals. Passionate about gaming excellence." />
</svelte:head>

<div class="min-h-screen bg-gray-900">
	<!-- Header -->
	<header class="bg-black/80 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<a href="/" class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						GameTech Store
					</a>
				</div>
				<nav class="hidden md:flex space-x-8">
					<a href="/" class="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
					<a href="/shop" class="text-gray-300 hover:text-cyan-400 transition-colors">Shop</a>
					<a href="/about" class="text-cyan-400 hover:text-cyan-300">About</a>
					<a href="/contact" class="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
				</nav>
				<div class="flex items-center space-x-4">
					<a href="/admin/login" class="text-gray-400 hover:text-cyan-400 transition-colors">Admin</a>
					<a href="/cart" class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all">
						Cart ({$cartStore.items.reduce((total, item) => total + item.quantity, 0)})
					</a>
				</div>
			</div>
		</div>
	</header>

	<!-- Hero Section -->
	<section class="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 py-20">
		<div class="absolute inset-0 bg-black/40"></div>
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
				<span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
					About GameTech
				</span>
			</h1>
			<p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
				Passionate about gaming excellence, dedicated to bringing you the ultimate gaming experience with premium hardware and unmatched service.
			</p>
		</div>
	</section>

	<!-- Our Story -->
	<section class="py-20 bg-black/40">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				<div>
					<h2 class="text-4xl font-bold text-white mb-8">
						Our <span class="text-cyan-400">Gaming Journey</span>
					</h2>
					<div class="space-y-6 text-gray-300 leading-relaxed">
						<p>
							Founded in 2020 by passionate gamers for passionate gamers, GameTech Store began as a small startup in Jakarta with a simple mission: to provide Indonesian gamers with access to the highest quality gaming hardware at competitive prices.
						</p>
						<p>
							What started as a dream shared by three gaming enthusiasts has grown into Indonesia's premier destination for gaming hardware. We understand that every frame matters, every millisecond counts, and every component contributes to your victory.
						</p>
						<p>
							Today, we serve thousands of satisfied customers across Indonesia, from casual mobile gamers to professional esports athletes. Our commitment to quality, authenticity, and customer satisfaction has made us the trusted choice for gaming excellence.
						</p>
					</div>
				</div>
				<div class="relative">
					<div class="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-cyan-500/20 flex items-center justify-center">
						<div class="text-center text-gray-400">
							<div class="text-8xl mb-4">🎮</div>
							<p class="text-lg">Our Gaming Story</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Mission & Values -->
	<section class="py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-white mb-6">Our Mission & Values</h2>
				<p class="text-xl text-gray-400 max-w-3xl mx-auto">
					Driven by passion, guided by excellence, committed to your gaming success.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="bg-black/40 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all">
					<div class="text-4xl mb-6">🏆</div>
					<h3 class="text-2xl font-bold text-white mb-4">Excellence First</h3>
					<p class="text-gray-300">
						We curate only the finest gaming hardware from trusted brands, ensuring every product meets our rigorous quality standards.
					</p>
				</div>

				<div class="bg-black/40 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all">
					<div class="text-4xl mb-6">🤝</div>
					<h3 class="text-2xl font-bold text-white mb-4">Customer First</h3>
					<p class="text-gray-300">
						Your gaming journey is our priority. We provide expert advice, reliable support, and services that go beyond just selling products.
					</p>
				</div>

				<div class="bg-black/40 rounded-2xl p-8 border border-gray-800 hover:border-pink-500/50 transition-all">
					<div class="text-4xl mb-6">🚀</div>
					<h3 class="text-2xl font-bold text-white mb-4">Innovation Always</h3>
					<p class="text-gray-300">
						We stay ahead of gaming trends and technology, bringing you the latest innovations before they become mainstream.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Team Section -->
	<section class="py-20 bg-black/40">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-white mb-6">Meet Our Gaming Experts</h2>
				<p class="text-xl text-gray-400 max-w-3xl mx-auto">
					A team of passionate gamers and tech enthusiasts dedicated to your gaming success.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="aspect-square bg-gradient-to-br from-cyan-800 to-cyan-900 rounded-2xl border border-cyan-500/20 flex items-center justify-center mb-6">
						<div class="text-6xl">👨‍💻</div>
					</div>
					<h3 class="text-xl font-bold text-white mb-2">Arief Rahman</h3>
					<p class="text-cyan-400 mb-3">Founder & CEO</p>
					<p class="text-gray-300 text-sm">
						Professional esports player turned entrepreneur. 10+ years in competitive gaming and hardware expertise.
					</p>
				</div>

				<div class="text-center">
					<div class="aspect-square bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl border border-purple-500/20 flex items-center justify-center mb-6">
						<div class="text-6xl">👩‍🔬</div>
					</div>
					<h3 class="text-xl font-bold text-white mb-2">Sarah Wijaya</h3>
					<p class="text-purple-400 mb-3">Head of Product</p>
					<p class="text-gray-300 text-sm">
						Former Intel engineer with deep knowledge of PC components and gaming optimization strategies.
					</p>
				</div>

				<div class="text-center">
					<div class="aspect-square bg-gradient-to-br from-pink-800 to-pink-900 rounded-2xl border border-pink-500/20 flex items-center justify-center mb-6">
						<div class="text-6xl">👨‍💼</div>
					</div>
					<h3 class="text-xl font-bold text-white mb-2">Budi Santoso</h3>
					<p class="text-pink-400 mb-3">Customer Success</p>
					<p class="text-gray-300 text-sm">
						Gaming community leader with expertise in customer service and gaming setup optimization.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Stats -->
	<section class="py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-white mb-6">Our Impact</h2>
				<p class="text-xl text-gray-400">
					Numbers that showcase our commitment to the Indonesian gaming community.
				</p>
			</div>

			<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
				<div class="text-center bg-black/30 rounded-2xl p-8 border border-gray-800">
					<div class="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
					<div class="text-gray-300">Happy Gamers</div>
				</div>
				<div class="text-center bg-black/30 rounded-2xl p-8 border border-gray-800">
					<div class="text-4xl font-bold text-purple-400 mb-2">500+</div>
					<div class="text-gray-300">Premium Products</div>
				</div>
				<div class="text-center bg-black/30 rounded-2xl p-8 border border-gray-800">
					<div class="text-4xl font-bold text-pink-400 mb-2">15+</div>
					<div class="text-gray-300">Cities Served</div>
				</div>
				<div class="text-center bg-black/30 rounded-2xl p-8 border border-gray-800">
					<div class="text-4xl font-bold text-green-400 mb-2">99.5%</div>
					<div class="text-gray-300">Satisfaction Rate</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border-t border-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-4xl font-bold text-white mb-6">Ready to Join Our Gaming Community?</h2>
			<p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
				Experience the GameTech difference. Premium hardware, expert support, and a community that shares your passion for gaming excellence.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/shop" class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-purple-600 transition-all">
					Explore Products
				</a>
				<a href="/contact" class="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-bold hover:bg-cyan-500/10 transition-all">
					Get in Touch
				</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-black border-t border-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div class="md:col-span-2">
					<h3 class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
						GameTech Store
					</h3>
					<p class="text-gray-400 mb-4 max-w-md">
						Indonesia's premier destination for gaming hardware and accessories. 
						Passionate about helping gamers achieve their best performance.
					</p>
					<div class="flex space-x-4">
						<span class="text-2xl">🎮</span>
						<span class="text-2xl">⚡</span>
						<span class="text-2xl">🏆</span>
					</div>
				</div>
				
				<div>
					<h4 class="text-white font-semibold mb-4">Quick Links</h4>
					<div class="space-y-2">
						<a href="/shop" class="block text-gray-400 hover:text-cyan-400 transition-colors">Shop</a>
						<a href="/about" class="block text-gray-400 hover:text-cyan-400 transition-colors">About</a>
						<a href="/contact" class="block text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
						<a href="/admin/login" class="block text-gray-400 hover:text-cyan-400 transition-colors">Admin</a>
					</div>
				</div>
				
				<div>
					<h4 class="text-white font-semibold mb-4">Legal</h4>
					<div class="space-y-2">
						<a href="/terms" class="block text-gray-400 hover:text-cyan-400 transition-colors">Terms</a>
						<a href="/privacy" class="block text-gray-400 hover:text-cyan-400 transition-colors">Privacy</a>
						<a href="/shipping" class="block text-gray-400 hover:text-cyan-400 transition-colors">Shipping</a>
						<a href="/returns" class="block text-gray-400 hover:text-cyan-400 transition-colors">Returns</a>
					</div>
				</div>
			</div>
			
			<div class="border-t border-gray-800 mt-8 pt-8 text-center">
				<p class="text-gray-400">
					© 2024 GameTech Store. All rights reserved. Built for gamers, by gamers.
				</p>
			</div>
		</div>
	</footer>
</div> 