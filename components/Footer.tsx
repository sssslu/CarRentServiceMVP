'use client';

import { usePathname } from 'next/navigation';

/**
 * Footer component with company information and a clickable business license link.
 */
export default function Footer() {
  const pathname = usePathname();
  
  // Hide footer if we're on a car detail page
  if (pathname.startsWith('/cars/')) {
    return null;
  }
  return (
    <footer className="bg-gray-100 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="mb-2">&copy; 2025 알에스무역. All rights reserved.</p>
        <p className="mb-2">주소: 충청북도 청주시 흥덕구 가경로8-1, 5층5608호 (가경동, 태경빌딩)</p>
        <p className="mb-2">대표번호: 010-3025-7321</p>
        <p className="mb-2">이메일: maridall@naver.com</p>

        {/* 사업자 등록증 링크 */}
        <p>
          <a
            href="/biz-license.jpg" // public 폴더 안의 이미지 경로
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            사업자등록증
          </a>
        </p>
      </div>
    </footer>
  );
}
