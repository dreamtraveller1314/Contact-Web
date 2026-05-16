import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function POST({ request }) {
	// Extract userId along with contact info
	const { userId, name, address, phone } = await request.json();

	const statement = db.prepare(
		'INSERT INTO contacts (user_id, name, address, phone) VALUES (@userId, @name, @address, @phone)'
	);
	statement.run({ userId, name, address, phone });

	return json({ success: true }, { status: 201 });
}