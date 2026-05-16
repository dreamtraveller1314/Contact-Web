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

<div class="auth-container">
	<main class="card-panel">
		<h2 class="panel-title">Sign In / Sign Up</h2>
		<p class="panel-subtitle">
			Log in or create an account.
		</p>
		
		{#if errorMessage}
			<p class="alert-danger">
				{errorMessage}
			</p>
		{/if}

		<div class="stack-gap">
			<div class="form-group" style="margin-bottom: 0;">
				<label for="username">Username</label>
				<input id="username" bind:value={username} class="form-input" />
			</div>
			
			<div class="form-group" style="margin-bottom: 0;">
				<label for="password">Password</label>
				<input id="password" bind:value={password} type="password" class="form-input" />
			</div>
		</div>

		<div>
			<button onclick={handleLogin} class="btn-primary w-full">
				Continue
			</button>
		</div>
	</main>
</div>