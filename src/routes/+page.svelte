<script lang="ts">
	import { onMount } from 'svelte';
	import { products } from '$lib/data/products';
	import { formatPrice } from '$lib/utils';
	import { cartStore } from '$lib/stores/cart';

	// Get featured products (first 4 products)
	const featuredProducts = products.slice(0, 4);

	onMount(() => {
		cartStore.init();
	});
</script>

<svelte:head>
	<title>GameTech Store - Premium Gaming & PC Hardware</title>
	<meta name="description" content="Your ultimate destination for gaming consoles, PC components, and gaming peripherals. Shop premium gaming hardware with expert support." />
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
					<a href="/" class="text-cyan-400 hover:text-cyan-300">Home</a>
					<a href="/shop" class="text-gray-300 hover:text-cyan-400 transition-colors">Shop</a>
					<a href="/about" class="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
					<a href="/contact" class="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
				</nav>
				<div class="flex items-center space-x-4">
					<a href="/admin/login" class="text-gray-400 hover:text-cyan-400 transition-colors">Admin</a>
					<a href="/cart" class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all">
						Cart ({$cartStore.items.length})
					</a>
				</div>
			</div>
		</div>
	</header>

	<!-- Hero Section -->
	<section class="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black py-20 lg:py-32 overflow-hidden">
		<!-- Background Pattern -->
		<div class="absolute inset-0 opacity-20">
			<div class="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
			<div class="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-xl"></div>
			<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>
		</div>
		
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
					<span class="block mb-2">Level Up Your</span>
					<span class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
						Gaming Setup
					</span>
				</h1>
				<p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
					Discover the ultimate gaming experience with premium consoles, high-performance PC components, 
					and professional-grade peripherals. Your victory starts here.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/shop" class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105">
						Shop Now 🎮
					</a>
					<a href="/about" class="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-500/10 transition-all">
						Learn More
					</a>
				</div>
			</div>

			<!-- Stats -->
			<div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
				<div class="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
					<div class="text-3xl font-bold text-cyan-400 mb-2">500+</div>
					<div class="text-gray-300">Premium Products</div>
				</div>
				<div class="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
					<div class="text-3xl font-bold text-purple-400 mb-2">50K+</div>
					<div class="text-gray-300">Happy Gamers</div>
				</div>
				<div class="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
					<div class="text-3xl font-bold text-pink-400 mb-2">24/7</div>
					<div class="text-gray-300">Expert Support</div>
				</div>
				<div class="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
					<div class="text-3xl font-bold text-green-400 mb-2">99.9%</div>
					<div class="text-gray-300">Uptime</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Featured Categories -->
	<section class="py-20 bg-black/40">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-white mb-6">Explore Our Categories</h2>
				<p class="text-xl text-gray-400 max-w-3xl mx-auto">
					From cutting-edge consoles to high-performance PC builds, we have everything you need to dominate the competition.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<a href="/shop?category=Gaming+Consoles" class="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
					<div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
					<div class="relative z-10">
						<div class="text-4xl mb-4">🎮</div>
						<h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Gaming Consoles</h3>
						<p class="text-gray-400 text-sm">PlayStation, Xbox, Steam Deck and more</p>
					</div>
				</a>

				<a href="/shop?category=PC+Components" class="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
					<div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
					<div class="relative z-10">
						<div class="text-4xl mb-4">💾</div>
						<h3 class="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">PC Components</h3>
						<p class="text-gray-400 text-sm">CPUs, GPUs, RAM and motherboards</p>
					</div>
				</a>

				<a href="/shop?category=Gaming+Peripherals" class="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 overflow-hidden">
					<div class="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
					<div class="relative z-10">
						<div class="text-4xl mb-4">⌨️</div>
						<h3 class="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Gaming Peripherals</h3>
						<p class="text-gray-400 text-sm">Keyboards, mice, headsets and more</p>
					</div>
				</a>

				<a href="/shop?category=Games+%26+Software" class="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 overflow-hidden">
					<div class="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
					<div class="relative z-10">
						<div class="text-4xl mb-4">🕹️</div>
						<h3 class="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Games & Software</h3>
						<p class="text-gray-400 text-sm">Latest games and software titles</p>
					</div>
				</a>
			</div>
		</div>
	</section>

	<!-- Featured Products -->
	<section class="py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-white mb-6">Featured Products</h2>
				<p class="text-xl text-gray-400 max-w-3xl mx-auto">
					Check out our most popular gaming gear, hand-picked by our experts for maximum performance.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each featuredProducts as product}
					<div class="group bg-black/40 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
						<!-- Product Image -->
						<a href="/product/{product.slug}" class="block relative">
							<div class="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
								<img 
									src={product.images.featured} 
									alt={product.title}
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									on:error={(e) => {
										e.target.style.display = 'none';
										e.target.nextElementSibling.style.display = 'flex';
									}}
								/>
								<!-- Fallback for failed image -->
								<div class="text-center text-gray-400 group-hover:text-cyan-400 transition-colors hidden">
									<div class="text-4xl mb-2">🎮</div>
									<p class="text-sm">Product</p>
								</div>
							</div>
							{#if product.compareAtPrice}
								<div class="absolute top-4 left-4">
									<span class="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-lg text-xs font-bold">
										-{Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}%
									</span>
								</div>
							{/if}
						</a>

						<!-- Product Info -->
						<div class="p-6">
							<div class="mb-2">
								<span class="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full border border-cyan-500/20">
									{product.category}
								</span>
							</div>
							
							<a href="/product/{product.slug}" class="block">
								<h3 class="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
									{product.title}
								</h3>
							</a>

							<div class="mb-4">
								<div class="flex items-center space-x-2">
									<span class="text-xl font-bold text-cyan-400">{formatPrice(product.price)}</span>
									{#if product.compareAtPrice}
										<span class="text-sm text-gray-500 line-through">{formatPrice(product.compareAtPrice)}</span>
									{/if}
								</div>
							</div>

							<a
								href="/product/{product.slug}"
								class="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all"
							>
								View Product
							</a>
						</div>
					</div>
				{/each}
			</div>

			<div class="text-center mt-12">
				<a href="/shop" class="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-purple-600 transition-all">
					View All Products →
				</a>
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border-t border-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-4xl font-bold text-white mb-6">Ready to Level Up?</h2>
			<p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
				Join thousands of satisfied gamers who trust GameTech Store for their gaming needs. 
				Experience premium quality, competitive prices, and exceptional customer service.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/shop" class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-purple-600 transition-all">
					Start Shopping
				</a>
				<a href="/contact" class="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-bold hover:bg-cyan-500/10 transition-all">
					Get Expert Advice
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
						Your ultimate destination for premium gaming hardware and accessories. 
						We're passionate about helping gamers achieve their best performance.
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

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
