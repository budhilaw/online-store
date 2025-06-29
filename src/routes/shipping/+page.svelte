<script lang="ts">
	import { onMount } from 'svelte';
	import { cartStore } from '$lib/stores/cart';

	onMount(() => {
		cartStore.init();
	});
</script>

<svelte:head>
	<title>Shipping Information - GameTech Store</title>
	<meta name="description" content="Learn about our shipping options, delivery times, and policies for gaming products in Indonesia." />
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
					Shipping Information
				</span>
			</h1>
			<p class="text-gray-400 mb-8">Fast and reliable delivery across Indonesia 🚚</p>

			<div class="max-w-none">
				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Shipping Options</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					<div class="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-6 backdrop-blur-sm">
						<h3 class="text-lg font-semibold text-cyan-400 mb-3">🚛 Standard Shipping</h3>
						<p class="text-gray-300 mb-2">3-5 business days</p>
						<p class="text-2xl font-bold text-white mb-1">IDR 25,000</p>
						<p class="text-sm text-purple-400">Free on orders over IDR 1,500,000</p>
						<p class="text-xs text-gray-400 mt-2">Via JNE, J&T Express, SiCepat</p>
					</div>
					<div class="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
						<h3 class="text-lg font-semibold text-purple-400 mb-3">⚡ Express Shipping</h3>
						<p class="text-gray-300 mb-2">1-2 business days</p>
						<p class="text-2xl font-bold text-white mb-1">IDR 50,000</p>
						<p class="text-sm text-cyan-400">Same day available in Jakarta</p>
						<p class="text-xs text-gray-400 mt-2">Via JNE Express, GoSend Instant</p>
					</div>
				</div>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Coverage Areas</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					We deliver gaming gear to all major cities across Indonesia:
				</p>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
					<div class="bg-gray-800/50 rounded-lg p-4">
						<h4 class="text-cyan-400 font-semibold mb-2">🏙️ Jabodetabek</h4>
						<ul class="text-gray-300 text-sm space-y-1">
							<li>Jakarta (Same Day Available)</li>
							<li>Bogor, Depok, Tangerang</li>
							<li>Bekasi, Cikarang</li>
						</ul>
					</div>
					<div class="bg-gray-800/50 rounded-lg p-4">
						<h4 class="text-purple-400 font-semibold mb-2">🌟 Major Cities</h4>
						<ul class="text-gray-300 text-sm space-y-1">
							<li>Bandung, Yogyakarta</li>
							<li>Surabaya, Malang</li>
							<li>Medan, Palembang</li>
						</ul>
					</div>
					<div class="bg-gray-800/50 rounded-lg p-4">
						<h4 class="text-cyan-400 font-semibold mb-2">🏝️ Other Regions</h4>
						<ul class="text-gray-300 text-sm space-y-1">
							<li>Makassar, Balikpapan</li>
							<li>Denpasar, Mataram</li>
							<li>Manado, Jayapura</li>
						</ul>
					</div>
				</div>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Processing Time</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					Orders are processed within 1-2 business days (Monday-Saturday). Gaming peripherals and software are usually shipped same day if ordered before 3:00 PM WIB. 
					You'll receive a tracking number via WhatsApp and email once your order ships.
				</p>
				<div class="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-4 mb-6">
					<p class="text-gray-300"><strong class="text-cyan-400">Pro Tip:</strong> Orders placed on weekends will be processed on the following Monday. Gaming chairs and large components may require additional 1-2 days processing time.</p>
				</div>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Order Tracking</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">Track your gaming gear delivery easily:</p>
				<ol class="list-decimal ml-6 text-gray-300 space-y-2 mb-6">
					<li class="leading-relaxed">Receive tracking number via WhatsApp/SMS after shipment</li>
					<li class="leading-relaxed">Check real-time status on our website or courier app</li>
					<li class="leading-relaxed">Get delivery notifications 1 hour before arrival</li>
					<li class="leading-relaxed">Confirm receipt and enjoy your new gaming gear! 🎮</li>
				</ol>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Special Handling</h2>
				<div class="space-y-4 mb-6">
					<div class="border-l-4 border-purple-500 pl-4">
						<h4 class="text-purple-400 font-semibold">Gaming Consoles & PCs</h4>
						<p class="text-gray-300 text-sm">Extra protective packaging, insurance included, signature required</p>
					</div>
					<div class="border-l-4 border-cyan-500 pl-4">
						<h4 class="text-cyan-400 font-semibold">Monitors & TVs</h4>
						<p class="text-gray-300 text-sm">Fragile handling, wooden crate for 32"+ displays, white glove delivery available</p>
					</div>
					<div class="border-l-4 border-purple-500 pl-4">
						<h4 class="text-purple-400 font-semibold">Digital Products</h4>
						<p class="text-gray-300 text-sm">Game codes sent instantly via email after payment confirmation</p>
					</div>
				</div>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">International Shipping</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					Currently, we focus on serving Indonesian gamers with the best local service. 
					International shipping to Malaysia, Singapore, and Brunei coming soon! 🌏
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">Shipping Support</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">Questions about shipping? Our logistics team is here to help:</p>
				<div class="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6 mt-4 backdrop-blur-sm">
					<p class="text-gray-300"><strong class="text-cyan-400">GameTech Store - Shipping Team</strong><br />
					Jl. Sudirman No. 123<br />
					Jakarta Pusat 10220<br />
					Indonesia<br />
					Email: <span class="text-cyan-400">shipping@gametech-store.com</span><br />
					WhatsApp: <span class="text-cyan-400">+62 812 3456 7891</span><br />
					Phone: <span class="text-cyan-400">+62 21 1234 5678</span><br />
					<span class="text-purple-400 text-sm mt-2 block">Operating Hours: Monday - Saturday, 8:00 AM - 7:00 PM WIB</span></p>
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
						<a href="/shipping" class="block text-cyan-400 font-medium">Shipping</a>
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