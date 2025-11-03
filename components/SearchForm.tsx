"use client"

import { useState } from 'react';

/**
 * SearchForm component models the booking form seen on the LunaVan home page.
 * It collects the car type, pick‑up/return dates and times. The submit
 * handler currently just alerts the user; in a production app this would
 * trigger a search query or navigation.
 */
export default function SearchForm() {
  const [carType, setCarType] = useState<'camper' | 'passenger'>('camper');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [pickupTime, setPickupTime] = useState('10:00');
  const [returnTime, setReturnTime] = useState('10:00');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app you would send these parameters to an API or navigate to a results page.
    alert('차량 선택후 직접 문의 부탁드립니다!!\n\n' +
      `차량 종류: ${carType === 'camper' ? '캠핑카' : '승용차'}\n` +
      `픽업 일시: ${pickupDate} ${pickupTime}\n` +
      `반납 일시: ${returnDate} ${returnTime}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
      <div>
        <label className="block font-semibold mb-2">차량 종류</label>
        <select
          value={carType}
          onChange={(e) => setCarType(e.target.value as 'camper' | 'passenger')}
          className="w-full border rounded p-2"
        >
          <option value="camper">캠핑카</option>
          <option value="passenger">승용차</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-2">픽업 날짜</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">반납 날짜</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-2">픽업 시간</label>
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">반납 시간</label>
          <input
            type="time"
            value={returnTime}
            onChange={(e) => setReturnTime(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors"
      >
        검색
      </button>
    </form>
  );
}