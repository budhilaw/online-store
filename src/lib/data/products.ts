import type { Product, Category } from '$lib/types';

export const categories: Category[] = [
	{
		id: 'cat_9f8e7d6c-5b4a-3928-1765-4321098765ab',
		name: 'Gaming Consoles',
		slug: 'gaming-consoles',
		description: 'Latest gaming consoles and accessories',
		image: '/images/categories/gaming-consoles.jpg',
		isActive: true
	},
	{
		id: 'cat_8e7d6c5b-4a39-2817-6543-210987654321',
		name: 'PC Components',
		slug: 'pc-components',
		description: 'High-performance PC parts and components',
		image: '/images/categories/pc-components.jpg',
		isActive: true
	},
	{
		id: 'cat_7d6c5b4a-3928-1765-4321-098765432109',
		name: 'Gaming Peripherals',
		slug: 'gaming-peripherals',
		description: 'Gaming keyboards, mice, headsets and more',
		image: '/images/categories/gaming-peripherals.jpg',
		isActive: true
	},
	{
		id: 'cat_6c5b4a39-2817-6543-2109-876543210987',
		name: 'Games & Software',
		slug: 'games-software',
		description: 'Latest games and software titles',
		image: '/images/categories/games-software.jpg',
		isActive: true
	}
];

export const products: Product[] = [
	{
		id: 'prod_a1b2c3d4-e5f6-4789-a012-345678901234',
		sku: 'PS5-STANDARD-2024',
		title: 'PlayStation 5 Console',
		slug: 'playstation-5-console',
		description: 'Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio technology.',
		price: 7500000,
		compareAtPrice: 8250000,
		category: 'Gaming Consoles',
		tags: ['playstation', 'console', 'gaming', 'ps5', 'sony'],
		images: {
			featured: '/images/products/ps5-console.jpg',
			thumbnails: [
				'/images/products/ps5-console-1.jpg',
				'/images/products/ps5-console-2.jpg',
				'/images/products/ps5-console-3.jpg',
				'/images/products/ps5-console-4.jpg'
			]
		},
		inventory: {
			stock: 12,
			lowStockThreshold: 5,
			trackQuantity: true
		},
		seo: {
			metaTitle: 'PlayStation 5 Console - Next-Gen Gaming Experience',
			metaDescription: 'Get the PlayStation 5 console with ultra-fast SSD and revolutionary gaming features.'
		},
		isActive: true,
		createdAt: '2024-01-15T10:00:00Z',
		updatedAt: '2024-01-15T10:00:00Z'
	},
	{
		id: 'prod_b2c3d4e5-f6a7-4890-b123-456789012345',
		sku: 'RTX4090-GAMING-OC',
		title: 'NVIDIA GeForce RTX 4090 Gaming OC',
		slug: 'nvidia-geforce-rtx-4090-gaming-oc',
		description: 'The ultimate GeForce RTX 40 Series graphics card with Ada Lovelace architecture. Featuring 24GB GDDR6X memory for 4K gaming and content creation.',
		price: 24000000,
		compareAtPrice: 25500000,
		category: 'PC Components',
		tags: ['nvidia', 'graphics-card', 'rtx', '4090', 'gaming', 'gpu'],
		images: {
			featured: '/images/products/rtx-4090.jpg',
			thumbnails: [
				'/images/products/rtx-4090-1.jpg',
				'/images/products/rtx-4090-2.jpg',
				'/images/products/rtx-4090-3.jpg',
				'/images/products/rtx-4090-4.jpg'
			]
		},
		inventory: {
			stock: 8,
			lowStockThreshold: 3,
			trackQuantity: true
		},
		seo: {
			metaTitle: 'NVIDIA GeForce RTX 4090 - Ultimate 4K Gaming GPU',
			metaDescription: 'Experience unparalleled gaming performance with the RTX 4090 graphics card.'
		},
		isActive: true,
		createdAt: '2024-01-10T09:00:00Z',
		updatedAt: '2024-01-10T09:00:00Z'
	},
	{
		id: 'prod_c3d4e5f6-a7b8-4901-c234-567890123456',
		sku: 'XBOX-SERIES-X-2024',
		title: 'Xbox Series X Console',
		slug: 'xbox-series-x-console',
		description: 'The fastest, most powerful Xbox ever. Experience true 4K gaming at 60fps, with the possibility of 120fps, and support for Variable Refresh Rate.',
		price: 7500000,
		compareAtPrice: 7950000,
		category: 'Gaming Consoles',
		tags: ['xbox', 'console', 'gaming', 'microsoft', '4k'],
		images: {
			featured: '/images/products/xbox-series-x.jpg',
			thumbnails: [
				'/images/products/xbox-series-x-1.jpg',
				'/images/products/xbox-series-x-2.jpg',
				'/images/products/xbox-series-x-3.jpg',
				'/images/products/xbox-series-x-4.jpg'
			]
		},
		inventory: {
			stock: 15,
			lowStockThreshold: 5,
			trackQuantity: true
		},
		seo: {
			metaTitle: 'Xbox Series X - 4K Gaming Console',
			metaDescription: 'Experience the power of Xbox Series X with true 4K gaming and lightning-fast load times.'
		},
		isActive: true,
		createdAt: '2024-01-05T08:00:00Z',
		updatedAt: '2024-01-05T08:00:00Z'
	},
	{
		id: 'prod_d4e5f6a7-b8c9-4012-d345-678901234567',
		sku: 'LOGITECH-G-PRO-X',
		title: 'Logitech G PRO X Gaming Headset',
		slug: 'logitech-g-pro-x-gaming-headset',
		description: 'Professional gaming headset with Blue VO!CE microphone technology, PRO-G 50mm drivers, and DTS Headphone:X 2.0 surround sound.',
		price: 1950000,
		compareAtPrice: 2250000,
		category: 'Gaming Peripherals',
		tags: ['logitech', 'headset', 'gaming', 'pro', 'esports'],
		images: {
			featured: '/images/products/logitech-g-pro-x.jpg',
			thumbnails: [
				'/images/products/logitech-g-pro-x-1.jpg',
				'/images/products/logitech-g-pro-x-2.jpg',
				'/images/products/logitech-g-pro-x-3.jpg',
				'/images/products/logitech-g-pro-x-4.jpg'
			]
		},
		inventory: {
			stock: 25,
			lowStockThreshold: 8,
			trackQuantity: true
		},
		seo: {
			metaTitle: 'Logitech G PRO X Gaming Headset - Professional Esports Audio',
			metaDescription: 'Professional gaming headset used by esports pros with advanced audio technology.'
		},
		isActive: true,
		createdAt: '2024-01-12T11:00:00Z',
		updatedAt: '2024-01-12T11:00:00Z'
	},
	{
		id: 'prod_e5f6a7b8-c9d0-4123-e456-789012345678',
		sku: 'CYBERPUNK-2077-UE',
		title: 'Cyberpunk 2077: Ultimate Edition',
		slug: 'cyberpunk-2077-ultimate-edition',
		description: 'The complete Cyberpunk 2077 experience with the base game and Phantom Liberty expansion. Dive into the dark future of Night City.',
		price: 1200000,
		compareAtPrice: 1350000,
		category: 'Games & Software',
		tags: ['cyberpunk', 'rpg', 'game', 'pc', 'cd-projekt'],
		images: {
			featured: '/images/products/cyberpunk-2077.jpg',
			thumbnails: [
				'/images/products/cyberpunk-2077-1.jpg',
				'/images/products/cyberpunk-2077-2.jpg',
				'/images/products/cyberpunk-2077-3.jpg',
				'/images/products/cyberpunk-2077-4.jpg'
			]
		},
		inventory: {
			stock: 100,
			lowStockThreshold: 20,
			trackQuantity: true
		},
		seo: {
			metaTitle: 'Cyberpunk 2077 Ultimate Edition - Complete Night City Experience',
			metaDescription: 'Experience the complete Cyberpunk 2077 journey with all expansions and content.'
		},
		isActive: true,
		createdAt: '2024-01-08T07:00:00Z',
		updatedAt: '2024-01-08T07:00:00Z'
	},
	{
		id: 'prod_f6a7b8c9-d0e1-4234-f567-890123456789',
		sku: 'RAZER-DEATHADDER-V3',
		title: 'Razer DeathAdder V3 Gaming Mouse',
		slug: 'razer-deathadder-v3-gaming-mouse',
		description: 'Ergonomic gaming mouse with Focus Pro 30K sensor, 90-hour battery life, and ultra-lightweight design at just 59g.',
		price: 1350000,
		compareAtPrice: 1500000,
		category: 'Gaming Peripherals',
		tags: ['razer', 'mouse', 'gaming', 'ergonomic', 'wireless'],
		images: {
			featured: '/images/products/razer-deathadder-v3.jpg',
			thumbnails: [
				'/images/products/razer-deathadder-v3-1.jpg',
				'/images/products/razer-deathadder-v3-2.jpg',
				'/images/products/razer-deathadder-v3-3.jpg',
				'/images/products/razer-deathadder-v3-4.jpg'
			]
		},
		inventory: {
			stock: 40,
			lowStockThreshold: 10,
			trackQuantity: true
		},
		seo: {
			metaTitle: 'Razer DeathAdder V3 - Precision Gaming Mouse',
			metaDescription: 'Ultra-lightweight gaming mouse with pro-level precision and 90-hour battery life.'
		},
		isActive: true,
		createdAt: '2024-01-03T06:00:00Z',
		updatedAt: '2024-01-03T06:00:00Z'
	},
	{
		id: 'prod_a7b8c9d0-e1f2-4345-a678-901234567890',
		sku: 'INTEL-I9-13900K',
		title: 'Intel Core i9-13900K Processor',
		slug: 'intel-core-i9-13900k-processor',
		description: '13th Gen Intel Core processor with 24 cores (8 P-cores + 16 E-cores) and 32 threads. Unlocked for overclocking with up to 5.8 GHz max turbo.',
		price: 8850000,
		compareAtPrice: 9450000,
		category: 'PC Components',
		tags: ['intel', 'processor', 'cpu', 'gaming', 'overclocking'],
		images: {
			featured: '/images/products/intel-i9-13900k.jpg',
			thumbnails: [
				'/images/products/intel-i9-13900k-1.jpg',
				'/images/products/intel-i9-13900k-2.jpg',
				'/images/products/intel-i9-13900k-3.jpg',
				'/images/products/intel-i9-13900k-4.jpg'
			]
		},
		inventory: {
			stock: 18,
			lowStockThreshold: 5,
			trackQuantity: true
		},
		seo: {
			metaTitle: 'Intel Core i9-13900K - Ultimate Gaming Processor',
			metaDescription: 'Flagship Intel processor with 24 cores for extreme gaming and content creation performance.'
		},
		isActive: true,
		createdAt: '2024-01-01T05:00:00Z',
		updatedAt: '2024-01-01T05:00:00Z'
	},
	{
		id: 'prod_b8c9d0e1-f2a3-4456-b789-012345678901',
		sku: 'STEAM-DECK-OLED-512',
		title: 'Steam Deck OLED 512GB',
		slug: 'steam-deck-oled-512gb',
		description: 'Portable gaming powerhouse with vibrant OLED HDR display, improved battery life, and access to your entire Steam library on the go.',
		price: 8250000,
		compareAtPrice: 9000000,
		category: 'Gaming Consoles',
		tags: ['steam-deck', 'handheld', 'gaming', 'oled', 'valve'],
		images: {
			featured: '/images/products/steam-deck-oled.jpg',
			thumbnails: [
				'/images/products/steam-deck-oled-1.jpg',
				'/images/products/steam-deck-oled-2.jpg',
				'/images/products/steam-deck-oled-3.jpg',
				'/images/products/steam-deck-oled-4.jpg'
			]
		},
		inventory: {
			stock: 20,
			lowStockThreshold: 6,
			trackQuantity: true
		},
		seo: {
			metaTitle: 'Steam Deck OLED - Portable PC Gaming Revolution',
			metaDescription: 'Experience PC gaming anywhere with the Steam Deck OLED featuring HDR display and improved performance.'
		},
		isActive: true,
		createdAt: '2023-12-28T04:00:00Z',
		updatedAt: '2023-12-28T04:00:00Z'
	}
]; 