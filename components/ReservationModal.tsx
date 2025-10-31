'use client';

import { useState } from 'react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  if (!isOpen) return null;

  const handleCall = () => {
    window.location.href = 'tel:010-3025-7321';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">예약 안내</h2>
        <p className="text-gray-700 mb-6">
          해당 차량 예약은 전화로 문의바랍니다.
          <br />
          <span className="font-bold text-lg">010-3025-7321</span>
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleCall}
            className="flex-1 bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            전화하기
          </button>
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-all"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}