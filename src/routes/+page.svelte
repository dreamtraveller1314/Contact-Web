<script lang="ts">
    import { onMount } from 'svelte';

    type Contact = {
        name: string;
        address: string;
        phone: string;
    };

    let contacts: Contact[] = $state([]);
    
    async function read_contacts() {
        console.log('Reading contacts from database...');
        const response = await fetch('/api/read-contacts', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await response.json();
        return result.contacts;
    }

    async function remove_contact(name: string, address: string, phone: string) {
        const response = await fetch('/api/remove-contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, address, phone })
        });
        const result = await response.json();
        contacts = await read_contacts();
    }

    onMount(async () => {
        contacts = await read_contacts();
    });
</script>

<main class="white-block">
	<h1>My Contact Book</h1>

	{#each contacts as contact}
		<div class="contact-element hover:scale-105 transition-transform" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; padding: 0.5rem; border: 1px solid #ccc;">
			<div>
				<p><strong>{contact.name}</strong></p>
				<p>{contact.address}</p>
			</div>
			<div style="text-align: right; display: flex; align-items: center; gap: 1rem;">
				<p>{contact.phone}</p>
                <button onclick={() => remove_contact(contact.name, contact.address, contact.phone)} style="background: none; border: none; cursor: pointer; font-size: 1.2rem;">
                    🗑️
                </button>
			</div>
		</div>
	{:else}
		<p style="text-align: center;">Your contact book is empty!</p>
	{/each}

	<div style="text-align: center; margin-top: 1rem;">
		<a href="/add-contact" class="button-style"> Add contact </a>
	</div>
</main>