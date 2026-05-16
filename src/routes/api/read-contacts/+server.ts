import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function POST({ request }) {
	const { userId } = await request.json();

	if (!userId) {
		return json({ contacts: [] });
	}

	const contacts = db.prepare('SELECT * FROM contacts WHERE user_id = @userId').all({ userId });
    
	return json({ contacts: contacts || [] });
}