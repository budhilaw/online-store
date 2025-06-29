import { authStore } from '$lib/stores/auth';

// Initialize auth store
authStore.init();

export const prerender = true;
export const ssr = false; 