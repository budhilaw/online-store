import { products } from '$lib/data/products';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	// Generate entries for all active products
	return products
		.filter(product => product.isActive)
		.map(product => ({
			slug: product.slug
		}));
};

export const prerender = true; 