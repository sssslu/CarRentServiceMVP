'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { allCars } from '../../../data/cars';
import ReservationModal from '../../../components/ReservationModal';

export default function CarDetailPage() {
  const params = useParams();
  const carId = parseInt(params.id as string);
  const car = allCars.find(c => c.id === carId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!car) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">차량을 찾을 수 없습니다</h1>
          <Link href="/" className="text-primary hover:underline">
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pb-24">
      {/* Main Image Section */}
      <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Car Info Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
            <p className="text-gray-600">{car.type === 'camper' ? '캠핑카' : '승용차'} · {car.seats}인승</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">₩{car.pricePerDay.toLocaleString()}</p>
            <p className="text-gray-600">1일 기준</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">차량 소개</h2>
        <p className="text-gray-700 leading-relaxed">{car.description}</p>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">주요 특징</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {car.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">상세 스펙</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(car.specs).map(([key, value]) => (
            <div key={key} className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm mb-1">{key}</p>
              <p className="font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation Button */}
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

      {/* Reservation Modal */}
      <ReservationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}