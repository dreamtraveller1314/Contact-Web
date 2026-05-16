import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function POST({ request }) {
	const { id } = await request.json();

	const statement = db.prepare('DELETE FROM contacts WHERE id = ?');
	statement.run(id);

	return json({ success: true });
}