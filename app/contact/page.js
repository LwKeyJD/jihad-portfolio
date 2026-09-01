export default function ContactPage() {
  return (
    <main>
      <div className="contact-wrap">
        <h2 className="display">Let&apos;s work together</h2>
        <p>Reach out for editing work, collaborations, or just to talk shop.</p>
        <div className="contact-row">
          <span className="label mono">email</span>
          <span className="value">your-email@example.com</span>
        </div>
        <div className="contact-row">
          <span className="label mono">instagram</span>
          <span className="value">@your-handle</span>
        </div>
        <div className="contact-row">
          <span className="label mono">location</span>
          <span className="value">Dhaka, Bangladesh</span>
        </div>
      </div>
    </main>
  );
}
