<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { cartStore } from '$lib/stores/cart';
	import { formatPrice, isValidEmail, isValidPhoneNumber, generateOrderNumber } from '$lib/utils';

	let cart = $cartStore;
	let currentStep = 1; // 1: Customer Info, 2: Shipping, 3: Review & Payment

	// Form data
	let customerInfo = {
		firstName: '',
		lastName: '',
		email: '',
		phone: ''
	};

	let shippingAddress = {
		street: '',
		city: '',
		state: '',
		postalCode: '',
		country: 'Indonesia'
	};

	let paymentMethod = 'bank_transfer';

	let errors: Record<string, string> = {};
	let isSubmitting = false;

	// Indonesian provinces for dropdown
	const indonesianProvinces = [
		'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'DI Yogyakarta',
		'Banten', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur',
		'Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara',
		'Sulawesi Utara', 'Sulawesi Tengah', 'Sulawesi Selatan', 'Sulawesi Tenggara', 'Gorontalo', 'Sulawesi Barat',
		'Sumatra Utara', 'Sumatra Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Sumatra Selatan', 'Bengkulu', 'Lampung',
		'Bangka Belitung', 'Aceh', 'Maluku', 'Maluku Utara', 'Papua', 'Papua Barat', 'Papua Selatan', 'Papua Tengah', 'Papua Pegunungan', 'Papua Barat Daya'
	];

	function validateCustomerInfo() {
		errors = {};

		if (!customerInfo.firstName.trim()) {
			errors.firstName = 'Nama depan wajib diisi';
		}

		if (!customerInfo.lastName.trim()) {
			errors.lastName = 'Nama belakang wajib diisi';
		}

		if (!customerInfo.email.trim()) {
			errors.email = 'Email wajib diisi';
		} else if (!isValidEmail(customerInfo.email)) {
			errors.email = 'Format email tidak valid';
		}

		if (!customerInfo.phone.trim()) {
			errors.phone = 'Nomor telepon wajib diisi';
		} else if (!isValidPhoneNumber(customerInfo.phone)) {
			errors.phone = 'Format nomor telepon tidak valid';
		}

		return Object.keys(errors).length === 0;
	}

	function validateShippingAddress() {
		errors = {};

		if (!shippingAddress.street.trim()) {
			errors.street = 'Alamat lengkap wajib diisi';
		}

		if (!shippingAddress.city.trim()) {
			errors.city = 'Kota wajib diisi';
		}

		if (!shippingAddress.state.trim()) {
			errors.state = 'Provinsi wajib dipilih';
		}

		if (!shippingAddress.postalCode.trim()) {
			errors.postalCode = 'Kode pos wajib diisi';
		} else if (!/^\d{5}$/.test(shippingAddress.postalCode)) {
			errors.postalCode = 'Kode pos harus 5 digit angka';
		}

		return Object.keys(errors).length === 0;
	}

	function nextStep() {
		if (currentStep === 1) {
			if (validateCustomerInfo()) {
				currentStep = 2;
			}
		} else if (currentStep === 2) {
			if (validateShippingAddress()) {
				currentStep = 3;
			}
		}
	}

	function prevStep() {
		if (currentStep > 1) {
			currentStep--;
		}
	}

	async function submitOrder() {
		if (cart.items.length === 0) {
			alert('Keranjang belanja kosong');
			return;
		}

		isSubmitting = true;

		// Generate order number
		const orderNumber = generateOrderNumber();

		// Simulate order processing
		await new Promise(resolve => setTimeout(resolve, 2000));

		// Clear cart
		cartStore.clear();

		// Redirect to payment page
		goto(`/payment?order=${orderNumber}&total=${cart.total}`);
	}

	onMount(() => {
		cartStore.init();
		
		// Redirect if cart is empty
		if ($cartStore.items.length === 0) {
			goto('/cart');
		}
	});

	$: cart = $cartStore;
</script>

<svelte:head>
	<title>Checkout - GameTech Store</title>
	<meta name="description" content="Complete your gaming gear purchase with secure checkout." />
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
					<a href="/cart" class="text-gray-400 hover:text-cyan-400 transition-colors">← Back to Cart</a>
				</div>
			</div>
		</div>
	</header>

	<!-- Progress Steps -->
	<div class="bg-black/40 py-6">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-center space-x-8">
				<div class="flex items-center space-x-2">
					<div class="w-8 h-8 rounded-full {currentStep >= 1 ? 'bg-cyan-500 text-white' : 'bg-gray-600 text-gray-300'} flex items-center justify-center text-sm font-medium">
						1
					</div>
					<span class="text-sm {currentStep >= 1 ? 'text-cyan-400' : 'text-gray-400'}">Customer Info</span>
				</div>
				<div class="w-12 h-0.5 {currentStep > 1 ? 'bg-cyan-500' : 'bg-gray-600'}"></div>
				<div class="flex items-center space-x-2">
					<div class="w-8 h-8 rounded-full {currentStep >= 2 ? 'bg-cyan-500 text-white' : 'bg-gray-600 text-gray-300'} flex items-center justify-center text-sm font-medium">
						2
					</div>
					<span class="text-sm {currentStep >= 2 ? 'text-cyan-400' : 'text-gray-400'}">Shipping</span>
				</div>
				<div class="w-12 h-0.5 {currentStep > 2 ? 'bg-cyan-500' : 'bg-gray-600'}"></div>
				<div class="flex items-center space-x-2">
					<div class="w-8 h-8 rounded-full {currentStep >= 3 ? 'bg-cyan-500 text-white' : 'bg-gray-600 text-gray-300'} flex items-center justify-center text-sm font-medium">
						3
					</div>
					<span class="text-sm {currentStep >= 3 ? 'text-cyan-400' : 'text-gray-400'}">Review & Payment</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Checkout Content -->
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
			<!-- Form Section -->
			<div class="lg:col-span-2">
				{#if currentStep === 1}
					<!-- Customer Information -->
					<div class="bg-black/40 rounded-2xl p-8 border border-gray-800">
						<h2 class="text-2xl font-bold text-white mb-6">Customer Information</h2>
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="firstName" class="block text-white font-medium mb-2">Nama Depan *</label>
								<input
									type="text"
									id="firstName"
									bind:value={customerInfo.firstName}
									class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
									placeholder="Nama depan"
									class:border-red-500={errors.firstName}
								/>
								{#if errors.firstName}
									<p class="text-red-400 text-sm mt-1">{errors.firstName}</p>
								{/if}
							</div>

							<div>
								<label for="lastName" class="block text-white font-medium mb-2">Nama Belakang *</label>
								<input
									type="text"
									id="lastName"
									bind:value={customerInfo.lastName}
									class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
									placeholder="Nama belakang"
									class:border-red-500={errors.lastName}
								/>
								{#if errors.lastName}
									<p class="text-red-400 text-sm mt-1">{errors.lastName}</p>
								{/if}
							</div>

							<div>
								<label for="email" class="block text-white font-medium mb-2">Email *</label>
								<input
									type="email"
									id="email"
									bind:value={customerInfo.email}
									class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
									placeholder="contoh@email.com"
									class:border-red-500={errors.email}
								/>
								{#if errors.email}
									<p class="text-red-400 text-sm mt-1">{errors.email}</p>
								{/if}
							</div>

							<div>
								<label for="phone" class="block text-white font-medium mb-2">Nomor Telepon *</label>
								<input
									type="tel"
									id="phone"
									bind:value={customerInfo.phone}
									class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
									placeholder="+62812345678"
									class:border-red-500={errors.phone}
								/>
								{#if errors.phone}
									<p class="text-red-400 text-sm mt-1">{errors.phone}</p>
								{/if}
							</div>
						</div>
					</div>
				{:else if currentStep === 2}
					<!-- Shipping Address -->
					<div class="bg-black/40 rounded-2xl p-8 border border-gray-800">
						<h2 class="text-2xl font-bold text-white mb-6">Shipping Address</h2>
						
						<div class="space-y-6">
							<div>
								<label for="street" class="block text-white font-medium mb-2">Alamat Lengkap *</label>
								<textarea
									id="street"
									bind:value={shippingAddress.street}
									rows="3"
									class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
									placeholder="Jl. Nama Jalan No. XX, RT/RW, Kelurahan, Kecamatan"
									class:border-red-500={errors.street}
								></textarea>
								{#if errors.street}
									<p class="text-red-400 text-sm mt-1">{errors.street}</p>
								{/if}
							</div>

							<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label for="city" class="block text-white font-medium mb-2">Kota/Kabupaten *</label>
									<input
										type="text"
										id="city"
										bind:value={shippingAddress.city}
										class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
										placeholder="Jakarta Selatan"
										class:border-red-500={errors.city}
									/>
									{#if errors.city}
										<p class="text-red-400 text-sm mt-1">{errors.city}</p>
									{/if}
								</div>

								<div>
									<label for="postalCode" class="block text-white font-medium mb-2">Kode Pos *</label>
									<input
										type="text"
										id="postalCode"
										bind:value={shippingAddress.postalCode}
										maxlength="5"
										class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
										placeholder="12345"
										class:border-red-500={errors.postalCode}
									/>
									{#if errors.postalCode}
										<p class="text-red-400 text-sm mt-1">{errors.postalCode}</p>
									{/if}
								</div>
							</div>

							<div>
								<label for="state" class="block text-white font-medium mb-2">Provinsi *</label>
								<select
									id="state"
									bind:value={shippingAddress.state}
									class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
									class:border-red-500={errors.state}
								>
									<option value="">Pilih provinsi</option>
									{#each indonesianProvinces as province}
										<option value={province}>{province}</option>
									{/each}
								</select>
								{#if errors.state}
									<p class="text-red-400 text-sm mt-1">{errors.state}</p>
								{/if}
							</div>
						</div>
					</div>
				{:else if currentStep === 3}
					<!-- Review & Payment -->
					<div class="space-y-8">
						<!-- Order Review -->
						<div class="bg-black/40 rounded-2xl p-8 border border-gray-800">
							<h2 class="text-2xl font-bold text-white mb-6">Order Review</h2>
							
							<!-- Customer Info -->
							<div class="mb-6">
								<h3 class="text-lg font-semibold text-cyan-400 mb-3">Customer Information</h3>
								<div class="text-gray-300 space-y-1">
									<p>{customerInfo.firstName} {customerInfo.lastName}</p>
									<p>{customerInfo.email}</p>
									<p>{customerInfo.phone}</p>
								</div>
							</div>

							<!-- Shipping Address -->
							<div class="mb-6">
								<h3 class="text-lg font-semibold text-cyan-400 mb-3">Shipping Address</h3>
								<div class="text-gray-300">
									<p>{shippingAddress.street}</p>
									<p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.postalCode}</p>
									<p>{shippingAddress.country}</p>
								</div>
							</div>

							<!-- Order Items -->
							<div>
								<h3 class="text-lg font-semibold text-cyan-400 mb-3">Order Items</h3>
								<div class="space-y-3">
									{#each cart.items as item}
										<div class="flex justify-between items-center">
											<div>
												<p class="text-white">{item.title}</p>
												<p class="text-sm text-gray-400">Qty: {item.quantity}</p>
											</div>
											<p class="text-cyan-400 font-medium">{formatPrice(item.price * item.quantity)}</p>
										</div>
									{/each}
								</div>
							</div>
						</div>

						<!-- Payment Method -->
						<div class="bg-black/40 rounded-2xl p-8 border border-gray-800">
							<h2 class="text-2xl font-bold text-white mb-6">Payment Method</h2>
							
							<div class="space-y-4">
								<label class="flex items-center space-x-3 cursor-pointer">
									<input
										type="radio"
										name="payment"
										value="bank_transfer"
										bind:group={paymentMethod}
										class="text-cyan-500 focus:ring-cyan-500"
									/>
									<div class="flex-1">
										<div class="flex items-center space-x-3">
											<span class="text-2xl">🏦</span>
											<div>
												<p class="text-white font-medium">Transfer Bank Manual</p>
												<p class="text-sm text-gray-400">Transfer ke rekening bank kami</p>
											</div>
										</div>
									</div>
								</label>
							</div>

							<div class="mt-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
								<p class="text-yellow-400 text-sm">
									💡 Setelah checkout, Anda akan mendapatkan instruksi pembayaran dan nomor rekening bank.
								</p>
							</div>
						</div>
					</div>
				{/if}

				<!-- Navigation Buttons -->
				<div class="flex justify-between mt-8">
					{#if currentStep > 1}
						<button
							on:click={prevStep}
							class="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
						>
							← Previous
						</button>
					{:else}
						<div></div>
					{/if}

					{#if currentStep < 3}
						<button
							on:click={nextStep}
							class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all"
						>
							Next →
						</button>
					{:else}
						<button
							on:click={submitOrder}
							disabled={isSubmitting}
							class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{#if isSubmitting}
								<span class="flex items-center space-x-2">
									<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
									<span>Processing...</span>
								</span>
							{:else}
								Complete Order
							{/if}
						</button>
					{/if}
				</div>
			</div>

			<!-- Order Summary Sidebar -->
			<div class="lg:col-span-1">
				<div class="bg-black/40 rounded-2xl p-6 border border-gray-800 sticky top-24">
					<h3 class="text-xl font-bold text-white mb-6">Order Summary</h3>
					
					<!-- Cart Items -->
					<div class="space-y-3 mb-6">
						{#each cart.items as item}
							<div class="flex justify-between text-sm">
								<div class="flex-1">
									<p class="text-gray-300">{item.title}</p>
									<p class="text-gray-500">Qty: {item.quantity}</p>
								</div>
								<p class="text-white">{formatPrice(item.price * item.quantity)}</p>
							</div>
						{/each}
					</div>

					<hr class="border-gray-700 mb-4" />

					<!-- Pricing Breakdown -->
					<div class="space-y-2 text-sm">
						<div class="flex justify-between text-gray-300">
							<span>Subtotal</span>
							<span>{formatPrice(cart.subtotal)}</span>
						</div>
						<div class="flex justify-between text-gray-300">
							<span>PPN (11%)</span>
							<span>{formatPrice(cart.tax)}</span>
						</div>
						<div class="flex justify-between text-gray-300">
							<span>Shipping</span>
							<span>
								{#if cart.shipping === 0}
									<span class="text-green-400">Free</span>
								{:else}
									{formatPrice(cart.shipping)}
								{/if}
							</span>
						</div>
					</div>

					<hr class="border-gray-700 my-4" />

					<!-- Total -->
					<div class="flex justify-between text-lg font-bold">
						<span class="text-white">Total</span>
						<span class="text-cyan-400">{formatPrice(cart.total)}</span>
					</div>

					<!-- Security Info -->
					<div class="mt-6 text-center">
						<div class="inline-flex items-center space-x-2 text-gray-400 text-sm">
							<span>🔒</span>
							<span>Secure & encrypted checkout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> 