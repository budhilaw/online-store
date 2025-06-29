import type { Order, OrderCustomer, OrderItem } from '$lib/types';

export const orders: Order[] = [
	{
		id: '1',
		orderNumber: 'GT-2024-001',
		customer: {
			firstName: 'Budi',
			lastName: 'Santoso',
			email: 'budi.santoso@gmail.com',
			phone: '+62 812 3456 7890',
			address: {
				street: 'Jl. Sudirman No. 123',
				city: 'Jakarta',
				state: 'DKI Jakarta',
				postalCode: '12345',
				country: 'Indonesia'
			}
		},
		items: [
			{
				productId: 'prod_a1b2c3d4-e5f6-4789-a012-345678901234',
				sku: 'PS5-CONS-STD',
				title: 'PlayStation 5 Console',
				price: 7500000,
				quantity: 1,
				total: 7500000
			},
			{
				productId: 'prod_b2c3d4e5-f6g7-4890-b123-456789012345',
				sku: 'RTX4090-OC',
				title: 'NVIDIA GeForce RTX 4090 Gaming OC',
				price: 24000000,
				quantity: 1,
				total: 24000000
			}
		],
		subtotal: 31500000,
		tax: 3465000, // 11% PPN
		shipping: 0, // Free shipping
		total: 34965000,
		status: 'delivered',
		paymentMethod: 'Bank Transfer - BCA',
		createdAt: '2024-01-20T14:30:00Z',
		updatedAt: '2024-01-22T09:15:00Z'
	},
	{
		id: '2',
		orderNumber: 'GT-2024-002',
		customer: {
			firstName: 'Sari',
			lastName: 'Dewi',
			email: 'sari.dewi@yahoo.com',
			phone: '+62 821 9876 5432',
			address: {
				street: 'Jl. Thamrin No. 456',
				city: 'Bandung',
				state: 'Jawa Barat',
				postalCode: '40123',
				country: 'Indonesia'
			}
		},
		items: [
			{
				productId: 'prod_c3d4e5f6-g7h8-4901-c234-567890123456',
				sku: 'XBOX-SX-1TB',
				title: 'Xbox Series X 1TB Console',
				price: 7200000,
				quantity: 1,
				total: 7200000
			}
		],
		subtotal: 7200000,
		tax: 792000, // 11% PPN
		shipping: 0, // Free shipping
		total: 7992000,
		status: 'shipped',
		paymentMethod: 'Bank Transfer - Mandiri',
		createdAt: '2024-01-25T10:15:00Z',
		updatedAt: '2024-01-25T16:45:00Z'
	},
	{
		id: '3',
		orderNumber: 'GT-2024-003',
		customer: {
			firstName: 'Ahmad',
			lastName: 'Rizki',
			email: 'ahmad.rizki@gmail.com',
			phone: '+62 813 5555 7777',
			address: {
				street: 'Jl. Gatot Subroto No. 789',
				city: 'Surabaya',
				state: 'Jawa Timur',
				postalCode: '60123',
				country: 'Indonesia'
			}
		},
		items: [
			{
				productId: 'prod_d4e5f6g7-h8i9-4012-d345-678901234567',
				sku: 'LOGI-G502X',
				title: 'Logitech G502 X Gaming Mouse',
				price: 850000,
				quantity: 1,
				total: 850000
			},
			{
				productId: 'prod_e5f6g7h8-i9j0-4123-e456-789012345678',
				sku: 'STEEL-APEX7',
				title: 'SteelSeries Apex 7 Gaming Keyboard',
				price: 2200000,
				quantity: 1,
				total: 2200000
			}
		],
		subtotal: 3050000,
		tax: 335500, // 11% PPN
		shipping: 50000, // Standard shipping
		total: 3435500,
		status: 'pending',
		paymentMethod: 'Bank Transfer - BNI',
		createdAt: '2024-01-28T08:20:00Z',
		updatedAt: '2024-01-28T08:20:00Z'
	},
	{
		id: '4',
		orderNumber: 'GT-2024-004',
		customer: {
			firstName: 'Rina',
			lastName: 'Kartika',
			email: 'rina.kartika@gmail.com',
			phone: '+62 877 2222 8888',
			address: {
				street: 'Jl. Diponegoro No. 321',
				city: 'Yogyakarta',
				state: 'DI Yogyakarta',
				postalCode: '55123',
				country: 'Indonesia'
			}
		},
		items: [
			{
				productId: 'prod_f6g7h8i9-j0k1-4234-f567-890123456789',
				sku: 'CYB-2077-PC',
				title: 'Cyberpunk 2077 - PC Digital',
				price: 750000,
				quantity: 1,
				total: 750000
			},
			{
				productId: 'prod_g7h8i9j0-k1l2-4345-g678-901234567890',
				sku: 'ROG-STRIX-1TB',
				title: 'ASUS ROG Strix 1TB NVMe SSD',
				price: 1800000,
				quantity: 1,
				total: 1800000
			}
		],
		subtotal: 2550000,
		tax: 280500, // 11% PPN
		shipping: 50000, // Standard shipping
		total: 2880500,
		status: 'delivered',
		paymentMethod: 'Bank Transfer - BCA',
		createdAt: '2024-01-15T16:45:00Z',
		updatedAt: '2024-01-18T12:30:00Z'
	},
	{
		id: '5',
		orderNumber: 'GT-2024-005',
		customer: {
			firstName: 'Dedi',
			lastName: 'Pratama',
			email: 'dedi.pratama@outlook.com',
			phone: '+62 856 4444 1111',
			address: {
				street: 'Jl. Ahmad Yani No. 654',
				city: 'Medan',
				state: 'Sumatera Utara',
				postalCode: '20123',
				country: 'Indonesia'
			}
		},
		items: [
			{
				productId: 'prod_h8i9j0k1-l2m3-4456-h789-012345678901',
				sku: 'SENN-HD800S',
				title: 'Sennheiser HD 800S Gaming Headset',
				price: 4500000,
				quantity: 1,
				total: 4500000
			}
		],
		subtotal: 4500000,
		tax: 495000, // 11% PPN
		shipping: 0, // Free shipping
		total: 4995000,
		status: 'cancelled',
		paymentMethod: 'Bank Transfer - Mandiri',
		createdAt: '2024-01-12T11:30:00Z',
		updatedAt: '2024-01-13T09:15:00Z'
	},
	{
		id: '6',
		orderNumber: 'GT-2024-006',
		customer: {
			firstName: 'Lisa',
			lastName: 'Anggraini',
			email: 'lisa.anggraini@gmail.com',
			phone: '+62 878 9999 3333',
			address: {
				street: 'Jl. Imam Bonjol No. 987',
				city: 'Semarang',
				state: 'Jawa Tengah',
				postalCode: '50123',
				country: 'Indonesia'
			}
		},
		items: [
			{
				productId: 'prod_a1b2c3d4-e5f6-4789-a012-345678901234',
				sku: 'PS5-CONS-STD',
				title: 'PlayStation 5 Console',
				price: 7500000,
				quantity: 1,
				total: 7500000
			},
			{
				productId: 'prod_d4e5f6g7-h8i9-4012-d345-678901234567',
				sku: 'LOGI-G502X',
				title: 'Logitech G502 X Gaming Mouse',
				price: 850000,
				quantity: 1,
				total: 850000
			}
		],
		subtotal: 8350000,
		tax: 918500, // 11% PPN
		shipping: 0, // Free shipping
		total: 9268500,
		status: 'paid',
		paymentMethod: 'Bank Transfer - BNI',
		createdAt: '2024-01-26T09:45:00Z',
		updatedAt: '2024-01-27T14:20:00Z'
	}
]; 