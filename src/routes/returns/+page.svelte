<script lang="ts">
	import { onMount } from 'svelte';
	import { cartStore } from '$lib/stores/cart';

	onMount(() => {
		cartStore.init();
	});
</script>

<svelte:head>
	<title>Returns & Exchanges - GameTech Store</title>
	<meta name="description" content="Learn about our return policy and how to return or exchange gaming products." />
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
					Returns & Exchanges
				</span>
			</h1>
			<p class="text-gray-400 mb-8">Hassle-free returns for all gaming products</p>

			<div class="max-w-none">
				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Return Policy</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					We want you to be completely satisfied with your gaming gear purchase. If you're not happy with your order, 
					you can return most items within 30 days of delivery for a full refund.
				</p>
				
				<h3 class="text-lg font-semibold text-purple-400 mb-3 mt-6">Return Requirements:</h3>
				<ul class="list-disc ml-6 text-gray-300 space-y-2 mb-6">
					<li>Gaming products must be in original condition with all accessories</li>
					<li>Original packaging, manuals, and tags required</li>
					<li>Return within 30 days of delivery</li>
					<li>Include original receipt or order number</li>
					<li>Software products must be unopened (sealed)</li>
				</ul>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">How to Return Your Gaming Gear</h2>
				<ol class="list-decimal ml-6 text-gray-300 space-y-3 mb-6">
					<li class="leading-relaxed">Contact our Indonesian customer service team via email or WhatsApp</li>
					<li class="leading-relaxed">Receive return authorization number and shipping label</li>
					<li class="leading-relaxed">Package item securely in original box with all accessories</li>
					<li class="leading-relaxed">Drop off at JNE, J&T Express, or SiCepat location across Indonesia</li>
					<li class="leading-relaxed">Track your return and receive confirmation email</li>
				</ol>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Refund Timeline</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					Refunds are processed within 3-5 business days after we receive and inspect your return. 
					You'll receive an email confirmation when your refund is processed. Refunds will be credited back to your original payment method:
				</p>
				<ul class="list-disc ml-6 text-gray-300 space-y-1 mb-6">
					<li>Bank Transfer (BCA, Mandiri, BNI): 1-2 business days</li>
					<li>Credit/Debit Card: 3-5 business days</li>
					<li>Digital Wallets (GoPay, OVO, DANA): 1-2 business days</li>
				</ul>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Non-Returnable Items</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">For hygiene and safety reasons, the following items cannot be returned:</p>
				<ul class="list-disc ml-6 text-gray-300 space-y-1 mb-6">
					<li>Opened software and digital game codes</li>
					<li>Gaming headsets and earphones (unless defective)</li>
					<li>Customized or personalized gaming accessories</li>
					<li>Items damaged by misuse or normal wear</li>
				</ul>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Exchanges</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					We offer direct exchanges for defective items or size/color variations. 
					Contact our support team to arrange an exchange - we'll cover return shipping for defective products!
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Contact Our Return Support</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">Questions about returns? Our gaming experts are here to help:</p>
				<div class="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6 mt-4 backdrop-blur-sm">
					<p class="text-gray-300"><strong class="text-cyan-400">GameTech Store - Returns Team</strong><br />
					Jl. Sudirman No. 123<br />
					Jakarta Pusat 10220<br />
					Indonesia<br />
					Email: <span class="text-cyan-400">returns@gametech-store.com</span><br />
					WhatsApp: <span class="text-cyan-400">+62 812 3456 7890</span><br />
					Phone: <span class="text-cyan-400">+62 21 1234 5678</span><br />
					<span class="text-purple-400 text-sm mt-2 block">Operating Hours: Monday - Saturday, 9:00 AM - 6:00 PM WIB</span></p>
				</div>
			</div>
		</div>
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
						<a href="/returns" class="block text-cyan-400 font-medium">Returns</a>
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