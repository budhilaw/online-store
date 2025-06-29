// User types
export interface User {
	id: string;
	username: string;
	email: string;
	password: string; // hashed
	role: 'admin' | 'finance' | 'sales' | 'cs';
	isActive: boolean;
	createdAt: string;
	lastLogin: string;
}

// Product types
export interface ProductImage {
	featured: string;
	thumbnails: string[];
}

export interface ProductInventory {
	stock: number;
	lowStockThreshold: number;
	trackQuantity: boolean;
}

export interface ProductSeo {
	metaTitle: string;
	metaDescription: string;
}

export interface Product {
	id: string;
	sku: string;
	slug: string;
	title: string;
	description: string;
	price: number;
	compareAtPrice?: number;
	category: string;
	tags: string[];
	images: ProductImage;
	inventory: ProductInventory;
	seo: ProductSeo;
	isActive: boolean;
	createdAt: string;
	updatedAt: string;
}

// Address types
export interface Address {
	street: string;
	city: string;
	state: string;
	postalCode: string;
	country: string;
}

// Order types
export interface OrderCustomer {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	address: Address;
}

export interface OrderItem {
	productId: string;
	sku: string;
	title: string;
	price: number;
	quantity: number;
	total: number;
}

export interface Order {
	id: string;
	orderNumber: string;
	customer: OrderCustomer;
	items: OrderItem[];
	subtotal: number;
	tax: number;
	shipping: number;
	total: number;
	status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
	paymentMethod: string;
	createdAt: string;
	updatedAt: string;
}

// Category types
export interface Category {
	id: string;
	name: string;
	slug: string;
	description: string;
	image: string;
	isActive: boolean;
}

// Cart types
export interface CartItem {
	productId: string;
	sku: string;
	title: string;
	price: number;
	quantity: number;
	image: string;
}

export interface Cart {
	items: CartItem[];
	subtotal: number;
	tax: number;
	shipping: number;
	total: number;
}

// Auth types
export interface AuthState {
	isAuthenticated: boolean;
	user: User | null;
	token: string | null;
}

// UI types
export interface Notification {
	id: string;
	type: 'success' | 'error' | 'warning' | 'info';
	title: string;
	message: string;
	duration?: number;
}

export interface TableColumn {
	key: string;
	label: string;
	sortable?: boolean;
	width?: string;
}

export interface FilterOption {
	label: string;
	value: string;
	count?: number;
} 