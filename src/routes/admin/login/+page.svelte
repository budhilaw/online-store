<script lang="ts">
	import { authStore } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';
	let error = '';
	let loading = false;

	async function handleLogin() {
		if (!username || !password) {
			error = 'Please enter both username and password';
			return;
		}

		loading = true;
		error = '';

		try {
			const success = await authStore.login(username, password);
			if (success) {
				goto('/admin');
			} else {
				error = 'Invalid credentials. Try admin/admin123';
			}
		} catch (err) {
			error = 'Login failed. Please try again.';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Admin Login - Online Store</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
			Sign in to your admin account
		</h2>
		<p class="mt-2 text-center text-sm text-gray-600">
			Demo credentials: <span class="font-medium">admin / admin123</span>
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form on:submit|preventDefault={handleLogin} class="space-y-6">
				<div>
					<label for="username" class="block text-sm font-medium text-gray-700">Username</label>
					<div class="mt-1">
						<input
							id="username"
							name="username"
							type="text"
							required
							bind:value={username}
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter your username"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
					<div class="mt-1">
						<input
							id="password"
							name="password"
							type="password"
							required
							bind:value={password}
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter your password"
						/>
					</div>
				</div>

				{#if error}
					<div class="bg-red-50 border border-red-200 rounded-md p-4">
						<p class="text-sm text-red-600">{error}</p>
					</div>
				{/if}

				<div>
					<button
						type="submit"
						disabled={loading}
						class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{loading ? 'Signing in...' : 'Sign in'}
					</button>
				</div>
			</form>

			<div class="mt-6">
									<div class="relative">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full border-t border-gray-300"></div>
						</div>
					<div class="relative flex justify-center text-sm">
						<span class="px-2 bg-white text-gray-500">Demo Information</span>
					</div>
				</div>

				<div class="mt-4 text-sm text-gray-600">
					<p>This is a demo admin panel. Use the following credentials:</p>
					<ul class="mt-2 space-y-1">
						<li><strong>Username:</strong> admin</li>
						<li><strong>Password:</strong> admin123</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div> 