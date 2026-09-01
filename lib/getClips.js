import { supabase } from './supabaseClient';

export async function getClipsBySegment(segment) {
  const { data, error } = await supabase
    .from('clips')
    .select('*')
    .eq('segment', segment)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to load clips for', segment, error.message);
    return [];
  }
  return data ?? [];
}
