import { supabase } from './supabaseClient';

export async function getClipsBySegment(segment) {
  try {
    const { data, error } = await supabase
      .from('clips')
      .select('*')
      .eq('segment', segment)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Failed to load clips for', segment, error?.message ?? error);
      return [];
    }
    return data ?? [];
  } catch (err) {
    // Handle thrown errors (e.g., network/fetch failures) gracefully during build/runtime
    console.error('Failed to load clips for', segment, err?.message ?? err);
    return [];
  }
}
