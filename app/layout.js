import './globals.css';
import Nav from '../components/Nav';

export const metadata = {
  title: 'Foyshal Hossain Jihad — Edit Bay',
  description: 'Video editing portfolio — reels, videos, and motion graphics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer>
          <div>© 2026 Foyshal Hossain Jihad</div>
          <div>reels · videos · motion graphics</div>
        </footer>
      </body>
    </html>
  );
}
