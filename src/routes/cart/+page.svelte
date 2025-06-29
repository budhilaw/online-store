<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { cartStore } from '$lib/stores/cart';
	import { formatPrice } from '$lib/utils';
	import { products } from '$lib/data/products';

	let cart = $cartStore;

	function getProductById(id: string) {
		return products.find(p => p.id === id);
	}

	function updateQuantity(productId: string, quantity: number) {
		cartStore.updateQuantity(productId, quantity);
	}

	function removeItem(productId: string) {
		cartStore.removeItem(productId);
	}

	function proceedToCheckout() {
		goto('/checkout');
	}

	onMount(() => {
		cartStore.init();
	});

	$: cart = $cartStore;
</script>

<svelte:head>
	<title>Shopping Cart - GameTech Store</title>
	<meta name="description" content="Review your gaming gear selection and proceed to checkout." />
</svelte:head>

<div class="min-h-screen bg-gray-900">
	<!-- Header -->
	<header class="bg-black/80 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<a href="/" class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						GameTech Store
					</a>
				</div>
				<nav class="hidden md:flex space-x-8">
					<a href="/" class="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
					<a href="/shop" class="text-gray-300 hover:text-cyan-400 transition-colors">Shop</a>
					<a href="/about" class="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
					<a href="/contact" class="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
				</nav>
				<div class="flex items-center space-x-2 sm:space-x-4">
					<a href="/admin/login" class="hidden sm:block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Admin</a>
					<a href="/cart" class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
						<span class="hidden sm:inline">Cart </span>({$cartStore.items.length})
					</a>
				</div>
			</div>
		</div>
	</header>

	<!-- Hero Section -->
	<section class="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 py-16">
		<div class="absolute inset-0 bg-black/40"></div>
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
				<span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
					Shopping Cart
				</span>
			</h1>
			<p class="text-lg text-gray-300">
				Review your gaming gear and proceed to checkout
			</p>
		</div>
	</section>

	<!-- Cart Content -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
		{#if cart.items.length === 0}
			<!-- Empty Cart -->
			<div class="text-center py-16">
				<div class="text-8xl mb-8">🛒</div>
				<h2 class="text-3xl font-bold text-white mb-4">Your Cart is Empty</h2>
				<p class="text-gray-400 mb-8">
					Looks like you haven't added any gaming gear to your cart yet.
				</p>
				<a href="/shop" class="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all">
					Start Shopping
				</a>
			</div>
		{:else}
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
				<!-- Cart Items -->
				<div class="lg:col-span-2">
					<h2 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Cart Items ({cart.items.length})</h2>
					<div class="space-y-4 sm:space-y-6">
						{#each cart.items as item}
							{@const product = getProductById(item.productId)}
							<div class="bg-black/40 rounded-2xl p-4 sm:p-6 border border-gray-800">
								<!-- Mobile Layout (< sm) -->
								<div class="block sm:hidden">
									<div class="flex items-start space-x-4 mb-4">
										<!-- Product Image -->
										<div class="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700 flex-shrink-0 overflow-hidden">
											<img 
												src={item.image} 
												alt={item.title}
												class="w-full h-full object-cover"
												on:error={(e) => {
													e.target.style.display = 'none';
													e.target.nextElementSibling.style.display = 'flex';
												}}
											/>
											<!-- Fallback for failed image -->
											<div class="text-lg hidden">🎮</div>
										</div>
										
										<!-- Product Details -->
										<div class="flex-1 min-w-0">
											<h3 class="text-base font-semibold text-white mb-1 truncate">{item.title}</h3>
											<p class="text-xs text-gray-400 mb-1">SKU: {item.sku}</p>
											{#if product}
												<p class="text-xs text-cyan-400">{product.category}</p>
											{/if}
										</div>
										
										<!-- Remove Button -->
										<button
											on:click={() => removeItem(item.productId)}
											class="text-red-400 hover:text-red-300 transition-colors p-1 flex-shrink-0"
											title="Remove item"
										>
											🗑️
										</button>
									</div>
									
									<!-- Price and Controls Row -->
									<div class="flex items-center justify-between">
										<!-- Price -->
										<div>
											<p class="text-lg font-bold text-cyan-400">{formatPrice(item.price * item.quantity)}</p>
											<p class="text-xs text-gray-400">{formatPrice(item.price)} each</p>
										</div>
										
										<!-- Quantity Controls -->
										<div class="flex items-center space-x-2">
											<button
												on:click={() => updateQuantity(item.productId, item.quantity - 1)}
												class="w-8 h-8 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center"
											>
												−
											</button>
											<span class="w-8 text-center text-white font-medium text-sm">{item.quantity}</span>
											<button
												on:click={() => updateQuantity(item.productId, item.quantity + 1)}
												class="w-8 h-8 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center"
											>
												+
											</button>
										</div>
									</div>
								</div>

								<!-- Desktop Layout (>= sm) -->
								<div class="hidden sm:flex items-center space-x-6">
									<!-- Product Image -->
									<div class="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700 flex-shrink-0 overflow-hidden">
										<img 
											src={item.image} 
											alt={item.title}
											class="w-full h-full object-cover"
											on:error={(e) => {
												e.target.style.display = 'none';
												e.target.nextElementSibling.style.display = 'flex';
											}}
										/>
										<!-- Fallback for failed image -->
										<div class="text-xl lg:text-2xl hidden">🎮</div>
									</div>

									<!-- Product Details -->
									<div class="flex-1 min-w-0">
										<h3 class="text-lg font-semibold text-white mb-1">{item.title}</h3>
										<p class="text-sm text-gray-400 mb-2">SKU: {item.sku}</p>
										{#if product}
											<p class="text-xs text-cyan-400">{product.category}</p>
										{/if}
									</div>

									<!-- Quantity Controls -->
									<div class="flex items-center space-x-3 flex-shrink-0">
										<button
											on:click={() => updateQuantity(item.productId, item.quantity - 1)}
											class="w-8 h-8 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center"
										>
											−
										</button>
										<span class="w-12 text-center text-white font-medium">{item.quantity}</span>
										<button
											on:click={() => updateQuantity(item.productId, item.quantity + 1)}
											class="w-8 h-8 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center"
										>
											+
										</button>
									</div>

									<!-- Price -->
									<div class="text-right flex-shrink-0">
										<p class="text-lg font-bold text-cyan-400">{formatPrice(item.price * item.quantity)}</p>
										<p class="text-sm text-gray-400">{formatPrice(item.price)} each</p>
									</div>

									<!-- Remove Button -->
									<button
										on:click={() => removeItem(item.productId)}
										class="text-red-400 hover:text-red-300 transition-colors p-2 flex-shrink-0"
										title="Remove item"
									>
										🗑️
									</button>
								</div>
							</div>
						{/each}
					</div>

					<!-- Continue Shopping -->
					<div class="mt-8">
						<a href="/shop" class="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
							← Continue Shopping
						</a>
					</div>
				</div>

				<!-- Order Summary -->
				<div class="lg:col-span-1">
					<div class="bg-black/40 rounded-2xl p-4 sm:p-6 border border-gray-800 lg:sticky lg:top-24">
						<h3 class="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Order Summary</h3>
						
						<div class="space-y-4">
							<!-- Subtotal -->
							<div class="flex justify-between text-gray-300">
								<span class="text-sm sm:text-base">Subtotal ({cart.items.reduce((total, item) => total + item.quantity, 0)} items)</span>
								<span class="text-sm sm:text-base font-medium">{formatPrice(cart.subtotal)}</span>
							</div>

							<!-- Tax -->
							<div class="flex justify-between text-gray-300">
								<span class="text-sm sm:text-base">PPN (11%)</span>
								<span class="text-sm sm:text-base font-medium">{formatPrice(cart.tax)}</span>
							</div>

							<!-- Shipping -->
							<div class="flex justify-between text-gray-300">
								<span class="text-sm sm:text-base">Shipping</span>
								<span class="text-sm sm:text-base font-medium">
									{#if cart.shipping === 0}
										<span class="text-green-400">Free</span>
									{:else}
										{formatPrice(cart.shipping)}
									{/if}
								</span>
							</div>

							{#if cart.subtotal < 1000000 && cart.subtotal > 0}
								<div class="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
									<p class="text-yellow-400 text-xs sm:text-sm">
										Add {formatPrice(1000000 - cart.subtotal)} more for free shipping!
									</p>
								</div>
							{/if}

							<hr class="border-gray-700" />

							<!-- Total -->
							<div class="flex justify-between text-lg sm:text-xl font-bold">
								<span class="text-white">Total</span>
								<span class="text-cyan-400">{formatPrice(cart.total)}</span>
							</div>
						</div>

						<!-- Checkout Button -->
						<button
							on:click={proceedToCheckout}
							class="w-full mt-4 sm:mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all text-sm sm:text-base"
						>
							Proceed to Checkout
						</button>

						<!-- Security Badge -->
						<div class="mt-3 sm:mt-4 text-center">
							<div class="inline-flex items-center space-x-2 text-gray-400 text-xs sm:text-sm">
								<span>🔒</span>
								<span>Secure checkout guaranteed</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>

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