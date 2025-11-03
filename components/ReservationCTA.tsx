'use client';

import { useState } from 'react';
import ReservationModal from './ReservationModal';

export default function ReservationCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all text-lg"
          >
            예약하기
          </button>
        </div>
      </div>

      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
