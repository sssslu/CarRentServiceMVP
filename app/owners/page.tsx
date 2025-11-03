'use client';

export default function OwnersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">차주 모집</h1>

      <p className="mb-4">차량을 소유하고 계신가요? LunaVan과 함께 차량을 캠핑카로 개조·임대하여 수익을 만들어 보세요!</p>

      <h2 className="text-xl font-semibold mb-2">참여 방법</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>문의: 아래 연락처로 먼저 연락주세요.</li>
        <li>상담: 차량 상태 및 개조 가능 여부 상담 진행</li>
        <li>계약: 개조 비용, 대여시 수익 및 기타 조건 협의</li>
        <li>개조 및 등록: 일정에 따라 개조 진행</li>
      </ol>

      <h3 className="font-semibold">혜택</h3>
      <ul className="list-disc list-inside mb-4">
        <li>개조 비용 일부 지원 협의 가능</li>
        <li>플랫폼을 통한 임대 노출 및 운영 대행 가능</li>
        <li>정기적인 차량 관리 및 청소 서비스 협의 가능</li>
      </ul>

      <div className="p-4 bg-gray-50 rounded">
        <p className="font-bold">문의 및 접수</p>
        <p className="mt-2">전화: 010-3025-7321</p>
        <p className="mt-1">이메일: maridall@naver.com</p>
      </div>

      <p className="mt-6 text-sm text-gray-600">더 자세한 조건은 상담 후 개별 협의됩니다. 부담없이 문의주세요 ^^</p>
    </div>
  );
}