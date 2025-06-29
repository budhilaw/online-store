<script lang="ts">
	import { onMount } from 'svelte';
	import { products, categories } from '$lib/data/products';
	import { formatPrice } from '$lib/utils';
	import { cartStore } from '$lib/stores/cart';
	import { toastStore } from '$lib/stores/toast';

	let searchQuery = '';
	let selectedCategory = '';
	let sortBy = 'name-asc';
	let filteredProducts = [...products];

	// Filter and sort products
	$: {
		filteredProducts = products.filter(product => {
			const matchesSearch = searchQuery === '' || 
				product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
			
			const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
			
			return matchesSearch && matchesCategory && product.isActive;
		});

		// Sort products
		filteredProducts.sort((a, b) => {
			switch (sortBy) {
				case 'name-asc':
					return a.title.localeCompare(b.title);
				case 'name-desc':
					return b.title.localeCompare(a.title);
				case 'price-asc':
					return a.price - b.price;
				case 'price-desc':
					return b.price - a.price;
				default:
					return 0;
			}
		});
	}

	function addToCart(product: any) {
		cartStore.addItem({
			productId: product.id,
			sku: product.sku,
			title: product.title,
			price: product.price,
			image: product.images.featured
		});

		// Show success notification
		toastStore.add({
			type: 'success',
			title: 'Added to Cart! 🎮',
			message: `${product.title} added to your cart`,
			duration: 3000
		});
	}

	function getStockStatus(product: any) {
		if (product.inventory.stock === 0) {
			return { text: 'Out of Stock', class: 'text-red-400', indicator: 'bg-red-500' };
		} else if (product.inventory.stock <= product.inventory.lowStockThreshold) {
			return { text: `Low Stock (${product.inventory.stock})`, class: 'text-yellow-400', indicator: 'bg-yellow-500' };
		} else {
			return { text: `In Stock (${product.inventory.stock})`, class: 'text-green-400', indicator: 'bg-green-500' };
		}
	}

	onMount(() => {
		cartStore.init();
	});
</script>

<svelte:head>
	<title>Shop - GameTech Store | Gaming & PC Components</title>
	<meta name="description" content="Shop the latest gaming consoles, PC components, peripherals and games. Premium gaming hardware at competitive prices." />
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
					<a href="/shop" class="text-cyan-400 hover:text-cyan-300">Shop</a>
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
	<section class="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 py-20">
		<div class="absolute inset-0 bg-black/40"></div>
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
				<span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
					Gaming Arsenal
				</span>
			</h1>
			<p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
				Discover the latest gaming consoles, high-performance PC components, 
				and professional gaming peripherals. Level up your setup today.
			</p>
			<div class="flex justify-center space-x-4 text-gray-400">
				<span class="flex items-center">🎮 Premium Gaming Hardware</span>
				<span class="hidden md:flex items-center">⚡ Lightning Fast Delivery</span>
				<span class="hidden md:flex items-center">🔧 Expert Support</span>
			</div>
		</div>
	</section>

	<!-- Filters and Search -->
	<section class="bg-black/40 border-b border-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
				<!-- Search -->
				<div class="md:col-span-2">
					<div class="relative">
						<input
							type="text"
							placeholder="Search for gaming gear..."
							bind:value={searchQuery}
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
						/>
						<div class="absolute right-3 top-3 text-gray-400">
							🔍
						</div>
					</div>
				</div>

				<!-- Category Filter -->
				<div>
					<select
						bind:value={selectedCategory}
						class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
					>
						<option value="">All Categories</option>
						{#each categories as category}
							<option value={category.name}>{category.name}</option>
						{/each}
					</select>
				</div>

				<!-- Sort -->
				<div>
					<select
						bind:value={sortBy}
						class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
					>
						<option value="name-asc">Name A-Z</option>
						<option value="name-desc">Name Z-A</option>
						<option value="price-asc">Price Low-High</option>
						<option value="price-desc">Price High-Low</option>
					</select>
				</div>
			</div>

			<!-- Active Filters -->
			{#if searchQuery || selectedCategory}
				<div class="mt-4 flex flex-wrap gap-2">
					{#if searchQuery}
						<span class="inline-flex items-center px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
							Search: "{searchQuery}"
							<button on:click={() => searchQuery = ''} class="ml-2 text-cyan-300 hover:text-white">×</button>
						</span>
					{/if}
					{#if selectedCategory}
						<span class="inline-flex items-center px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
							Category: {selectedCategory}
							<button on:click={() => selectedCategory = ''} class="ml-2 text-purple-300 hover:text-white">×</button>
						</span>
					{/if}
				</div>
			{/if}
		</div>
	</section>

	<!-- Products Grid -->
	<section class="py-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<!-- Results Count -->
			<div class="mb-8">
				<p class="text-gray-400">
					Showing {filteredProducts.length} of {products.length} products
				</p>
			</div>

			{#if filteredProducts.length === 0}
				<!-- Empty State -->
				<div class="text-center py-16">
					<div class="text-6xl mb-6">🎮</div>
					<h3 class="text-2xl font-bold text-white mb-4">No products found</h3>
					<p class="text-gray-400 mb-8">
						Try adjusting your search terms or filters to find what you're looking for.
					</p>
					<button
						on:click={() => { searchQuery = ''; selectedCategory = ''; }}
						class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all"
					>
						Clear Filters
					</button>
				</div>
			{:else}
				<!-- Products Grid -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
					{#each filteredProducts as product}
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
										<p class="text-sm">Product Image</p>
									</div>
								</div>
								
								<!-- Sale Badge -->
								{#if product.compareAtPrice}
									<div class="absolute top-3 left-3">
										<span class="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-lg text-xs font-bold">
											-{Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}%
										</span>
									</div>
								{/if}

								<!-- Stock Status -->
								<div class="absolute top-3 right-3">
									<div class="flex items-center space-x-1">
										<div class="w-2 h-2 {getStockStatus(product).indicator} rounded-full"></div>
									</div>
								</div>
							</a>

							<!-- Product Info -->
							<div class="p-6">
								<!-- Category -->
								<div class="mb-2">
									<span class="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full border border-cyan-500/20">
										{product.category}
									</span>
								</div>

								<!-- Title -->
								<a href="/product/{product.slug}" class="block">
									<h3 class="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
										{product.title}
									</h3>
								</a>

								<!-- Price -->
								<div class="mb-4">
									<div class="flex items-center space-x-2">
										<span class="text-xl font-bold text-cyan-400">{formatPrice(product.price)}</span>
										{#if product.compareAtPrice}
											<span class="text-sm text-gray-500 line-through">{formatPrice(product.compareAtPrice)}</span>
										{/if}
									</div>
								</div>

								<!-- Stock Status -->
								<div class="mb-4">
									<p class="text-sm {getStockStatus(product).class}">
										{getStockStatus(product).text}
									</p>
								</div>

								<!-- Tags -->
								<div class="mb-4">
									<div class="flex flex-wrap gap-1">
										{#each product.tags.slice(0, 3) as tag}
											<span class="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700">
												#{tag}
											</span>
										{/each}
									</div>
								</div>

								<!-- Actions -->
								<div class="space-y-2">
									<button
										on:click={() => addToCart(product)}
										disabled={product.inventory.stock === 0}
										class="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
									>
										{product.inventory.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
									</button>
									
									<a
										href="/product/{product.slug}"
										class="block w-full text-center border border-cyan-500 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-500/10 transition-all"
									>
										View Details
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/if}
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
						<a href="/shop" class="block text-cyan-400 font-medium">Shop</a>
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
					© 2024 GameTech Store. All rights reserved. | Made with ❤️ for gamers in Indonesia
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