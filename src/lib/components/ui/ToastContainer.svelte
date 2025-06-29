<script lang="ts">
	import { toastStore } from '$lib/stores/toast';
	import Toast from './Toast.svelte';
</script>

<!-- Toast Container -->
{#if $toastStore.length > 0}
	<div class="fixed top-4 right-4 z-50 max-w-sm w-full space-y-2">
		{#each $toastStore as toast (toast.id)}
			<Toast {toast} />
		{/each}
	</div>
{/if} 