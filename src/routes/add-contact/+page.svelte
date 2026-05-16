<script lang="ts">
    import { goto } from '$app/navigation';

	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let address = $state('');
	let job = $state('');
	let notes = $state('');

	async function save_contact() {
		const userId = localStorage.getItem('userId');

		const response = await fetch('/api/add-contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ 
				userId, 
				name, 
				phone,
				email,
				address, 
				job,
				notes
			})
		});
		
		await response.json();
		goto('/');
	}
</script>

<div class="app-container">
	<main>
		<h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem;">New Contact</h2>
		
		<div style="display: flex; flex-direction: column; gap: 1rem; background: var(--panel-bg); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 4px;">
			<div class="form-group">
				<label for="name">Name</label>
				<input id="name" bind:value={name} class="form-input" />
			</div>
			
			<div class="form-group">
				<label for="phone">Phone Number</label>
				<input id="phone" bind:value={phone} class="form-input" />
			</div>
			
			<div class="form-group">
				<label for="email">Email Address</label>
				<input id="email" bind:value={email} type="email" class="form-input" />
			</div>
			
			<div class="form-group">
				<label for="address">Postal Address</label>
				<input id="address" bind:value={address} class="form-input" />
			</div>
			
			<div class="form-group">
				<label for="job">Job Title</label>
				<input id="job" bind:value={job} class="form-input" />
			</div>
			
			<div class="form-group">
				<label for="notes">Personal Notes</label>
				<textarea id="notes" bind:value={notes} class="form-input" rows="4"></textarea>
			</div>

			<div style="margin-top: 1rem; display: flex; gap: 1.5rem; align-items: center;">
				<button onclick={save_contact} class="btn-primary">Save Contact</button>
				<a href="/" class="btn-text">Cancel</a>
			</div>
		</div>
	</main>
</div>