import { getClipsBySegment } from '../lib/getClips';
import ClipGrid from '../components/ClipGrid';

export default async function HomePage() {
  const [reels, videos, motion] = await Promise.all([
    getClipsBySegment('reels'),
    getClipsBySegment('videos'),
    getClipsBySegment('motion'),
  ]);
  const featured = [reels[0], videos[0], motion[0]].filter(Boolean);

  return (
    <main>
      <section className="hero">
        <div className="eyebrow mono">reel loaded · press play to explore</div>
        <h1>Cuts that hold attention, from first frame to last.</h1>
        <p>
          I edit reels, long-form video, and motion graphics — trained through Digital
          Dropout&apos;s editing program and currently studying BS in CSE at United
          International University. This bay holds every project, sorted the way I sort
          my own timelines.
        </p>
        <div className="credentials">
          <span className="pill">Digital Dropout — Video Editing</span>
          <span className="pill">United International University — BS CSE</span>
          <span className="pill">Based in Bangladesh</span>
        </div>
      </section>
      <div className="section-label mono">featured clips</div>
      <div className="section-pad">
        <ClipGrid clips={featured} hideFilters />
      </div>
    </main>
  );
}
