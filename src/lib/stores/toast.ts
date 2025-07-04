import { writable } from 'svelte/store';

export interface Toast {
	id: string;
	type: 'success' | 'error' | 'warning' | 'info';
	title: string;
	message: string;
	duration?: number;
}

function createToastStore() {
	const { subscribe, update } = writable<Toast[]>([]);

	const store = {
		subscribe,
		add: (toast: Omit<Toast, 'id'>) => {
			const id = Math.random().toString(36).substr(2, 9);
			const newToast: Toast = {
				...toast,
				id,
				duration: toast.duration || 4000
			};

			update(toasts => [...toasts, newToast]);

			// Auto remove after duration
			setTimeout(() => {
				update(toasts => toasts.filter(t => t.id !== id));
			}, newToast.duration);

			return id;
		},
		remove: (id: string) => {
			update(toasts => toasts.filter(t => t.id !== id));
		},
		clear: () => {
			update(() => []);
		}
	};

	// Add convenience methods
	return {
		...store,
		success: (title: string, message: string, duration?: number) => {
			return store.add({ type: 'success', title, message, duration });
		},
		error: (title: string, message: string, duration?: number) => {
			return store.add({ type: 'error', title, message, duration });
		},
		warning: (title: string, message: string, duration?: number) => {
			return store.add({ type: 'warning', title, message, duration });
		},
		info: (title: string, message: string, duration?: number) => {
			return store.add({ type: 'info', title, message, duration });
		}
	};
}

export const toastStore = createToastStore(); 