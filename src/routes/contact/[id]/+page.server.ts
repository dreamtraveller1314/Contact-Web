import db from '$lib/server/db';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const contactId = params.id;

    const contact = db.prepare('SELECT * FROM contacts WHERE id = ?').get(contactId) as any;

    if (!contact) {
        throw error(404, 'Contact not found');
    }

    return { contact };
}