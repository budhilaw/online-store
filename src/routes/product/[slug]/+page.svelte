<script lang="ts">
	import { page } from '$app/stores';
	import { products } from '$lib/data/products';
	import { formatPrice } from '$lib/utils';
	import { cartStore } from '$lib/stores/cart';
	import { toastStore } from '$lib/stores/toast';
	import { onMount } from 'svelte';

	$: slug = $page.params.slug;
	$: product = products.find(p => p.slug === slug);

	let selectedImageIndex = 0;
	let quantity = 1;

	function addToCart() {
		if (!product) return;
		
		const currentQuantity = quantity;
		
		for (let i = 0; i < quantity; i++) {
			cartStore.addItem({
				productId: product.id,
				sku: product.sku,
				title: product.title,
				price: product.price,
				image: product.images.featured
			});
		}
		
		// Show success notification
		toastStore.add({
			type: 'success',
			title: 'Added to Cart! 🎮',
			message: `${currentQuantity}x ${product.title} added to your cart`,
			duration: 3000
		});
		
		// Reset quantity after adding to cart
		quantity = 1;
	}

	onMount(() => {
		cartStore.init();
	});
</script>

<svelte:head>
	{#if product}
		<title>{product.seo.metaTitle}</title>
		<meta name="description" content={product.seo.metaDescription} />
	{:else}
		<title>Product Not Found - GameTech Store</title>
	{/if}
</svelte:head>

<div class="min-h-screen bg-gray-900">
	<!-- Header -->
	<header class="bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
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

	{#if !product}
		<!-- Product Not Found -->
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
			<div class="text-6xl mb-8">🎮</div>
			<h1 class="text-3xl font-bold text-white mb-4">Product Not Found</h1>
			<p class="text-gray-400 mb-8">The product you're looking for doesn't exist or has been removed.</p>
			<a href="/shop" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all">
				← Back to Shop
			</a>
		</div>
	{:else}
		<!-- Breadcrumb -->
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
			<nav class="flex text-sm">
				<a href="/" class="text-gray-400 hover:text-cyan-400">Home</a>
				<span class="mx-2 text-gray-600">/</span>
				<a href="/shop" class="text-gray-400 hover:text-cyan-400">Shop</a>
				<span class="mx-2 text-gray-600">/</span>
				<span class="text-cyan-400">{product.title}</span>
			</nav>
		</div>

		<!-- Product Details -->
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<!-- Product Images -->
				<div class="space-y-4">
					<!-- Main Image -->
					<div class="relative bg-black/40 rounded-2xl overflow-hidden border border-cyan-500/20">
						<div class="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
							<!-- Display selected thumbnail or featured image -->
							{#if selectedImageIndex >= 0 && product.images.thumbnails[selectedImageIndex]}
								<img 
									src={product.images.thumbnails[selectedImageIndex]} 
									alt={product.title}
									class="w-full h-full object-cover"
									on:error={(e) => {
										e.target.style.display = 'none';
										e.target.nextElementSibling.style.display = 'flex';
									}}
								/>
								<!-- Fallback for failed image -->
								<div class="text-center text-gray-400 hidden">
									<div class="text-4xl mb-2">🎮</div>
									<p class="text-sm">Product Image</p>
								</div>
							{:else}
								<img 
									src={product.images.featured} 
									alt={product.title}
									class="w-full h-full object-cover"
									on:error={(e) => {
										e.target.style.display = 'none';
										e.target.nextElementSibling.style.display = 'flex';
									}}
								/>
								<!-- Fallback for failed image -->
								<div class="text-center text-gray-400 hidden">
									<div class="text-4xl mb-2">🎮</div>
									<p class="text-sm">Product Image</p>
								</div>
							{/if}
						</div>
						{#if product.compareAtPrice}
							<div class="absolute top-4 left-4">
								<span class="bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
									Save {formatPrice(product.compareAtPrice - product.price)}
								</span>
							</div>
						{/if}
					</div>

					<!-- Thumbnail Images -->
					<div class="grid grid-cols-4 gap-2">
						{#each product.images.thumbnails as thumbnail, index}
							<button
								class="aspect-square bg-black/40 rounded-lg border border-cyan-500/20 hover:border-cyan-400 transition-colors overflow-hidden {selectedImageIndex === index ? 'border-cyan-400' : ''}"
								on:click={() => selectedImageIndex = index}
							>
								<img 
									src={thumbnail} 
									alt="{product.title} - View {index + 1}"
									class="w-full h-full object-cover"
									on:error={(e) => {
										e.target.style.display = 'none';
										e.target.nextElementSibling.style.display = 'flex';
									}}
								/>
								<!-- Fallback for failed thumbnail -->
								<div class="w-full h-full flex items-center justify-center text-gray-500 text-xs hidden">
									Thumb {index + 1}
								</div>
							</button>
						{/each}
					</div>
				</div>

				<!-- Product Info -->
				<div class="space-y-6">
					<!-- Category -->
					<div>
						<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
							{product.category}
						</span>
					</div>

					<!-- Title -->
					<h1 class="text-4xl font-bold text-white">{product.title}</h1>

					<!-- Price -->
					<div class="flex items-center space-x-4">
						<span class="text-3xl font-bold text-cyan-400">{formatPrice(product.price)}</span>
						{#if product.compareAtPrice}
							<span class="text-xl text-gray-500 line-through">{formatPrice(product.compareAtPrice)}</span>
							<span class="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
								{Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}% OFF
							</span>
						{/if}
					</div>

					<!-- Stock Status -->
					<div class="flex items-center space-x-2">
						{#if product.inventory.stock > product.inventory.lowStockThreshold}
							<div class="w-3 h-3 bg-green-500 rounded-full"></div>
							<span class="text-green-400 font-medium">In Stock ({product.inventory.stock} available)</span>
						{:else if product.inventory.stock > 0}
							<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
							<span class="text-yellow-400 font-medium">Low Stock ({product.inventory.stock} remaining)</span>
						{:else}
							<div class="w-3 h-3 bg-red-500 rounded-full"></div>
							<span class="text-red-400 font-medium">Out of Stock</span>
						{/if}
					</div>

					<!-- Description -->
					<div class="text-gray-300 leading-relaxed">
						<p>{product.description}</p>
					</div>

					<!-- Tags -->
					<div class="flex flex-wrap gap-2">
						{#each product.tags as tag}
							<span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
								#{tag}
							</span>
						{/each}
					</div>

					<!-- Quantity and Add to Cart -->
					<div class="space-y-4">
						<div class="flex items-center space-x-4">
							<label for="quantity" class="text-white font-medium">Quantity:</label>
							<div class="flex items-center border border-gray-700 rounded-lg">
								<button
									class="px-3 py-2 text-gray-300 hover:text-white transition-colors"
									on:click={() => quantity = Math.max(1, quantity - 1)}
								>
									−
								</button>
								<input
									id="quantity"
									type="number"
									bind:value={quantity}
									min="1"
									max={product.inventory.stock}
									class="w-16 px-2 py-2 bg-transparent text-white text-center border-x border-gray-700 focus:outline-none"
								/>
								<button
									class="px-3 py-2 text-gray-300 hover:text-white transition-colors"
									on:click={() => quantity = Math.min(product.inventory.stock, quantity + 1)}
								>
									+
								</button>
							</div>
						</div>

						<div class="space-y-3">
							<button
								on:click={addToCart}
								disabled={product.inventory.stock === 0}
								class="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{product.inventory.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
							</button>
							
							<button class="w-full border border-cyan-500 text-cyan-400 py-3 px-6 rounded-lg font-medium hover:bg-cyan-500/10 transition-all">
								Add to Wishlist
							</button>
						</div>
					</div>

					<!-- Product Details -->
					<div class="bg-black/40 rounded-xl p-6 border border-gray-800">
						<h3 class="text-xl font-semibold text-white mb-4">Product Details</h3>
						<div class="space-y-2 text-sm">
							<div class="flex justify-between">
								<span class="text-gray-400">SKU:</span>
								<span class="text-white">{product.sku}</span>
							</div>
							<div class="flex justify-between">
								<span class="text-gray-400">Category:</span>
								<span class="text-white">{product.category}</span>
							</div>
							<div class="flex justify-between">
								<span class="text-gray-400">Stock:</span>
								<span class="text-white">{product.inventory.stock} units</span>
							</div>
							<div class="flex justify-between">
								<span class="text-gray-400">Last Updated:</span>
								<span class="text-white">{new Date(product.updatedAt).toLocaleDateString()}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Related Products -->
			<div class="mt-16">
				<h2 class="text-2xl font-bold text-white mb-8">Related Products</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{#each products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4) as relatedProduct}
						<a href="/product/{relatedProduct.slug}" class="group">
							<div class="bg-black/40 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all">
								<div class="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
									<img 
										src={relatedProduct.images.featured} 
										alt={relatedProduct.title}
										class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
										on:error={(e) => {
											e.target.style.display = 'none';
											e.target.nextElementSibling.style.display = 'flex';
										}}
									/>
									<!-- Fallback for failed image -->
									<div class="text-center text-gray-400 hidden">
										<div class="text-2xl mb-1">🎮</div>
										<p class="text-xs">Product</p>
									</div>
								</div>
								<div class="p-4">
									<h3 class="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">
										{relatedProduct.title}
									</h3>
									<p class="text-cyan-400 font-bold">{formatPrice(relatedProduct.price)}</p>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div> 