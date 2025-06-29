<script lang="ts">
	import { onMount } from 'svelte';
	import { cartStore } from '$lib/stores/cart';
	import { isValidEmail, isValidPhoneNumber, formatPhoneNumber } from '$lib/utils';

	let form = {
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	};

	let errors: Record<string, string> = {};
	let isSubmitting = false;
	let isSubmitted = false;

	function validateForm() {
		errors = {};

		if (!form.name.trim()) {
			errors.name = 'Nama wajib diisi';
		}

		if (!form.email.trim()) {
			errors.email = 'Email wajib diisi';
		} else if (!isValidEmail(form.email)) {
			errors.email = 'Format email tidak valid';
		}

		if (!form.phone.trim()) {
			errors.phone = 'Nomor telepon wajib diisi';
		} else if (!isValidPhoneNumber(form.phone)) {
			errors.phone = 'Format nomor telepon tidak valid (gunakan +62, 08, atau 62)';
		}

		if (!form.subject.trim()) {
			errors.subject = 'Subjek wajib diisi';
		}

		if (!form.message.trim()) {
			errors.message = 'Pesan wajib diisi';
		} else if (form.message.trim().length < 10) {
			errors.message = 'Pesan minimal 10 karakter';
		}

		return Object.keys(errors).length === 0;
	}

	async function handleSubmit() {
		if (!validateForm()) return;

		isSubmitting = true;

		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 2000));

		isSubmitting = false;
		isSubmitted = true;

		// Reset form
		form = {
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: ''
		};
	}

	onMount(() => {
		cartStore.init();
	});
</script>

<svelte:head>
	<title>Contact Us - GameTech Store | Get Expert Gaming Support</title>
	<meta name="description" content="Contact GameTech Store for expert gaming advice, product support, and consultation. We're here to help you build the perfect gaming setup." />
</svelte:head>

<div class="min-h-screen bg-gray-900">
	<!-- Header -->
	<header class="bg-black/80 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
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
					<a href="/contact" class="text-cyan-400 hover:text-cyan-300">Contact</a>
				</nav>
				<div class="flex items-center space-x-4">
					<a href="/admin/login" class="text-gray-400 hover:text-cyan-400 transition-colors">Admin</a>
					<a href="/cart" class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all">
						Cart ({$cartStore.items.reduce((total, item) => total + item.quantity, 0)})
					</a>
				</div>
			</div>
		</div>
	</header>

	<!-- Hero Section -->
	<section class="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 py-20">
		<div class="absolute inset-0 bg-black/40"></div>
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
				<span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
					Get in Touch
				</span>
			</h1>
			<p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
				Need gaming advice? Have questions about our products? Our expert team is here to help you level up your gaming experience.
			</p>
		</div>
	</section>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
			<!-- Contact Form -->
			<div class="bg-black/40 rounded-2xl p-8 border border-gray-800">
				<h2 class="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
				
				{#if isSubmitted}
					<div class="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mb-8">
						<div class="flex items-center space-x-3">
							<div class="text-2xl">✅</div>
							<div>
								<h3 class="text-green-400 font-semibold">Pesan Terkirim!</h3>
								<p class="text-gray-300 text-sm">Tim kami akan merespon dalam 24 jam.</p>
							</div>
						</div>
					</div>
				{/if}

				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<!-- Name -->
					<div>
						<label for="name" class="block text-white font-medium mb-2">Nama Lengkap *</label>
						<input
							type="text"
							id="name"
							bind:value={form.name}
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
							placeholder="Masukkan nama lengkap Anda"
							class:border-red-500={errors.name}
						/>
						{#if errors.name}
							<p class="text-red-400 text-sm mt-1">{errors.name}</p>
						{/if}
					</div>

					<!-- Email -->
					<div>
						<label for="email" class="block text-white font-medium mb-2">Email *</label>
						<input
							type="email"
							id="email"
							bind:value={form.email}
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
							placeholder="contoh@email.com"
							class:border-red-500={errors.email}
						/>
						{#if errors.email}
							<p class="text-red-400 text-sm mt-1">{errors.email}</p>
						{/if}
					</div>

					<!-- Phone -->
					<div>
						<label for="phone" class="block text-white font-medium mb-2">Nomor Telepon *</label>
						<input
							type="tel"
							id="phone"
							bind:value={form.phone}
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
							placeholder="+62812345678 atau 08123456789"
							class:border-red-500={errors.phone}
						/>
						{#if errors.phone}
							<p class="text-red-400 text-sm mt-1">{errors.phone}</p>
						{/if}
					</div>

					<!-- Subject -->
					<div>
						<label for="subject" class="block text-white font-medium mb-2">Subjek *</label>
						<select
							id="subject"
							bind:value={form.subject}
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
							class:border-red-500={errors.subject}
						>
							<option value="">Pilih subjek</option>
							<option value="Konsultasi Gaming Setup">Konsultasi Gaming Setup</option>
							<option value="Pertanyaan Produk">Pertanyaan Produk</option>
							<option value="Dukungan Teknis">Dukungan Teknis</option>
							<option value="Keluhan Pesanan">Keluhan Pesanan</option>
							<option value="Kerjasama Bisnis">Kerjasama Bisnis</option>
							<option value="Lainnya">Lainnya</option>
						</select>
						{#if errors.subject}
							<p class="text-red-400 text-sm mt-1">{errors.subject}</p>
						{/if}
					</div>

					<!-- Message -->
					<div>
						<label for="message" class="block text-white font-medium mb-2">Pesan *</label>
						<textarea
							id="message"
							bind:value={form.message}
							rows="5"
							class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
							placeholder="Jelaskan pertanyaan atau kebutuhan Anda secara detail..."
							class:border-red-500={errors.message}
						></textarea>
						{#if errors.message}
							<p class="text-red-400 text-sm mt-1">{errors.message}</p>
						{/if}
						<p class="text-gray-400 text-sm mt-1">{form.message.length}/500 karakter</p>
					</div>

					<!-- Submit Button -->
					<button
						type="submit"
						disabled={isSubmitting}
						class="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{#if isSubmitting}
							<span class="flex items-center justify-center space-x-2">
								<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
								<span>Mengirim...</span>
							</span>
						{:else}
							Kirim Pesan
						{/if}
					</button>
				</form>
			</div>

			<!-- Contact Information -->
			<div class="space-y-8">
				<!-- Contact Details -->
				<div class="bg-black/40 rounded-2xl p-8 border border-gray-800">
					<h3 class="text-2xl font-bold text-white mb-6">Hubungi Kami</h3>
					<div class="space-y-6">
						<div class="flex items-start space-x-4">
							<div class="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
								<span class="text-cyan-400 text-xl">📍</span>
							</div>
							<div>
								<h4 class="text-white font-semibold mb-1">Alamat Toko</h4>
								<p class="text-gray-300">
									Jl. Gatot Subroto No. 123<br>
									Jakarta Selatan 12950<br>
									Indonesia
								</p>
							</div>
						</div>

						<div class="flex items-start space-x-4">
							<div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20">
								<span class="text-purple-400 text-xl">📞</span>
							</div>
							<div>
								<h4 class="text-white font-semibold mb-1">Telepon</h4>
								<p class="text-gray-300">+62 21 1234 5678</p>
								<p class="text-gray-300">+62 812 3456 7890 (WhatsApp)</p>
							</div>
						</div>

						<div class="flex items-start space-x-4">
							<div class="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center border border-pink-500/20">
								<span class="text-pink-400 text-xl">✉️</span>
							</div>
							<div>
								<h4 class="text-white font-semibold mb-1">Email</h4>
								<p class="text-gray-300">support@gametech.store</p>
								<p class="text-gray-300">sales@gametech.store</p>
							</div>
						</div>

						<div class="flex items-start space-x-4">
							<div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
								<span class="text-green-400 text-xl">🕒</span>
							</div>
							<div>
								<h4 class="text-white font-semibold mb-1">Jam Operasional</h4>
								<p class="text-gray-300">
									Senin - Jumat: 09:00 - 18:00 WIB<br>
									Sabtu: 09:00 - 15:00 WIB<br>
									Minggu: Tutup
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- FAQ -->
				<div class="bg-black/40 rounded-2xl p-8 border border-gray-800">
					<h3 class="text-2xl font-bold text-white mb-6">Pertanyaan Umum</h3>
					<div class="space-y-4">
						<div>
							<h4 class="text-cyan-400 font-semibold mb-2">Berapa lama pengiriman?</h4>
							<p class="text-gray-300 text-sm">Pengiriman Jakarta 1-2 hari, luar Jakarta 2-5 hari kerja.</p>
						</div>
						<div>
							<h4 class="text-purple-400 font-semibold mb-2">Garansi produk berapa lama?</h4>
							<p class="text-gray-300 text-sm">Garansi sesuai dengan ketentuan manufacturer masing-masing produk.</p>
						</div>
						<div>
							<h4 class="text-pink-400 font-semibold mb-2">Bisa konsultasi gaming setup?</h4>
							<p class="text-gray-300 text-sm">Ya! Tim ahli kami siap membantu merancang setup gaming ideal sesuai budget.</p>
						</div>
						<div>
							<h4 class="text-green-400 font-semibold mb-2">Pembayaran apa saja yang diterima?</h4>
							<p class="text-gray-300 text-sm">Transfer bank, e-wallet, kartu kredit, dan cicilan 0% tersedia.</p>
						</div>
					</div>
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