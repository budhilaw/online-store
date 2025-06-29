<script lang="ts">
	import { toastStore, type Toast } from '$lib/stores/toast';
	import { fly } from 'svelte/transition';

	export let toast: Toast;

	function getToastStyles(type: Toast['type']) {
		switch (type) {
			case 'success':
				return {
					bg: 'bg-green-500/90',
					border: 'border-green-400',
					icon: '✅'
				};
			case 'error':
				return {
					bg: 'bg-red-500/90',
					border: 'border-red-400',
					icon: '❌'
				};
			case 'warning':
				return {
					bg: 'bg-yellow-500/90',
					border: 'border-yellow-400',
					icon: '⚠️'
				};
			case 'info':
				return {
					bg: 'bg-cyan-500/90',
					border: 'border-cyan-400',
					icon: 'ℹ️'
				};
			default:
				return {
					bg: 'bg-gray-500/90',
					border: 'border-gray-400',
					icon: '📢'
				};
		}
	}

	$: styles = getToastStyles(toast.type);
</script>

<div
	class="relative flex items-start p-4 mb-3 rounded-lg backdrop-blur-sm border {styles.bg} {styles.border} shadow-lg"
	transition:fly={{ y: -50, duration: 300 }}
>
	<!-- Icon -->
	<div class="flex-shrink-0 text-xl mr-3">
		{styles.icon}
	</div>

	<!-- Content -->
	<div class="flex-1 min-w-0">
		<h4 class="text-white font-semibold text-sm mb-1">
			{toast.title}
		</h4>
		<p class="text-white/90 text-sm leading-relaxed">
			{toast.message}
		</p>
	</div>

	<!-- Close Button -->
	<button
		on:click={() => toastStore.remove(toast.id)}
		class="flex-shrink-0 ml-3 text-white/70 hover:text-white transition-colors"
		aria-label="Close notification"
	>
		<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
			<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
		</svg>
	</button>
</div> 