import Link from 'next/link';

/**
 * Header component containing the site logo and primary navigation links.
 * The navigation links are anchors for sections on the home page and a link
 * to the overall cars listing. For a more complete application, you might
 * extract these into a configuration or add dynamic highlighting.
 */
export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
  <Link href="/" className="text-2xl font-bold text-primary">LunaVan</Link>
        <nav className="space-x-4">
          <a href="/#camp" className="hover:text-primary">캠핑카</a>
          <a href="/#norm" className="hover:text-primary">승용차</a>
          <Link href="/location" className="hover:text-primary">오시는 길</Link>
          <Link href="/convert" className="hover:text-primary">개조 문의</Link>
          <Link href="/owners" className="hover:text-primary">차주 모집</Link>
        </nav>
      </div>
    </header>
  );
}