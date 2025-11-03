"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * Responsive Header with desktop nav and a mobile hamburger that opens a
 * right-side slide-in menu. Desktop layout is unchanged; on small screens the
 * nav is replaced by a hamburger button.
 */
export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  const links = (
    <>
      <a href="/#camp" onClick={() => setOpen(false)} className="hover:text-primary block md:inline">캠핑카</a>
      <a href="/#norm" onClick={() => setOpen(false)} className="hover:text-primary block md:inline">승용차</a>
      <Link href="/location" onClick={() => setOpen(false)} className="hover:text-primary block md:inline">오시는 길</Link>
      <Link href="/convert" onClick={() => setOpen(false)} className="hover:text-primary block md:inline">개조 문의</Link>
      <Link href="/owners" onClick={() => setOpen(false)} className="hover:text-primary block md:inline">차주 모집</Link>
    </>
  );

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">LunaVan</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4 items-center">
          {links}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="메뉴 열기"
            onClick={() => setOpen(true)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-40 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        {/* overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />

        {/* drawer */}
        <aside
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="p-4 flex items-center justify-between border-b">
            <span className="font-semibold">메뉴</span>
            <button aria-label="메뉴 닫기" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <nav className="p-4 flex flex-col gap-3">
            {links}
          </nav>
        </aside>
      </div>
    </header>
  );
}