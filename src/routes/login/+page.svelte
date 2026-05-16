<script lang="ts">
	import { goto } from '$app/navigation';

	let username = $state('');
	let password = $state('');
	let errorMessage = $state('');

	async function handleLogin() {
		errorMessage = '';

		const response = await fetch('/api/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password })
		});

		const result = await response.json();

		if (result.success) {
			localStorage.setItem('userId', result.userId);
			localStorage.setItem('username', username);
			goto('/');
		} else {
			errorMessage = result.message;
		}
	}
</script>

<main class="white-block" style="max-width: 400px; margin: 2rem auto;">
	<h2>Login / Register</h2>
	
	{#if errorMessage}
		<p style="color: red;">{errorMessage}</p>
	{/if}

	<div style="display: flex; flex-direction: column; gap: 0.5rem;">
		<input bind:value={username} placeholder="Username" class="text-input" />
		<input bind:value={password} type="password" placeholder="Password" class="text-input" />
	</div>

	<div style="text-align: center; margin-top: 1rem;">
		<button onclick={handleLogin} class="button-style">Sign In / Sign Up</button>
	</div>
</main>