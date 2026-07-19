import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from './cloud-config.js';

const client = window.supabase?.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
const withoutPhotos = state => ({ ...state, photos: [] });

export const cloudAvailable = () => Boolean(client);
export const currentUser = async () => (await client?.auth.getUser())?.data?.user || null;
export const signInWithEmail = email => client.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.origin + window.location.pathname } });
export const signOut = () => client.auth.signOut();
export async function uploadState(state) { const user = await currentUser(); if (!user) throw new Error('Sign in first to back up your progress.'); const updatedAt = new Date().toISOString(); const { error } = await client.from('fitness_states').upsert({ user_id: user.id, state: withoutPhotos(state), updated_at: updatedAt }); if (error) throw error; return updatedAt; }
export async function downloadState() { const user = await currentUser(); if (!user) throw new Error('Sign in first to restore your progress.'); const { data, error } = await client.from('fitness_states').select('state, updated_at').eq('user_id', user.id).maybeSingle(); if (error) throw error; return data; }
