'use client';

export default function LocationPage() {
  const apiKey = 'AIzaSyCgmLP5nN1uWGxUzxQ7xoFhAppR_OYPQkk';
  const latitude = '35.8563';  // 대구 중구 좌표
  const longitude = '128.5936';
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=600x300&scale=2&markers=color:red%7Clabel:L%7C${latitude},${longitude}&key=${apiKey}`;

  const openMap = () => {
    window.open(`https://www.google.com/maps/place/${latitude},${longitude}`, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">오시는 길</h1>
      <div className="space-y-6">
        {/* Map Image */}
        <div className="w-full h-[300px] bg-gray-100 relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={staticMapUrl} 
            alt="Location Map" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cpath fill="%23666" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"%3E%3C/path%3E%3C/svg%3E';
              e.currentTarget.className = 'w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
            }}
          />
        </div>

        {/* Address Text */}
        <div className="text-center text-lg">
          대구광역시 중구 명덕로 179, 2층 202-j123호
        </div>

        {/* Open in Google Maps Button */}
        <div className="flex justify-center">
          <button
            onClick={openMap}
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Google Maps에서 열기
          </button>
        </div>

        {/* Directions Card */}
        <div className="bg-[#F5F5F5] rounded-lg p-4 mt-6">
          <div className="flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="text-sm leading-relaxed">
              대구 중앙로역 3번 출구에서 도보 5분 거리에 있습니다. 명덕로를 따라 직진하시다가 오른쪽 건물 2층입니다. 주차는 건물 뒤편 전용 주차장을 이용해주세요.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-4 text-center">
          <p className="text-lg">대표번호: 010-3025-7321</p>
        </div>
      </div>
    </div>
  );
}