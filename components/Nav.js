'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const links = [
  { href: '/', label: 'home' },
  { href: '/reels', label: 'reels' },
  { href: '/videos', label: 'videos' },
  { href: '/motion', label: 'motion graphics' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSignedIn(!!session));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedIn(!!session);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <header>
      <div className="scrub-top">
        <div className="brand">
          <div className="name display">Foyshal Hossain Jihad</div>
          <div className="role">video editor — dhaka, bangladesh</div>
        </div>
        <nav>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="header-right">
          <Link href={signedIn ? '/upload' : '/login'} className="signin-btn">
            {signedIn ? 'Upload' : 'Sign in'}
          </Link>
        </div>
      </div>
      <div className="scrubber"><div className="playhead"></div></div>
    </header>
  );
}
