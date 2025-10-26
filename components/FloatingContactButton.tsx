"use client";
import { useState } from 'react';

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className={`bg-primary text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${open ? 'w-64 h-64' : 'w-16 h-16'}`}
        onClick={() => setOpen(!open)}
        aria-label="Contact"
      >
        {open ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <span className="text-xl font-bold mb-2">직접 문의하기</span>
            <span className="mb-1 text-xs">한국 본사</span>
            <span className="mb-1">📞 010-3025-7321</span>
            <span className="mb-1">✉️ maridall@naver.com</span>
            <span className="mb-1 text-xs">24시간 운영</span>

          </div>
        ) : (
          <img src="/button.png" alt="Chat Bubble" className="w-8 h-8" />
        )}
      </button>
    </div>
  );
}
