import { getClipsBySegment } from '../../lib/getClips';
import ClipGrid from '../../components/ClipGrid';

export default async function MotionPage() {
  const clips = await getClipsBySegment('motion');
  return (
    <main>
      <div className="bin-head">
        <h2 className="display">Motion Graphics</h2>
        <p>Titles, logo reveals, and animated graphics that give a video its finished, professional layer.</p>
      </div>
      <div className="section-pad">
        <ClipGrid clips={clips} />
      </div>
    </main>
  );
}
