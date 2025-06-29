<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/auth';
	import { products } from '$lib/data/products';
	import { orders } from '$lib/data/orders';
	import { formatPrice } from '$lib/utils';

	// Check authentication
	onMount(() => {
		if (!$authStore.isAuthenticated) {
			goto('/admin/login');
		}
	});

	// Dashboard statistics
	$: totalProducts = products.length;
	$: activeProducts = products.filter(p => p.isActive).length;
	$: totalOrders = orders.length;
	$: totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
	$: recentOrders = orders.slice(0, 5);

	function logout() {
		authStore.logout();
		goto('/admin/login');
	}
</script>

<svelte:head>
	<title>Admin Dashboard - GameTech Store</title>
</svelte:head>

<div class="min-h-screen bg-gray-900">
	<!-- Header -->
	<header class="bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<h1 class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						Admin Dashboard
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
		<!-- Welcome Section -->
		<div class="mb-8">
			<h2 class="text-3xl font-bold text-white mb-2">Welcome, Admin!</h2>
			<p class="text-gray-400">Here's what's happening with your gaming store today.</p>
		</div>

		<!-- Statistics Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
			<!-- Total Products -->
			<div class="bg-black/40 rounded-2xl p-6 border border-gray-800">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-gray-400 text-sm">Total Products</p>
						<p class="text-2xl font-bold text-cyan-400">{totalProducts}</p>
						<p class="text-green-400 text-xs mt-1">{activeProducts} active</p>
					</div>
					<div class="text-3xl">📦</div>
				</div>
			</div>

			<!-- Total Orders -->
			<div class="bg-black/40 rounded-2xl p-6 border border-gray-800">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-gray-400 text-sm">Total Orders</p>
						<p class="text-2xl font-bold text-purple-400">{totalOrders}</p>
						<p class="text-green-400 text-xs mt-1">All time</p>
					</div>
					<div class="text-3xl">🛒</div>
				</div>
			</div>

			<!-- Total Revenue -->
			<div class="bg-black/40 rounded-2xl p-6 border border-gray-800">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-gray-400 text-sm">Total Revenue</p>
						<p class="text-2xl font-bold text-green-400">{formatPrice(totalRevenue)}</p>
						<p class="text-green-400 text-xs mt-1">All time</p>
					</div>
					<div class="text-3xl">💰</div>
				</div>
			</div>

			<!-- Active Users -->
			<div class="bg-black/40 rounded-2xl p-6 border border-gray-800">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-gray-400 text-sm">Admin User</p>
						<p class="text-2xl font-bold text-pink-400">1</p>
						<p class="text-green-400 text-xs mt-1">Online</p>
					</div>
					<div class="text-3xl">👤</div>
				</div>
			</div>
		</div>

		<!-- Quick Actions -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
			<!-- Management Links -->
			<div class="bg-black/40 rounded-2xl p-6 border border-gray-800">
				<h3 class="text-xl font-bold text-white mb-4">Quick Actions</h3>
				<div class="space-y-3">
					<a href="/admin/products" class="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
						<div class="flex items-center space-x-3">
							<span class="text-2xl">📦</span>
							<div>
								<p class="text-white font-medium">Manage Products</p>
								<p class="text-gray-400 text-sm">Add, edit, or remove products</p>
							</div>
						</div>
						<span class="text-cyan-400">→</span>
					</a>

					<a href="/admin/orders" class="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
						<div class="flex items-center space-x-3">
							<span class="text-2xl">📋</span>
							<div>
								<p class="text-white font-medium">View Orders</p>
								<p class="text-gray-400 text-sm">Process and track orders</p>
							</div>
						</div>
						<span class="text-cyan-400">→</span>
					</a>

					<a href="/admin/users" class="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
						<div class="flex items-center space-x-3">
							<span class="text-2xl">👥</span>
							<div>
								<p class="text-white font-medium">User Management</p>
								<p class="text-gray-400 text-sm">Manage user accounts</p>
							</div>
						</div>
						<span class="text-cyan-400">→</span>
					</a>

					<a href="/admin/settings" class="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
						<div class="flex items-center space-x-3">
							<span class="text-2xl">⚙️</span>
							<div>
								<p class="text-white font-medium">Settings</p>
								<p class="text-gray-400 text-sm">Configure store settings</p>
							</div>
						</div>
						<span class="text-cyan-400">→</span>
					</a>
				</div>
			</div>

			<!-- Recent Orders -->
			<div class="bg-black/40 rounded-2xl p-6 border border-gray-800">
				<h3 class="text-xl font-bold text-white mb-4">Recent Orders</h3>
				{#if recentOrders.length === 0}
					<p class="text-gray-400">No orders yet</p>
				{:else}
					<div class="space-y-3">
						{#each recentOrders as order}
							<div class="p-3 bg-gray-800/50 rounded-lg">
								<div class="flex justify-between items-start">
									<div>
										<p class="text-white font-medium">Order #{order.orderNumber}</p>
										<p class="text-gray-400 text-sm">{order.customer.firstName} {order.customer.lastName}</p>
										<p class="text-xs text-gray-500">{new Date(order.createdAt).toLocaleDateString('id-ID')}</p>
									</div>
									<div class="text-right">
										<p class="text-cyan-400 font-medium">{formatPrice(order.total)}</p>
										<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
											{order.status === 'completed' ? 'bg-green-500/20 text-green-400' : 
											  order.status === 'processing' ? 'bg-yellow-500/20 text-yellow-400' : 
											  'bg-gray-500/20 text-gray-400'}">
											{order.status}
										</span>
									</div>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>

		<!-- System Info -->
		<div class="bg-black/40 rounded-2xl p-6 border border-gray-800">
			<h3 class="text-xl font-bold text-white mb-4">System Information</h3>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
				<div>
					<p class="text-gray-400">Store Version</p>
					<p class="text-white font-medium">v1.0.0</p>
				</div>
				<div>
					<p class="text-gray-400">Last Updated</p>
					<p class="text-white font-medium">{new Date().toLocaleDateString('id-ID')}</p>
				</div>
				<div>
					<p class="text-gray-400">Status</p>
					<p class="text-green-400 font-medium">Online</p>
				</div>
			</div>
		</div>
	</div>
</div> 