'use client';

export default function ConvertPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">개조 문의</h1>

      <p className="mb-4">당신의 차를 캠핑카로 개조하세요. 일반차량도 문제 없습니다. 사용하지 않으실 땐 다른분들께 대여 및 수익을 창출해보세요!</p>

  <h2 className="text-xl font-semibold mb-2 mt-20">이동의 자유, 감성의 기술</h2>
      <p className="mb-6 italic">Freedom to move, Technology that feels.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="mb-2 font-semibold">공장</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/convert-1.jpg" alt="공장" className="w-full h-96 object-cover rounded shadow-sm" />
        </div>
        <div>
          <p className="mb-2 font-semibold">제작 중</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/convert-2.jpg" alt="제작 중" className="w-full h-96 object-cover rounded shadow-sm" />
        </div>
        <div>
          <p className="mb-2 font-semibold">완성</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/convert-3.jpg" alt="완성" className="w-full h-96 object-cover rounded shadow-sm" />
        </div>
        <div>
          <p className="mb-2 font-semibold">완성 (후면)</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/convert-4.jpg" alt="완성 후면" className="w-full h-96 object-cover rounded shadow-sm" />
        </div>
      </div>

      <p className="mb-4">편하게 연락주세요 ^_^</p>
      <p className="font-bold text-lg">010-3025-7321</p>

    </div>
  );
}