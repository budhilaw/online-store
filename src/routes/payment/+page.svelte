<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { formatPrice } from '$lib/utils';

	let orderNumber = '';
	let totalAmount = 0;
	let copyFeedback = '';

	const bankAccounts = [
		{
			bank: 'Bank Central Asia (BCA)',
			accountNumber: '1234567890',
			accountName: 'PT GameTech Store Indonesia',
			logo: '🏦'
		},
		{
			bank: 'Bank Mandiri',
			accountNumber: '0987654321',
			accountName: 'PT GameTech Store Indonesia',
			logo: '🏛️'
		},
		{
			bank: 'Bank Negara Indonesia (BNI)',
			accountNumber: '5678901234',
			accountName: 'PT GameTech Store Indonesia',
			logo: '🏪'
		}
	];

	function copyToClipboard(text: string, type: string) {
		navigator.clipboard.writeText(text).then(() => {
			copyFeedback = `${type} copied!`;
			setTimeout(() => {
				copyFeedback = '';
			}, 2000);
		});
	}

	onMount(() => {
		const params = new URLSearchParams($page.url.search);
		orderNumber = params.get('order') || 'GT24010001';
		totalAmount = parseInt(params.get('total') || '0');
	});
</script>

<svelte:head>
	<title>Payment Instructions - GameTech Store</title>
	<meta name="description" content="Complete your payment with bank transfer instructions." />
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
				<div class="flex items-center space-x-4">
					<a href="/" class="text-gray-400 hover:text-cyan-400 transition-colors">← Back to Home</a>
				</div>
			</div>
		</div>
	</header>

	<!-- Success Message -->
	<section class="bg-gradient-to-r from-green-900/40 via-cyan-900/40 to-green-900/40 py-16">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<div class="text-6xl mb-6">✅</div>
			<h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
				Order Confirmed!
			</h1>
			<p class="text-xl text-gray-300 mb-4">
				Thank you for your order. Please complete your payment to process your gaming gear.
			</p>
			<div class="bg-black/40 rounded-lg p-4 inline-block">
				<p class="text-cyan-400 font-semibold">Order Number: {orderNumber}</p>
			</div>
		</div>
	</section>

	<!-- Payment Instructions -->
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<div class="space-y-8">
			<!-- Order Summary -->
			<div class="bg-black/40 rounded-2xl p-8 border border-gray-800">
				<h2 class="text-2xl font-bold text-white mb-6">Order Summary</h2>
				<div class="flex justify-between items-center mb-6">
					<div>
						<p class="text-gray-300">Order Number</p>
						<p class="text-white font-semibold">{orderNumber}</p>
					</div>
					<div class="text-right">
						<p class="text-gray-300">Total Amount</p>
						<p class="text-2xl font-bold text-cyan-400">{formatPrice(totalAmount)}</p>
					</div>
				</div>
				
				<div class="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
					<p class="text-yellow-400 text-sm">
						⏰ Please complete your payment within 24 hours to secure your order.
					</p>
				</div>
			</div>

			<!-- Payment Instructions -->
			<div class="bg-black/40 rounded-2xl p-8 border border-gray-800">
				<h2 class="text-2xl font-bold text-white mb-6">Payment Instructions</h2>
				
				<div class="space-y-6">
					<h3 class="text-xl font-semibold text-cyan-400">Bank Transfer</h3>
					
					<div class="grid grid-cols-1 md:grid-cols-1 gap-6">
						{#each bankAccounts as bank}
							<div class="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
								<div class="flex items-center justify-between mb-4">
									<div class="flex items-center space-x-3">
										<span class="text-2xl">{bank.logo}</span>
										<div>
											<h4 class="text-white font-semibold">{bank.bank}</h4>
											<p class="text-gray-400 text-sm">a.n. {bank.accountName}</p>
										</div>
									</div>
								</div>
								
								<div class="space-y-3">
									<div class="flex justify-between items-center">
										<span class="text-gray-300">Account Number:</span>
										<div class="flex items-center space-x-2">
											<span class="text-white font-mono">{bank.accountNumber}</span>
											<button
												on:click={() => copyToClipboard(bank.accountNumber, 'Account number')}
												class="text-cyan-400 hover:text-cyan-300 transition-colors"
												title="Copy account number"
											>
												📋
											</button>
										</div>
									</div>
									
									<div class="flex justify-between items-center">
										<span class="text-gray-300">Amount:</span>
										<div class="flex items-center space-x-2">
											<span class="text-cyan-400 font-bold">{formatPrice(totalAmount)}</span>
											<button
												on:click={() => copyToClipboard(totalAmount.toString(), 'Amount')}
												class="text-cyan-400 hover:text-cyan-300 transition-colors"
												title="Copy amount"
											>
												📋
											</button>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>

					{#if copyFeedback}
						<div class="text-center">
							<span class="text-green-400 text-sm">{copyFeedback}</span>
						</div>
					{/if}

					<!-- Transfer Instructions -->
					<div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
						<h4 class="text-blue-400 font-semibold mb-3">📝 Transfer Instructions:</h4>
						<ol class="text-gray-300 space-y-2 text-sm">
							<li>1. Transfer exactly {formatPrice(totalAmount)} to one of the bank accounts above</li>
							<li>2. Use order number <span class="text-cyan-400 font-mono">{orderNumber}</span> as transfer description/note</li>
							<li>3. Keep your transfer receipt as proof of payment</li>
							<li>4. Send payment confirmation via WhatsApp or email</li>
							<li>5. We will process your order within 1-2 hours after payment verification</li>
						</ol>
					</div>

					<!-- Important Notes -->
					<div class="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
						<h4 class="text-red-400 font-semibold mb-3">⚠️ Important Notes:</h4>
						<ul class="text-gray-300 space-y-1 text-sm">
							<li>• Transfer the exact amount including all digits</li>
							<li>• Different transfer amounts may delay order processing</li>
							<li>• Orders are processed Mon-Fri 9AM-6PM, Sat 9AM-3PM</li>
							<li>• Contact our support team if you need assistance</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Contact Information -->
			<div class="bg-black/40 rounded-2xl p-8 border border-gray-800">
				<h2 class="text-2xl font-bold text-white mb-6">Need Help?</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="space-y-4">
						<div class="flex items-center space-x-3">
							<span class="text-2xl">💬</span>
							<div>
								<p class="text-white font-semibold">WhatsApp Support</p>
								<p class="text-cyan-400">+62 812 3456 7890</p>
							</div>
						</div>
						
						<div class="flex items-center space-x-3">
							<span class="text-2xl">📧</span>
							<div>
								<p class="text-white font-semibold">Email Support</p>
								<p class="text-cyan-400">support@gametech.store</p>
							</div>
						</div>
					</div>

					<div class="space-y-4">
						<div class="flex items-center space-x-3">
							<span class="text-2xl">🕒</span>
							<div>
								<p class="text-white font-semibold">Support Hours</p>
								<p class="text-gray-300 text-sm">
									Mon-Fri: 9AM-6PM WIB<br>
									Sat: 9AM-3PM WIB
								</p>
							</div>
						</div>
						
						<div class="flex items-center space-x-3">
							<span class="text-2xl">📱</span>
							<div>
								<p class="text-white font-semibold">Quick Response</p>
								<p class="text-gray-300 text-sm">Average reply time: 15 minutes</p>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-8 text-center">
					<p class="text-gray-400 text-sm">
						Send your payment confirmation to our WhatsApp or email for faster processing
					</p>
				</div>
			</div>

			<!-- Next Steps -->
			<div class="bg-black/40 rounded-2xl p-8 border border-gray-800">
				<h2 class="text-2xl font-bold text-white mb-6">What Happens Next?</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div class="text-center">
						<div class="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/20">
							<span class="text-2xl">🏦</span>
						</div>
						<h3 class="text-cyan-400 font-semibold mb-2">1. Make Payment</h3>
						<p class="text-gray-300 text-sm">Transfer the exact amount to our bank account</p>
					</div>

					<div class="text-center">
						<div class="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
							<span class="text-2xl">✅</span>
						</div>
						<h3 class="text-purple-400 font-semibold mb-2">2. Verification</h3>
						<p class="text-gray-300 text-sm">We verify your payment within 1-2 hours</p>
					</div>

					<div class="text-center">
						<div class="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
							<span class="text-2xl">📦</span>
						</div>
						<h3 class="text-green-400 font-semibold mb-2">3. Shipping</h3>
						<p class="text-gray-300 text-sm">Your gaming gear will be shipped immediately</p>
					</div>
				</div>
			</div>

			<!-- Action Buttons -->
			<div class="text-center space-y-4">
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a 
						href="mailto:support@gametech.store?subject=Payment Confirmation - Order {orderNumber}&body=Hi GameTech Team,%0A%0AI have completed the payment for Order {orderNumber}.%0AAmount: {formatPrice(totalAmount)}%0A%0APlease find the payment proof attached.%0A%0AThank you!"
						class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all inline-flex items-center justify-center space-x-2"
					>
						<span>📧</span>
						<span>Send Payment Confirmation</span>
					</a>
					
					<a 
						href="https://wa.me/6281234567890?text=Hi%20GameTech!%20I%20have%20completed%20payment%20for%20Order%20{orderNumber}.%20Amount:%20{formatPrice(totalAmount).replace(/\s/g, '%20')}.%20Please%20process%20my%20order.%20Thank%20you!"
						target="_blank"
						class="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all inline-flex items-center justify-center space-x-2"
					>
						<span>💬</span>
						<span>WhatsApp Confirmation</span>
					</a>
				</div>
				
				<div class="mt-8">
					<a href="/" class="text-cyan-400 hover:text-cyan-300 transition-colors">
						← Return to Homepage
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<footer class="bg-black border-t border-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="text-center">
				<h3 class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
					GameTech Store
				</h3>
				<p class="text-gray-400 mb-4">
					Thank you for choosing GameTech Store for your gaming needs!
				</p>
				<div class="flex justify-center space-x-4">
					<span class="text-2xl">🎮</span>
					<span class="text-2xl">⚡</span>
					<span class="text-2xl">🏆</span>
				</div>
			</div>
		</div>
	</footer>
</div> 