<script lang="ts">
	import '../app.css';
import ToastContainer from '$lib/components/ui/ToastContainer.svelte';

	let { children } = $props();
</script>

{@render children()}

<!-- Toast Notifications -->
<ToastContainer />
