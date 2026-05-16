import { json } from '@sveltejs/kit';
import supabase from '$lib/server/db';

export async function POST({ request }) {
    const { username, password } = await request.json();

    const { data: existingUser, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .single();

    if (fetchError && fetchError.code !== 'PGRST116') { 
        return json({ success: false, message: 'Database lookup error.' }, { status: 500 });
    }

    if (existingUser) {
        if (existingUser.password === password) {
            return json({ success: true, userId: existingUser.id });
        } else {
            return json({ success: false, message: 'Incorrect password.' });
        }
    }

    const { data: newUser, error: insertError } = await supabase
        .from('users')
        .insert([{ username, password }])
        .select()
        .single();

    if (insertError) {
        return json({ success: false, message: 'Failed to create user account.' }, { status: 500 });
    }

    return json({ success: true, userId: newUser.id });
}