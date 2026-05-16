import { error } from '@sveltejs/kit';
import supabase from '$lib/server/db';

export async function load({ params }) {
    const { id } = params;

    const { data: contact, error: dbError } = await supabase
        .from('contacts')
        .select('*')
        .eq('id', id)
        .single();

    if (dbError || !contact) {
        throw error(404, 'Contact not found');
    }

    return {
        contact
    };
}