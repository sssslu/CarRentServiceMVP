import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactButton from '../components/FloatingContactButton';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'LunaVan',
  description: '캠핑카/승용차 간편 대여!',
};

/**
 * Root layout wraps every page in the app directory with a consistent header and footer.
 * The flex styles ensure that the footer sticks to the bottom when the page has little content.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}