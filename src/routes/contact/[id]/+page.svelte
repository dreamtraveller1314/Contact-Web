<script lang="ts">
    let { data } = $props();
</script>

<div class="app-container">
    <main>
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem;">Contact Profile</h2>
        
        {#if data && data.contact}
            <div style="display: flex; flex-direction: column; gap: 1.25rem; background: var(--panel-bg); border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 4px; margin-bottom: 2rem;">
                <div>
                    <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">Full Name</span>
                    <p style="margin: 0.2rem 0 0 0; font-weight: 600; font-size: 1.1rem;">{data.contact.name || '---'}</p>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">Phone</span>
                        <p style="margin: 0.2rem 0 0 0;">{data.contact.phone || '---'}</p>
                    </div>
                    <div>
                        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">Email</span>
                        <p style="margin: 0.2rem 0 0 0;">{data.contact.email || '---'}</p>
                    </div>
                </div>

                <div>
                    <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">Occupation</span>
                    <p style="margin: 0.2rem 0 0 0;">{data.contact.job || '---'}</p>
                </div>

                <div>
                    <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">Address</span>
                    <p style="margin: 0.2rem 0 0 0; font-size: 0.95rem; line-height: 1.4;">{data.contact.address || '---'}</p>
                </div>
                
                <div style="border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: 0.5rem;">
                    <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">Notes</span>
                    <p style="white-space: pre-wrap; margin: 0.4rem 0 0 0; font-size: 0.9rem; color: #333; background: #f9f9f9; padding: 0.75rem; border-radius: 4px; border: 1px solid var(--border-color);">{data.contact.notes || 'No notes available.'}</p>
                </div>
            </div>
        {:else}
            <p style="color: var(--danger-color); font-size: 0.9rem; margin-bottom: 2rem;">Unable to process this contact link details.</p>
        {/if}

        <div>
            <a href="/" class="btn-text" style="padding-left: 0;">← Back to list</a>
        </div>
    </main>
</div>