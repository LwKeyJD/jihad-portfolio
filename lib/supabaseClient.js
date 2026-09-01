import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a real Supabase client only when env vars are present.
// During Vercel build or environments without these vars, export a safe stub
// so module evaluation doesn't throw and pages can render without runtime data.
let supabase;
if (supabaseUrl && supabaseAnonKey) {
	try {
		supabase = createClient(supabaseUrl, supabaseAnonKey);
	} catch (err) {
		console.warn('Supabase client initialization failed, falling back to stub.', err?.message ?? err);
		// fall through to stub creation below
		supabase = null;
	}
}

if (!supabase) {
	// Minimal stub that matches the small surface the app uses.
	// Create a chainable, awaitable query stub so calls like:
	// await supabase.from('clips').select('*').eq('x', y).order('created_at')
	// resolve to an empty result instead of throwing during build.
	const makeQuery = () => {
		const q = {
			eq() { return q; },
			order() { return q; },
			// Promise-like then so `await q` works.
			then(resolve) { resolve({ data: [], error: null }); return { catch() {} }; },
			catch() { return this; },
		};
		return q;
	};

	const noopAsync = async () => ({ data: null, error: null });

	supabase = {
		auth: {
			getSession: async () => ({ data: { session: null } }),
			onAuthStateChange: () => ({ subscription: { unsubscribe() {} } }),
			signInWithPassword: noopAsync,
			signOut: noopAsync,
		},
		from: () => makeQuery(),
		// provide insert/select helpers used elsewhere
		insert: noopAsync,
	};
}

export { supabase };
