import { writable } from 'svelte/store';
import type { Cart, CartItem } from '$lib/types';
import { calculateTax, calculateShipping } from '$lib/utils';

// Initialize empty cart
const initialCart: Cart = {
	items: [],
	subtotal: 0,
	tax: 0,
	shipping: 0,
	total: 0
};

// Create the cart store
function createCartStore() {
	const { subscribe, set, update } = writable<Cart>(initialCart);

	return {
		subscribe,
		
		// Initialize cart from localStorage
		init: () => {
			if (typeof window !== 'undefined') {
				const stored = localStorage.getItem('gametech-cart');
				if (stored) {
					try {
						const cart = JSON.parse(stored);
						set(cart);
					} catch (e) {
						console.error('Error parsing cart from localStorage:', e);
						set(initialCart);
					}
				}
			}
		},

		// Add item to cart
		addItem: (item: Omit<CartItem, 'quantity'>) => {
			update(cart => {
				const existingItem = cart.items.find(i => i.productId === item.productId);
				
				if (existingItem) {
					existingItem.quantity += 1;
				} else {
					cart.items.push({ ...item, quantity: 1 });
				}

				const updatedCart = recalculateCart(cart);
				saveToLocalStorage(updatedCart);
				return updatedCart;
			});
		},

		// Remove item from cart
		removeItem: (productId: string) => {
			update(cart => {
				cart.items = cart.items.filter(item => item.productId !== productId);
				const updatedCart = recalculateCart(cart);
				saveToLocalStorage(updatedCart);
				return updatedCart;
			});
		},

		// Update item quantity
		updateQuantity: (productId: string, quantity: number) => {
			update(cart => {
				if (quantity <= 0) {
					cart.items = cart.items.filter(item => item.productId !== productId);
				} else {
					const item = cart.items.find(i => i.productId === productId);
					if (item) {
						item.quantity = quantity;
					}
				}

				const updatedCart = recalculateCart(cart);
				saveToLocalStorage(updatedCart);
				return updatedCart;
			});
		},

		// Clear entire cart
		clear: () => {
			set(initialCart);
			if (typeof window !== 'undefined') {
				localStorage.removeItem('gametech-cart');
			}
		},

		// Get item count
		getItemCount: (cart: Cart) => {
			return cart.items.reduce((total, item) => total + item.quantity, 0);
		}
	};
}

// Recalculate cart totals
function recalculateCart(cart: Cart): Cart {
	const subtotal = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
	const tax = calculateTax(subtotal);
	const shipping = calculateShipping(subtotal);
	const total = subtotal + tax + shipping;

	return {
		...cart,
		subtotal,
		tax,
		shipping,
		total
	};
}

// Save cart to localStorage
function saveToLocalStorage(cart: Cart) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('gametech-cart', JSON.stringify(cart));
	}
}

export const cartStore = createCartStore(); 