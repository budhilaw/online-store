<script lang="ts">
	import { onMount } from 'svelte';
	import { cartStore } from '$lib/stores/cart';

	onMount(() => {
		cartStore.init();
	});
</script>

<svelte:head>
	<title>Terms of Service - GameTech Store</title>
	<meta name="description" content="Read our terms of service and understand our policies." />
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
					Terms of Service
				</span>
			</h1>
			<p class="text-gray-400 mb-8">Last updated: January 1, 2024</p>

			<div class="max-w-none">
				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">1. Acceptance of Terms</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
					If you do not agree to abide by the above, please do not use this service.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">2. Use License</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					Permission is granted to temporarily download one copy of the materials (information or software) on GameTech Store's 
					website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
				</p>
				<ul class="list-disc ml-6 mb-4 text-gray-300">
					<li class="mb-1">modify or copy the materials;</li>
					<li class="mb-1">use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
					<li class="mb-1">attempt to decompile or reverse engineer any software contained on GameTech Store's website;</li>
					<li class="mb-1">remove any copyright or other proprietary notations from the materials.</li>
				</ul>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">3. Disclaimer</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					The materials on GameTech Store's website are provided on an 'as is' basis. GameTech Store makes no warranties, 
					expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
					implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
					of intellectual property or other violation of rights.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">4. Limitations</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					In no event shall GameTech Store or its suppliers be liable for any damages (including, without limitation, 
					damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
					use the materials on GameTech Store's website, even if GameTech Store or a GameTech Store authorized representative 
					has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not 
					allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, 
					these limitations may not apply to you.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">5. Accuracy of Materials</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					The materials appearing on GameTech Store's website could include technical, typographical, or photographic errors. 
					GameTech Store does not warrant that any of the materials on its website are accurate, complete, or current. 
					GameTech Store may make changes to the materials contained on its website at any time without notice. 
					However, GameTech Store does not make any commitment to update the materials.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">6. Links</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					GameTech Store has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. 
					The inclusion of any link does not imply endorsement by GameTech Store of the site. Use of any such linked website is at the user's own risk.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">7. Modifications</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					GameTech Store may revise these terms of service for its website at any time without notice. By using this website, 
					you are agreeing to be bound by the then current version of these terms of service.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">8. Governing Law</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					These terms and conditions are governed by and construed in accordance with the laws of Indonesia and you 
					irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">9. Account Terms</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">When you create an account with us, you must provide information that is accurate, complete, and current at all times.</p>
				<p class="text-gray-300 mb-4 leading-relaxed">
					You are responsible for safeguarding the password that you use to access the Service and for all activities that occur under your password, 
					whether your password is with our Service or a third-party service.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">10. Prohibited Uses</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">You may not use our products:</p>
				<ul class="list-disc ml-6 mb-4 text-gray-300">
					<li class="mb-1">for any unlawful purpose or to solicit others to perform unlawful acts;</li>
					<li class="mb-1">to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances;</li>
					<li class="mb-1">to infringe upon or violate our intellectual property rights or the intellectual property rights of others;</li>
					<li class="mb-1">to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate;</li>
					<li class="mb-1">to submit false or misleading information;</li>
					<li class="mb-1">to upload or transmit viruses or any other type of malicious code.</li>
				</ul>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">11. Products and Services</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					Certain products or services may be available exclusively online through the website. 
					These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
				</p>
				<p class="text-gray-300 mb-4 leading-relaxed">
					We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, 
					geographic region or jurisdiction.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">12. Billing and Account Information</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, 
					per household or per order. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail 
					and/or billing address/phone number provided at the time the order was made.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">13. Optional Tools</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">
					We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. 
					You acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties, 
					representations or conditions of any kind and without any endorsement.
				</p>

				<h2 class="text-xl font-semibold text-cyan-400 mt-8 mb-4">14. Contact Information</h2>
				<p class="text-gray-300 mb-4 leading-relaxed">Questions about the Terms of Service should be sent to us at:</p>
				<div class="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-6 mt-4 backdrop-blur-sm">
					<p class="text-gray-200 leading-relaxed">
						<strong class="text-cyan-400 text-lg">GameTech Store</strong><br />
						<span class="text-gray-300">Jl. Sudirman No. 123</span><br />
						<span class="text-gray-300">Jakarta Pusat 10220</span><br />
						<span class="text-gray-300">Indonesia</span><br />
						<span class="text-gray-300">Email: </span><span class="text-cyan-400">legal@gametech-store.com</span><br />
						<span class="text-gray-300">Phone: </span><span class="text-cyan-400">+62 21 1234 5678</span>
					</p>
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
						<a href="/terms" class="block text-cyan-400 font-medium">Terms</a>
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