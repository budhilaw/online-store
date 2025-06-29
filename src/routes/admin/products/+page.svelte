<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/auth';
	import { products } from '$lib/data/products';
	import { formatPrice } from '$lib/utils';

	// Check authentication
	onMount(() => {
		if (!$authStore.isAuthenticated) {
			goto('/admin/login');
		}
	});

	let searchQuery = '';
	let selectedCategory = '';
	let filteredProducts = [...products];

	// Filter products
	$: {
		filteredProducts = products.filter(product => {
			const matchesSearch = searchQuery === '' || 
				product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.sku.toLowerCase().includes(searchQuery.toLowerCase());
			
			const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
			
			return matchesSearch && matchesCategory;
		});
	}

	function getStockStatus(product: any) {
		if (product.inventory.stock === 0) {
			return { text: 'Out of Stock', class: 'text-red-400' };
		} else if (product.inventory.stock <= product.inventory.lowStockThreshold) {
			return { text: 'Low Stock', class: 'text-yellow-400' };
		} else {
			return { text: 'In Stock', class: 'text-green-400' };
		}
	}

	function logout() {
		authStore.logout();
		goto('/admin/login');
	}
</script>

<svelte:head>
	<title>Product Management - Admin Dashboard</title>
</svelte:head>

<div class="min-h-screen bg-gray-900">
	<!-- Header -->
	<header class="bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center space-x-4">
					<a href="/admin" class="text-gray-400 hover:text-cyan-400 transition-colors">
						← Dashboard
					</a>
					<h1 class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						Product Management
					</h1>
				</div>
				<div class="flex items-center space-x-4">
					<a href="/" class="text-gray-400 hover:text-cyan-400 transition-colors">
						← Back to Store
					</a>
					<button 
						on:click={logout}
						class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	</header>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<!-- Page Header -->
		<div class="flex justify-between items-center mb-8">
			<div>
				<h2 class="text-3xl font-bold text-white">Products</h2>
				<p class="text-gray-400">Manage your gaming product catalog</p>
			</div>
			<button class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all">
				Add New Product
			</button>
		</div>

		<!-- Filters -->
		<div class="bg-black/40 rounded-2xl p-6 border border-gray-800 mb-8">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div class="md:col-span-2">
					<label class="block text-sm font-medium text-gray-300 mb-2">Search Products</label>
					<input
						type="text"
						placeholder="Search by name or SKU..."
						bind:value={searchQuery}
						class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-300 mb-2">Category</label>
					<select
						bind:value={selectedCategory}
						class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
					>
						<option value="">All Categories</option>
						<option value="Gaming Consoles">Gaming Consoles</option>
						<option value="PC Components">PC Components</option>
						<option value="Gaming Peripherals">Gaming Peripherals</option>
						<option value="Games & Software">Games & Software</option>
					</select>
				</div>
			</div>
		</div>

		<!-- Products Table -->
		<div class="bg-black/40 rounded-2xl border border-gray-800 overflow-hidden">
			<div class="px-6 py-4 border-b border-gray-800">
				<h3 class="text-lg font-medium text-white">
					Products ({filteredProducts.length})
				</h3>
			</div>
			
			<div class="overflow-x-auto">
				<table class="w-full">
					<thead class="bg-gray-800/50">
						<tr>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Product</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stock</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-800">
						{#each filteredProducts as product}
							<tr class="hover:bg-gray-800/30 transition-colors">
								<td class="px-6 py-4">
									<div class="flex items-center">
										<div class="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
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
											<span class="text-2xl hidden">🎮</span>
										</div>
										<div>
											<p class="text-white font-medium">{product.title}</p>
											<p class="text-gray-400 text-sm">SKU: {product.sku}</p>
										</div>
									</div>
								</td>
								<td class="px-6 py-4">
									<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
										{product.category}
									</span>
								</td>
								<td class="px-6 py-4">
									<p class="text-white font-medium">{formatPrice(product.price)}</p>
									{#if product.compareAtPrice}
										<p class="text-gray-400 text-sm line-through">{formatPrice(product.compareAtPrice)}</p>
									{/if}
								</td>
								<td class="px-6 py-4">
									<p class="text-white">{product.inventory.stock}</p>
									<p class="text-sm {getStockStatus(product).class}">
										{getStockStatus(product).text}
									</p>
								</td>
								<td class="px-6 py-4">
									<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
										{product.isActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}">
										{product.isActive ? 'Active' : 'Inactive'}
									</span>
								</td>
								<td class="px-6 py-4">
									<div class="flex space-x-2">
										<button class="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Edit</button>
										<button class="text-red-400 hover:text-red-300 text-sm font-medium">Delete</button>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div> 