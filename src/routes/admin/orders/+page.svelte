<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/auth';
	import { orders } from '$lib/data/orders';
	import { formatPrice } from '$lib/utils';

	// Check authentication
	onMount(() => {
		if (!$authStore.isAuthenticated) {
			goto('/admin/login');
		}
	});

	let searchQuery = '';
	let selectedStatus = '';
	let filteredOrders = [...orders];

	// Filter orders
	$: {
		filteredOrders = orders.filter(order => {
			const matchesSearch = searchQuery === '' || 
				order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
				`${order.customer.firstName} ${order.customer.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
				order.customer.email.toLowerCase().includes(searchQuery.toLowerCase());
			
			const matchesStatus = selectedStatus === '' || order.status === selectedStatus;
			
			return matchesSearch && matchesStatus;
		});
	}

	function getStatusColor(status: string) {
		switch (status) {
			case 'completed':
				return 'bg-green-500/20 text-green-400';
			case 'processing':
				return 'bg-yellow-500/20 text-yellow-400';
			case 'pending':
				return 'bg-blue-500/20 text-blue-400';
			case 'cancelled':
				return 'bg-red-500/20 text-red-400';
			default:
				return 'bg-gray-500/20 text-gray-400';
		}
	}

	function logout() {
		authStore.logout();
		goto('/admin/login');
	}
</script>

<svelte:head>
	<title>Order Management - Admin Dashboard</title>
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
						Order Management
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
		<div class="mb-8">
			<h2 class="text-3xl font-bold text-white mb-2">Orders</h2>
			<p class="text-gray-400">Manage and track customer orders</p>
		</div>

		<!-- Filters -->
		<div class="bg-black/40 rounded-2xl p-6 border border-gray-800 mb-8">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div class="md:col-span-2">
					<label class="block text-sm font-medium text-gray-300 mb-2">Search Orders</label>
					<input
						type="text"
						placeholder="Search by order number, customer name, or email..."
						bind:value={searchQuery}
						class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-300 mb-2">Status</label>
					<select
						bind:value={selectedStatus}
						class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
					>
						<option value="">All Statuses</option>
						<option value="pending">Pending</option>
						<option value="processing">Processing</option>
						<option value="completed">Completed</option>
						<option value="cancelled">Cancelled</option>
					</select>
				</div>
			</div>
		</div>

		<!-- Orders Table -->
		<div class="bg-black/40 rounded-2xl border border-gray-800 overflow-hidden">
			<div class="px-6 py-4 border-b border-gray-800">
				<h3 class="text-lg font-medium text-white">
					Orders ({filteredOrders.length})
				</h3>
			</div>
			
			{#if filteredOrders.length === 0}
				<div class="p-8 text-center">
					<div class="text-6xl mb-4">📋</div>
					<h3 class="text-xl font-bold text-white mb-2">No orders found</h3>
					<p class="text-gray-400">No orders match your current filters.</p>
				</div>
			{:else}
				<div class="overflow-x-auto">
					<table class="w-full">
						<thead class="bg-gray-800/50">
							<tr>
								<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Order</th>
								<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
								<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
								<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Total</th>
								<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
								<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-800">
							{#each filteredOrders as order}
								<tr class="hover:bg-gray-800/30 transition-colors">
									<td class="px-6 py-4">
										<div>
											<p class="text-white font-medium">#{order.orderNumber}</p>
											<p class="text-gray-400 text-sm">{order.items.length} items</p>
										</div>
									</td>
									<td class="px-6 py-4">
										<div>
											<p class="text-white font-medium">{order.customer.firstName} {order.customer.lastName}</p>
											<p class="text-gray-400 text-sm">{order.customer.email}</p>
											<p class="text-gray-500 text-xs">{order.customer.phone}</p>
										</div>
									</td>
									<td class="px-6 py-4">
										<p class="text-white">{new Date(order.createdAt).toLocaleDateString('id-ID')}</p>
										<p class="text-gray-400 text-sm">{new Date(order.createdAt).toLocaleTimeString('id-ID')}</p>
									</td>
									<td class="px-6 py-4">
										<p class="text-white font-medium">{formatPrice(order.total)}</p>
										<p class="text-gray-400 text-sm">Inc. Tax</p>
									</td>
									<td class="px-6 py-4">
										<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium {getStatusColor(order.status)}">
											{order.status.charAt(0).toUpperCase() + order.status.slice(1)}
										</span>
									</td>
									<td class="px-6 py-4">
										<div class="flex space-x-2">
											<button class="text-cyan-400 hover:text-cyan-300 text-sm font-medium">View</button>
											<button class="text-purple-400 hover:text-purple-300 text-sm font-medium">Edit</button>
											<button class="text-green-400 hover:text-green-300 text-sm font-medium">Print</button>
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}
		</div>
	</div>
</div> 