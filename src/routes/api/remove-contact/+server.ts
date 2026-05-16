import { json } from '@sveltejs/kit';
import supabase from '$lib/server/db';

export async function POST({ request }) {
    const { id } = await request.json();

    const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id);

    if (error) {
        return json({ success: false, message: error.message }, { status: 500 });
    }

    return json({ success: true });
}