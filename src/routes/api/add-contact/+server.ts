import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function POST({ request }) {
	const { userId, name, phone, email, address, job, notes } = await request.json();

	const statement = db.prepare(`
		INSERT INTO contacts (user_id, name, phone, email, address, job, notes) 
		VALUES (@userId, @name, @phone, @email, @address, @job, @notes)
	`);
	
	statement.run({ userId, name, phone, email, address, job, notes });

	return json({ success: true }, { status: 201 });
}