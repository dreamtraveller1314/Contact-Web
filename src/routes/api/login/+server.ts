import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function POST({ request }) {
	const { username, password } = await request.json();

	if (!username || !password) {
		return json({ success: false, message: 'Missing fields' }, { status: 400 });
	}
	const user = db.prepare('SELECT * FROM users WHERE username = @username').get({ username }) as any;

	if (!user) {
		const insert = db.prepare('INSERT INTO users (username, password) VALUES (@username, @password)');
		const result = insert.run({ username, password });
		
		return json({ success: true, userId: result.lastInsertRowid });
	} {
		if (user.password === password) {
			return json({ success: true, userId: user.id });
		} else {
			return json({ success: false, message: 'Incorrect password!' }, { status: 401 });
		}
	}
}