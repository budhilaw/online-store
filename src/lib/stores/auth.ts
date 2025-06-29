import { writable } from 'svelte/store';
import type { AuthState, User } from '$lib/types';
import { browser } from '$app/environment';

const createAuthStore = () => {
	const { subscribe, set, update } = writable<AuthState>({
		isAuthenticated: false,
		user: null,
		token: null
	});

	return {
		subscribe,
		/**
		 * Login user with credentials
		 */
		login: async (username: string, password: string): Promise<boolean> => {
			// Simulate API call - In real app, this would be an API request
			// For demo, we have hardcoded admin credentials
			if (username === 'admin' && password === 'admin123') {
				const user: User = {
					id: '1',
					username: 'admin',
					email: 'admin@store.com',
					password: '', // Never store actual password
					role: 'admin',
					isActive: true,
					createdAt: new Date().toISOString(),
					lastLogin: new Date().toISOString()
				};

				const authState: AuthState = {
					isAuthenticated: true,
					user,
					token: 'demo-token-123'
				};

				set(authState);

				// Store in localStorage for persistence
				if (browser) {
					localStorage.setItem('auth', JSON.stringify(authState));
				}

				return true;
			}

			return false;
		},

		/**
		 * Logout user
		 */
		logout: () => {
			set({
				isAuthenticated: false,
				user: null,
				token: null
			});

			if (browser) {
				localStorage.removeItem('auth');
			}
		},

		/**
		 * Initialize auth state from localStorage
		 */
		init: () => {
			if (browser) {
				const stored = localStorage.getItem('auth');
				if (stored) {
					try {
						const authState = JSON.parse(stored);
						set(authState);
					} catch (error) {
						console.error('Error parsing stored auth:', error);
						localStorage.removeItem('auth');
					}
				}
			}
		},

		/**
		 * Check if user has required role
		 */
		hasRole: (role: User['role']): boolean => {
			let hasRequiredRole = false;
			update((state) => {
				hasRequiredRole = state.user?.role === role || false;
				return state;
			});
			return hasRequiredRole;
		}
	};
};

export const authStore = createAuthStore(); 