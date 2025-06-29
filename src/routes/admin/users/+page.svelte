<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/auth';

	// Check authentication
	onMount(() => {
		if (!$authStore.isAuthenticated) {
			goto('/admin/login');
		}
	});

	// Mock user data - in real app this would come from a database
	const users = [
		{
			id: '1',
			username: 'admin',
			email: 'admin@gametech.com',
			role: 'admin',
			isActive: true,
			createdAt: '2024-01-01T00:00:00Z',
			lastLogin: '2024-01-20T10:30:00Z'
		},
		{
			id: '2',
			username: 'moderator',
			email: 'mod@gametech.com',
			role: 'moderator',
			isActive: true,
			createdAt: '2024-01-15T00:00:00Z',
			lastLogin: '2024-01-19T15:45:00Z'
		}
	];

	let searchQuery = '';
	let selectedRole = '';
	let filteredUsers = [...users];

	// Filter users
	$: {
		filteredUsers = users.filter(user => {
			const matchesSearch = searchQuery === '' || 
				user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
				user.email.toLowerCase().includes(searchQuery.toLowerCase());
			
			const matchesRole = selectedRole === '' || user.role === selectedRole;
			
			return matchesSearch && matchesRole;
		});
	}

	function logout() {
		authStore.logout();
		goto('/admin/login');
	}
</script>

<svelte:head>
	<title>User Management - Admin Dashboard</title>
</svelte:head>

<div class="min-h-screen bg-gray-900">
	<!-- Header -->
	<header class="bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center space-x-4">
					<a href="/admin" class="text-gray-400 hover:text-cyan-400 transition-colors">
						← Dashboard
					</a>
					<h1 class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
						User Management
					</h1>
				</div>
				<div class="flex items-center space-x-4">
					<a href="/" class="text-gray-400 hover:text-cyan-400 transition-colors">
						← Back to Store
					</a>
					<button 
						on:click={logout}
						class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	</header>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<!-- Page Header -->
		<div class="flex justify-between items-center mb-8">
			<div>
				<h2 class="text-3xl font-bold text-white">Users</h2>
				<p class="text-gray-400">Manage user accounts and permissions</p>
			</div>
			<button class="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all">
				Add New User
			</button>
		</div>

		<!-- Filters -->
		<div class="bg-black/40 rounded-2xl p-6 border border-gray-800 mb-8">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div class="md:col-span-2">
					<label class="block text-sm font-medium text-gray-300 mb-2">Search Users</label>
					<input
						type="text"
						placeholder="Search by username or email..."
						bind:value={searchQuery}
						class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-300 mb-2">Role</label>
					<select
						bind:value={selectedRole}
						class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
					>
						<option value="">All Roles</option>
						<option value="admin">Admin</option>
						<option value="moderator">Moderator</option>
						<option value="user">User</option>
					</select>
				</div>
			</div>
		</div>

		<!-- Users Table -->
		<div class="bg-black/40 rounded-2xl border border-gray-800 overflow-hidden">
			<div class="px-6 py-4 border-b border-gray-800">
				<h3 class="text-lg font-medium text-white">
					Users ({filteredUsers.length})
				</h3>
			</div>
			
			<div class="overflow-x-auto">
				<table class="w-full">
					<thead class="bg-gray-800/50">
						<tr>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Created</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Login</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
							<th class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-800">
						{#each filteredUsers as user}
							<tr class="hover:bg-gray-800/30 transition-colors">
								<td class="px-6 py-4">
									<div class="flex items-center">
										<div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
											<span class="text-white font-bold text-lg">{user.username.charAt(0).toUpperCase()}</span>
										</div>
										<div>
											<p class="text-white font-medium">{user.username}</p>
											<p class="text-gray-400 text-sm">{user.email}</p>
										</div>
									</div>
								</td>
								<td class="px-6 py-4">
									<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
										{user.role === 'admin' ? 'bg-red-500/20 text-red-400' : 
										 user.role === 'moderator' ? 'bg-yellow-500/20 text-yellow-400' : 
										 'bg-blue-500/20 text-blue-400'}">
										{user.role.charAt(0).toUpperCase() + user.role.slice(1)}
									</span>
								</td>
								<td class="px-6 py-4">
									<p class="text-white">{new Date(user.createdAt).toLocaleDateString('id-ID')}</p>
								</td>
								<td class="px-6 py-4">
									<p class="text-white">{new Date(user.lastLogin).toLocaleDateString('id-ID')}</p>
									<p class="text-gray-400 text-sm">{new Date(user.lastLogin).toLocaleTimeString('id-ID')}</p>
								</td>
								<td class="px-6 py-4">
									<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
										{user.isActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}">
										{user.isActive ? 'Active' : 'Inactive'}
									</span>
								</td>
								<td class="px-6 py-4">
									<div class="flex space-x-2">
										<button class="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Edit</button>
										<button class="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
											{user.isActive ? 'Deactivate' : 'Activate'}
										</button>
										{#if user.role !== 'admin'}
											<button class="text-red-400 hover:text-red-300 text-sm font-medium">Delete</button>
										{/if}
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div> 