import { json } from '@sveltejs/kit';
import supabase from '$lib/server/db';

export async function POST({ request }) {
    const { userId, name, phone, email, address, job, notes } = await request.json();

    const { error } = await supabase
        .from('contacts')
        .insert([
            { user_id: parseInt(userId), name, phone, email, address, job, notes }
        ]);

    if (error) {
        return json({ success: false, message: error.message }, { status: 500 });
    }

    return json({ success: true });
}