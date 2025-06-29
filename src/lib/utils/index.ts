import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge CSS classes
 */
export function cn(...inputs: ClassValue[]) {
	return clsx(inputs);
}

/**
 * Format a number as Indonesian Rupiah currency
 */
export function formatPrice(price: number): string {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(price);
}

/**
 * Calculate total with Indonesian tax rate (11% PPN)
 */
export function calculateTax(subtotal: number): number {
	return Math.round(subtotal * 0.11);
}

/**
 * Calculate shipping cost in IDR
 */
export function calculateShipping(subtotal: number): number {
	// Free shipping for orders over Rp 1,000,000
	if (subtotal >= 1000000) return 0;
	return 50000; // Standard shipping Rp 50,000
}

/**
 * Format date to readable string (Indonesian locale)
 */
export function formatDate(date: string | Date): string {
	const d = typeof date === 'string' ? new Date(date) : date;
	return new Intl.DateTimeFormat('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(d);
}

/**
 * Format date to short string
 */
export function formatDateShort(date: string | Date): string {
	const d = typeof date === 'string' ? new Date(date) : date;
	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	}).format(d);
}

/**
 * Generate unique ID
 */
export function generateId(): string {
	return Math.random().toString(36).substr(2, 9);
}

/**
 * Generate SKU from product title
 */
export function generateSku(title: string): string {
	return title
		.toUpperCase()
		.replace(/[^A-Z0-9]/g, '')
		.substring(0, 8) + Math.random().toString(36).substr(2, 4).toUpperCase();
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

/**
 * Validate Indonesian phone number
 */
export function isValidPhoneNumber(phone: string): boolean {
	// Indonesian phone number format: +62, 08, or 62
	const phoneRegex = /^(\+62|62|08)[0-9]{8,12}$/;
	return phoneRegex.test(phone.replace(/[\s-]/g, ''));
}

/**
 * Format Indonesian phone number
 */
export function formatPhoneNumber(phone: string): string {
	const cleaned = phone.replace(/[\s-]/g, '');
	if (cleaned.startsWith('08')) {
		return '+62' + cleaned.substring(1);
	}
	if (cleaned.startsWith('62')) {
		return '+' + cleaned;
	}
	if (cleaned.startsWith('+62')) {
		return cleaned;
	}
	return phone;
}

/**
 * Generate order number
 */
export function generateOrderNumber(): string {
	const date = new Date();
	const year = date.getFullYear().toString().slice(-2);
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
	return `GT${year}${month}${day}${random}`;
}

/**
 * Slugify text for URLs
 */
export function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
	if (text.length <= length) return text;
	return text.substring(0, length).trimEnd() + '...';
}



/**
 * Format date and time for Indonesian locale
 */
export function formatDateTime(date: string | Date): string {
	const d = typeof date === 'string' ? new Date(date) : date;
	return d.toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});
}

/**
 * Calculate percentage
 */
export function calculatePercentage(value: number, total: number): number {
	return total === 0 ? 0 : Math.round((value / total) * 100);
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number
): (...args: Parameters<T>) => void {
	let timeout: number;
	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
}

/**
 * Check if object is empty
 */
export function isEmpty(obj: any): boolean {
	return obj === null || obj === undefined || Object.keys(obj).length === 0;
}

/**
 * Deep clone object
 */
export function deepClone<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj));
} 