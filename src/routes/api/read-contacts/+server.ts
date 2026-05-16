import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function GET() {
    const contacts = db.prepare('SELECT * FROM contacts').all();
    
    return json({ contacts });
}