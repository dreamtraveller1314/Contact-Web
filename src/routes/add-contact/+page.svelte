<script lang="ts">
	let name: string = '';
	let address: string = '';
	let phone: string = '';

	function save_contact() {
		console.log("Button clicked!");
		console.log("Name:", name);
		console.log("Address:", address);
		console.log("Phone:", phone);
	}
</script>

<main class="white-block">
	<h2>Add New Contact</h2>
	
	<div class="contact-save" style="display: flex; flex-direction: column; gap: 0.5rem;">
		<input bind:value={name} placeholder="Name" class="text-input" />
		<input bind:value={address} placeholder="Address" class="text-input" />
		<input bind:value={phone} placeholder="Phone number" class="text-input" />
	</div>
	
	<div style="text-align: center; margin-top: 1rem;">
		<button onclick={save_contact} class="button-style"> Save </button>
	</div>
	
	<div style="text-align: center; margin-top: 1rem;">
		<a href="/" style="color: gray; text-decoration: none;">← Back to Home</a>
	</div>
</main>