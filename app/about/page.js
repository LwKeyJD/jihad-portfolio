export default function AboutPage() {
  return (
    <main>
      <div className="about-wrap">
        <div className="photo-box">
          your photo goes here
          <br />
          <span className="mono" style={{ color: 'var(--render)', fontSize: 11 }}>
            replace app/about/page.js
          </span>
        </div>
        <div className="about-body">
          <h2 className="display">About Jihad</h2>
          <p>
            I&apos;m Foyshal Hossain Jihad, a video editor based in Bangladesh. I completed
            my video editing course through Digital Dropout, and I&apos;m currently a
            student of BS in Computer Science and Engineering at United International
            University.
          </p>
          <p>
            I work across short-form reels, long-form video, and motion graphics — moving
            between Premiere Pro, DaVinci Resolve, and After Effects depending on what a
            project needs. This site is where every project I finish gets a home.
          </p>
          <div className="skills">
            <span className="pill">Adobe Premiere Pro</span>
            <span className="pill">DaVinci Resolve</span>
            <span className="pill">After Effects</span>
            <span className="pill">Color Grading</span>
            <span className="pill">Sound Design</span>
          </div>
        </div>
      </div>
    </main>
  );
}
