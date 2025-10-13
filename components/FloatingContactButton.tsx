"use client";
import { useState } from 'react';

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className={`bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${open ? 'w-64 h-64' : 'w-16 h-16'}`}
        onClick={() => setOpen(!open)}
        aria-label="Contact"
      >
        {open ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <span className="text-xl font-bold mb-2">직접 문의하기</span>
            <span className="mb-1">한국 본사</span>
            <span className="mb-1">📞 010-3025-7321</span>
            <span className="mb-1">✉️ maridall@naver.com</span>
            <button
              className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-full shadow"
              onClick={e => { e.stopPropagation(); setOpen(false); }}
            >닫기</button>
          </div>
        ) : (
          <span className="text-2xl">💬</span>
        )}
      </button>
    </div>
  );
}
