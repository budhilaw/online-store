<script lang="ts">
	import { onMount } from 'svelte';
	import { cartStore } from '$lib/stores/cart';

	onMount(() => {
		cartStore.init();
	});
</script>

<svelte:head>
	<title>Privacy Policy - GameTech Store</title>
	<meta name="description" content="Read our privacy policy and understand how we protect your data." />
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

	<!-- Main Content -->
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<div class="bg-black/40 rounded-2xl border border-gray-800 p-8">
			<h1 class="text-4xl font-bold text-white mb-2">
				<span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
					Privacy Policy
				</span>
			</h1>
			<p class="text-gray-400 mb-8">Last updated: January 1, 2024</p>

			<div class="max-w-none">
				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Information We Collect</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					We collect information you provide when you create an account, make purchases, contact us, or use our gaming services. 
					This may include your name, email address, shipping address, payment information, and gaming preferences.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">How We Use Your Information</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					We use your information to process orders, provide customer service, improve our gaming products and services, 
					send you updates about new gaming gear, and ensure the security of your account.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Information Sharing</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					We do not sell or share your personal information with third parties without your consent, except as necessary 
					to process your orders (such as with shipping companies) or as required by Indonesian law.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Data Security</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					We implement appropriate security measures including encryption, secure payment processing, and regular security audits 
					to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Cookies and Tracking</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					We use cookies and similar technologies to enhance your browsing experience, remember your preferences, 
					and analyze website traffic to improve our gaming product recommendations.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Your Rights</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					Under Indonesian data protection regulations, you have the right to access, update, or delete your personal information. 
					You may also opt out of marketing communications at any time.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Data Retention</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					We retain your personal information only as long as necessary to provide our services, comply with legal obligations, 
					resolve disputes, and enforce our agreements.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">International Transfers</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					Your information may be processed and stored in servers located outside Indonesia. We ensure appropriate safeguards 
					are in place to protect your data during such transfers.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Contact Us</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">If you have any questions about this Privacy Policy, please contact us at:</p>
				<div class="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6 mt-4 backdrop-blur-sm">
					<p class="text-gray-300"><strong class="text-cyan-400">GameTech Store - Privacy Team</strong><br />
					Jl. Sudirman No. 123<br />
					Jakarta Pusat 10220<br />
					Indonesia<br />
					Email: <span class="text-cyan-400">privacy@gametech-store.com</span><br />
					Phone: <span class="text-cyan-400">+62 21 1234 5678</span></p>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<footer class="bg-black/60 border-t border-gray-800 mt-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<!-- Company Info -->
				<div class="col-span-1 md:col-span-2">
					<div class="flex items-center mb-4">
						<span class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
							GameTech Store
						</span>
						<span class="ml-2 text-2xl">🎮</span>
					</div>
					<p class="text-gray-400 mb-4">
						Your ultimate destination for gaming hardware and software in Indonesia. 
						Quality products, competitive prices, and exceptional service. ⚡
					</p>
					<div class="flex space-x-4">
						<span class="text-2xl">🏆</span>
						<span class="text-gray-400">Trusted by Indonesian gamers since 2024</span>
					</div>
				</div>

				<!-- Quick Links -->
				<div>
					<h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
					<ul class="space-y-2">
						<li><a href="/shop" class="text-gray-400 hover:text-cyan-400 transition-colors">Shop</a></li>
						<li><a href="/about" class="text-gray-400 hover:text-cyan-400 transition-colors">About</a></li>
						<li><a href="/contact" class="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
						<li><a href="/admin" class="text-gray-400 hover:text-cyan-400 transition-colors">Admin</a></li>
					</ul>
				</div>

				<!-- Legal -->
				<div>
					<h3 class="text-lg font-semibold text-white mb-4">Legal</h3>
					<ul class="space-y-2">
						<li><a href="/terms" class="text-gray-400 hover:text-cyan-400 transition-colors">Terms</a></li>
						<li><a href="/privacy" class="text-cyan-400 font-medium">Privacy</a></li>
						<li><a href="/shipping" class="text-gray-400 hover:text-cyan-400 transition-colors">Shipping</a></li>
						<li><a href="/returns" class="text-gray-400 hover:text-cyan-400 transition-colors">Returns</a></li>
					</ul>
				</div>
			</div>
			
			<div class="border-t border-gray-800 mt-8 pt-8">
				<p class="text-center text-gray-400">
					© 2024 GameTech Store. All rights reserved. Made with 💜 for Indonesian gamers.
				</p>
			</div>
		</div>
	</footer>
</div> 