import { json } from '@sveltejs/kit';
import supabase from '$lib/server/db';

export async function POST({ request }) {
    const { userId } = await request.json();

    const { data: contacts, error } = await supabase
        .from('contacts')
        .select('*')
        .eq('user_id', userId)
        .order('name', { ascending: true });

    if (error) {
        return json({ success: false, contacts: [] }, { status: 500 });
    }

    return json({ success: true, contacts });
}