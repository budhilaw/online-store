<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/auth';

	// Check authentication
	onMount(() => {
		if (!$authStore.isAuthenticated) {
			goto('/admin/login');
		}
	});

	// Settings state
	let settings = {
		storeName: 'GameTech Store',
		storeEmail: 'info@gametech.com',
		storePhone: '+62 21 1234 5678',
		currency: 'IDR',
		taxRate: 11,
		freeShippingThreshold: 1000000,
		shippingCost: 50000,
		allowGuestCheckout: true,
		requirePhoneForOrders: true,
		emailNotifications: true,
		smsNotifications: false
	};

	function saveSettings() {
		// In a real app, this would save to a database
		alert('Settings saved successfully!');
	}

	function logout() {
		authStore.logout();
		goto('/admin/login');
	}
</script>

<svelte:head>
	<title>Settings - Admin Dashboard</title>
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
						Settings
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

	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<!-- Page Header -->
		<div class="mb-8">
			<h2 class="text-3xl font-bold text-white mb-2">Settings</h2>
			<p class="text-gray-400">Configure your store settings and preferences</p>
		</div>

		<form on:submit|preventDefault={saveSettings} class="space-y-8">
			<!-- Store Information -->
			<div class="bg-black/40 rounded-2xl p-6 border border-gray-800">
				<h3 class="text-xl font-bold text-white mb-6">Store Information</h3>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label class="block text-sm font-medium text-gray-300 mb-2">Store Name</label>
						<input
							type="text"
							bind:value={settings.storeName}
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-300 mb-2">Store Email</label>
						<input
							type="email"
							bind:value={settings.storeEmail}
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-300 mb-2">Store Phone</label>
						<input
							type="tel"
							bind:value={settings.storePhone}
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-300 mb-2">Currency</label>
						<select
							bind:value={settings.currency}
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
						>
							<option value="IDR">Indonesian Rupiah (IDR)</option>
							<option value="USD">US Dollar (USD)</option>
							<option value="EUR">Euro (EUR)</option>
						</select>
					</div>
				</div>
			</div>

			<!-- Pricing & Shipping -->
			<div class="bg-black/40 rounded-2xl p-6 border border-gray-800">
				<h3 class="text-xl font-bold text-white mb-6">Pricing & Shipping</h3>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label class="block text-sm font-medium text-gray-300 mb-2">Tax Rate (%)</label>
						<input
							type="number"
							min="0"
							max="100"
							step="0.1"
							bind:value={settings.taxRate}
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
						/>
						<p class="text-gray-500 text-sm mt-1">PPN rate for Indonesia</p>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-300 mb-2">Free Shipping Threshold (IDR)</label>
						<input
							type="number"
							min="0"
							bind:value={settings.freeShippingThreshold}
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
						/>
						<p class="text-gray-500 text-sm mt-1">Orders above this amount get free shipping</p>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-300 mb-2">Standard Shipping Cost (IDR)</label>
						<input
							type="number"
							min="0"
							bind:value={settings.shippingCost}
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
						/>
					</div>
				</div>
			</div>

			<!-- Checkout Options -->
			<div class="bg-black/40 rounded-2xl p-6 border border-gray-800">
				<h3 class="text-xl font-bold text-white mb-6">Checkout Options</h3>
				<div class="space-y-4">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-white font-medium">Allow Guest Checkout</p>
							<p class="text-gray-400 text-sm">Allow customers to checkout without creating an account</p>
						</div>
						<label class="relative inline-flex items-center cursor-pointer">
							<input type="checkbox" bind:checked={settings.allowGuestCheckout} class="sr-only peer" />
							<div class="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
						</label>
					</div>

					<div class="flex items-center justify-between">
						<div>
							<p class="text-white font-medium">Require Phone for Orders</p>
							<p class="text-gray-400 text-sm">Make phone number required during checkout</p>
						</div>
						<label class="relative inline-flex items-center cursor-pointer">
							<input type="checkbox" bind:checked={settings.requirePhoneForOrders} class="sr-only peer" />
							<div class="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
						</label>
					</div>
				</div>
			</div>

			<!-- Notification Settings -->
			<div class="bg-black/40 rounded-2xl p-6 border border-gray-800">
				<h3 class="text-xl font-bold text-white mb-6">Notifications</h3>
				<div class="space-y-4">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-white font-medium">Email Notifications</p>
							<p class="text-gray-400 text-sm">Send order confirmations and updates via email</p>
						</div>
						<label class="relative inline-flex items-center cursor-pointer">
							<input type="checkbox" bind:checked={settings.emailNotifications} class="sr-only peer" />
							<div class="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
						</label>
					</div>

					<div class="flex items-center justify-between">
						<div>
							<p class="text-white font-medium">SMS Notifications</p>
							<p class="text-gray-400 text-sm">Send order updates via SMS (requires SMS service)</p>
						</div>
						<label class="relative inline-flex items-center cursor-pointer">
							<input type="checkbox" bind:checked={settings.smsNotifications} class="sr-only peer" />
							<div class="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
						</label>
					</div>
				</div>
			</div>

			<!-- Save Button -->
			<div class="flex justify-end">
				<button
					type="submit"
					class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all"
				>
					Save Settings
				</button>
			</div>
		</form>
	</div>
</div> 