/**
 * Footer component with company information and a clickable business license link.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="mb-2">&copy; 2025 알에스무역. All rights reserved.</p>
        <p className="mb-2">주소: 대구광역시 중구 명덕로 179, 2층 202-j123호</p>
        <p className="mb-2">대표번호: 010-3025-7321</p>
        <p className="mb-2">이메일: maridall@naver.com</p>

        {/* 사업자 등록증 링크 */}
        <p>
          <a
            href="/biz-license.jpg" // public 폴더 안의 이미지 경로
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            사업자등록증
          </a>
        </p>
      </div>
    </footer>
  );
}
