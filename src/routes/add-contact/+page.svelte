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

<main class="white-block">
	<h2>Add New Contact</h2>
	<div class="contact-save" style="display: flex; flex-direction: column; gap: 0.5rem;">
		<input bind:value={name} placeholder="Name" class="text-input" />
		<input bind:value={phone} placeholder="Phone number" class="text-input" />
		<input bind:value={email} placeholder="Email" class="text-input" />
		<input bind:value={address} placeholder="Address" class="text-input" />
		<input bind:value={job} placeholder="Job Title" class="text-input" />
		<textarea bind:value={notes} placeholder="Notes" class="text-input" rows="4"></textarea>
	</div>
	
	<div style="text-align: center; margin-top: 1rem;">
		<button onclick={save_contact} class="button-style"> Save </button>
	</div>

	<div style="text-align: center; margin-top: 1rem;">
		<a href="/" style="color: gray; text-decoration: none;">← Back to Home</a>
	</div>
</main>