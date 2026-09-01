import { getClipsBySegment } from '../../lib/getClips';
import ClipGrid from '../../components/ClipGrid';

export default async function ReelsPage() {
  const clips = await getClipsBySegment('reels');
  return (
    <main>
      <div className="bin-head">
        <h2 className="display">Reels</h2>
        <p>Short-form cuts built for retention — hooks, pacing, and sound design tuned for the first three seconds.</p>
      </div>
      <div className="section-pad">
        <ClipGrid clips={clips} />
      </div>
    </main>
  );
}
