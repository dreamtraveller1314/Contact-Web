<script lang="ts">
    let { data } = $props();
</script>

<main class="white-block">
    <h2>Contact Details</h2>
    
    {#if data && data.contact}
        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
            <p><strong>Name:</strong> {data.contact.name || '---'}</p>
            <p><strong>Phone:</strong> {data.contact.phone || '---'}</p>
            <p><strong>Email:</strong> {data.contact.email || '---'}</p>
            <p><strong>Address:</strong> {data.contact.address || '---'}</p>
            <p><strong>Job Title:</strong> {data.contact.job || '---'}</p>
            
            <div style="border-top: 1px solid #ccc; padding-top: 0.5rem; margin-top: 0.5rem;">
                <strong>Notes:</strong>
                <p style="white-space: pre-wrap; background: #fafafa; padding: 0.5rem; border-radius: 4px; border: 1px solid #eee;">{data.contact.notes || 'No notes added.'}</p>
            </div>
        </div>
    {:else}
        <p style="color: red; text-align: center; margin-bottom: 1.5rem;">Could not load contact information or record is missing.</p>
    {/if}

    <div style="text-align: center;">
        <a href="/" class="button-style" style="text-decoration: none;">← Back to List</a>
    </div>
</main>