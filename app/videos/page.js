import { getClipsBySegment } from '../../lib/getClips';
import ClipGrid from '../../components/ClipGrid';

export default async function VideosPage() {
  const clips = await getClipsBySegment('videos');
  return (
    <main>
      <div className="bin-head">
        <h2 className="display">Videos</h2>
        <p>Long-form work — documentaries, wedding films, and brand videos where story structure carries the edit.</p>
      </div>
      <div className="section-pad">
        <ClipGrid clips={clips} />
      </div>
    </main>
  );
}
