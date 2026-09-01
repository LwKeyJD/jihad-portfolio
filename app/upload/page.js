'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

export default function UploadPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [title, setTitle] = useState('');
  const [segment, setSegment] = useState('reels');
  const [software, setSoftware] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [status, setStatus] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/login');
      } else {
        setChecking(false);
      }
    });
  }, [router]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setStatus('');
    const { error } = await supabase
      .from('clips')
      .insert([{ title, segment, software, video_url: videoUrl }]);
    setSaving(false);
    if (error) {
      setStatus('Error: ' + error.message);
      return;
    }
    setStatus('Saved — check the ' + segment + ' page.');
    setTitle('');
    setSoftware('');
    setVideoUrl('');
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push('/login');
  }

  if (checking) {
    return (
      <main>
        <div className="contact-wrap">
          <p className="mono">checking session…</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="contact-wrap">
        <h2 className="display">Upload a clip</h2>
        <p>Paste the unlisted YouTube/Vimeo link once your export is done. It appears on the site immediately.</p>
        <form onSubmit={handleSubmit}>
          <input
            className="form-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <select
            className="form-select"
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
          >
            <option value="reels">Reels</option>
            <option value="videos">Videos</option>
            <option value="motion">Motion Graphics</option>
          </select>
          <input
            className="form-input"
            placeholder="Software used (e.g. DaVinci Resolve)"
            value={software}
            onChange={(e) => setSoftware(e.target.value)}
            required
          />
          <input
            className="form-input"
            placeholder="YouTube or Vimeo link"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
          />
          <button className="signin-btn" type="submit" disabled={saving}>
            {saving ? 'Saving…' : 'Save clip'}
          </button>
        </form>
        {status && <div className="form-status">{status}</div>}
        <button className="signin-btn" style={{ marginTop: 24 }} onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </main>
  );
}
