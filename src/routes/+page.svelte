<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    type Contact = {
        id: number;
        name: string;
        phone: string;
    };

    let contacts: Contact[] = $state([]);
    let currentUsername = $state('');

    async function read_contacts(userId: string) {
        const response = await fetch('/api/read-contacts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId })
        });
        const result = await response.json();
        return result.contacts || [];
    }

    async function remove_contact(id: number) {
        const response = await fetch('/api/remove-contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });
        
        const savedUserId = localStorage.getItem('userId');
        if (savedUserId) {
            contacts = await read_contacts(savedUserId);
        }
    }

    function handleLogout() {
        localStorage.clear();
        goto('/login');
    }

    onMount(async () => {
        const savedUserId = localStorage.getItem('userId');
        currentUsername = localStorage.getItem('username') || '';

        if (!savedUserId) {
            goto('/login');
        } else {
            contacts = await read_contacts(savedUserId);
        }
    });
</script>

<div class="app-container">
	<header class="navbar">
		<span>Logged in as: <strong>{currentUsername}</strong></span>
		<button onclick={handleLogout} class="btn-text">Logout</button>
	</header>

	<main>
		<h1 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem;">Contacts</h1>

		{#each contacts as contact}
			<div class="contact-row">
				<div onclick={() => goto(`/contact/${contact.id}`)} role="presentation" class="clickable-area">
					<p class="contact-name">{contact.name}</p>
					<p class="contact-meta">{contact.phone}</p>
				</div>
				<div>
					<button onclick={(e) => { e.stopPropagation(); remove_contact(contact.id); }} class="btn-trash" title="Delete Contact">
						🗑️
					</button>
				</div>
			</div>
		{:else}
			<p style="text-align: center; color: var(--text-muted); padding: 2rem 0; font-size: 0.9rem;">Your contact book is empty.</p>
		{/each}

		<div style="margin-top: 2rem; text-align: left;">
			<a href="/add-contact" class="btn-primary">Add Contact</a>
		</div>
	</main>
</div>