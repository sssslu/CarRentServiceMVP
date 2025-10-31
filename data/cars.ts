export interface Car {
  id: number;
  name: string;
  type: 'camper' | 'passenger';
  image: string;
  seats: number;
  pricePerDay: number;
  description: string;
  features: string[];
  specs: {
    [key: string]: string;
  };
}

export const campCars: Car[] = [
  {
    id: 1,
    name: '시그니처 캠핑카 모닝글로우',
    type: 'camper',
    image:
      'https://s3-rms-production.s3.amazonaws.com/media/base_car/mintyzzang_naver/CCBV3P7S/thumbnail/%EC%95%84%EC%8D%B81.jpg',
    seats: 4,
    pricePerDay: 120_000,
    description: '아늑하고 효율적인 공간 설계가 돋보이는 4인용 캠핑카입니다. 모닝글로우만의 특별한 실내 디자인으로 편안하고 로맨틱한 캠핑을 즐기실 수 있습니다.',
    features: [
      '4인 취침 공간',
      '전자레인지/냉장고',
      '샤워실/화장실',
      'TV/블루투스',
      '에어컨/히터',
      '싱크대/조리도구',
    ],
    specs: {
      '전장': '5.4m',
      '전폭': '2.0m',
      '전고': '2.8m',
      '엔진': '2.2 디젤',
      '연비': '10.5km/l',
      '출시년도': '2023년'
    }
  },
  {
    id: 2,
    name: '럭셔리 캠핑카 크리스탈로드',
    type: 'camper',
    image:
      'https://s3-rms-production.s3.amazonaws.com/media/base_car/gpwjdqudgjs_naver/CC7Z435S/thumbnail/1_79bIIGk.jpg',
    seats: 6,
    pricePerDay: 180_000,
    description: '6인 가족을 위한 프리미엄 캠핑카입니다. 넓은 실내 공간과 고급스러운 인테리어로 럭셔리한 캠핑 경험을 제공합니다.',
    features: [
      '6인 취침 공간',
      '대형 냉장고',
      '전기레인지',
      '샤워부스/화장실',
      '스마트TV/오디오',
      '전동 어닝'
    ],
    specs: {
      '전장': '7.2m',
      '전폭': '2.3m',
      '전고': '3.1m',
      '엔진': '2.5 디젤',
      '연비': '9.5km/l',
      '출시년도': '2024년'
    }
  },
  {
    id: 3,
    name: '패밀리 캠핑카 선셋브리즈',
    type: 'camper',
    image:
      'https://s3-rms-production.s3.amazonaws.com/media/base_car/91012361_naver/CCO55OTO/thumbnail/%EC%B9%B8%EC%97%A0%ED%8E%98%EB%9F%AC-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
    seats: 4,
    pricePerDay: 150_000,
    description: '실용성과 편안함을 모두 갖춘 4인용 캠핑카입니다. 효율적인 공간 활용과 다양한 편의 시설로 가족 여행에 최적화되어 있습니다.',
    features: [
      '4인 취침 공간',
      '냉장고/냉동고',
      '전기레인지',
      '온수 샤워',
      '블루투스 스피커',
      '외부 테이블'
    ],
    specs: {
      '전장': '6.2m',
      '전폭': '2.1m',
      '전고': '2.9m',
      '엔진': '2.2 디젤',
      '연비': '11.0km/l',
      '출시년도': '2023년'
    }
  },
  {
    id: 4,
    name: '프리미엄 캠핑카 미드나잇호라이즌',
    type: 'camper',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/h4Q6/image/nO70zrqzXoxHyXj6DkGTT4XzrlI.jpg',
    seats: 4,
    pricePerDay: 120_000,
    description: '세련된 디자인과 첨단 편의 기능을 갖춘 프리미엄 캠핑카입니다. 도심형 캠핑과 장거리 여행 모두에 적합합니다.',
    features: [
      '4인 취침 공간',
      '스마트 냉장고',
      '인덕션',
      '독립 욕실',
      '스마트TV',
      '무선 충전'
    ],
    specs: {
      '전장': '5.8m',
      '전폭': '2.0m',
      '전고': '2.8m',
      '엔진': '2.0 디젤',
      '연비': '12.0km/l',
      '출시년도': '2024년'
    }
  },
  {
    id: 5,
    name: '익스클루시브 캠핑카 오로라라인',
    type: 'camper',
    image:
      'https://cdn.cvinfo.com/news/photo/201606/4790_7303_2522.jpg',
    seats: 6,
    pricePerDay: 180_000,
    description: '최고급 사양과 넓은 실내 공간을 자랑하는 6인용 캠핑카입니다. 럭셔리한 캠핑 라이프를 경험하실 수 있습니다.',
    features: [
      '6인 취침 공간',
      '양문형 냉장고',
      '오븐/전자레인지',
      '고급 욕실',
      '엔터테인먼트 시스템',
      '듀얼 에어컨'
    ],
    specs: {
      '전장': '7.5m',
      '전폭': '2.3m',
      '전고': '3.2m',
      '엔진': '3.0 디젤',
      '연비': '9.0km/l',
      '출시년도': '2024년'
    }
  },
  {
    id: 6,
    name: '패밀리 캠핑카 골든트레일',
    type: 'camper',
    image:
      'https://img.sbs.co.kr/sbscnbc/upload/2020/02/27/30000255651.jpg',
    seats: 4,
    pricePerDay: 150_000,
    description: '가족 친화적 설계가 돋보이는 4인용 캠핑카입니다. 안전하고 편안한 여행을 위한 다양한 기능을 탑재했습니다.',
    features: [
      '4인 취침 공간',
      '대형 냉장고',
      '2구 가스레인지',
      '샤워/화장실',
      '스마트TV',
      '외부 캐노피'
    ],
    specs: {
      '전장': '6.0m',
      '전폭': '2.1m',
      '전고': '2.9m',
      '엔진': '2.2 디젤',
      '연비': '10.8km/l',
      '출시년도': '2023년'
    }
  },
]

export const normCars: Car[] = [
  {
    id: 7,
    name: '소형 승용차 블루버드',
    type: 'passenger',
    image:
      'https://s3-rms-production.s3.amazonaws.com/media/base_car/alice.eun_gmail/PCT5PDE5/thumbnail/%ED%95%98%EC%9D%B4%EB%A6%AC%EB%AC%B4%EC%A7%84_%ED%9D%B0%EC%83%89.jpg',
    seats: 4,
    pricePerDay: 70_000,
    description: '경제적이고 실용적인 소형 승용차입니다. 도심 주행에 최적화된 연비와 편의성을 제공합니다.',
    features: [
      '4인승',
      '스마트키',
      '블루투스 오디오',
      '후방 카메라',
      '크루즈 컨트롤',
      '공조 시스템'
    ],
    specs: {
      '차종': '소형 세단',
      '배기량': '1,400cc',
      '연비': '15.2km/l',
      '변속기': '자동 6단',
      '연료': '가솔린',
      '연식': '2023년'
    }
  },
  {
    id: 8,
    name: '중형 승용차 실버레이크',
    type: 'passenger',
    image:
      'https://s3-rms-production.s3.amazonaws.com/media/base_car/alice.eun_gmail/PCOYTJSR/thumbnail/66135735257916043_1082761555_6HCoZVq.jpg',
    seats: 5,
    pricePerDay: 90_000,
    description: '안정적인 주행성능과 넓은 실내공간을 갖춘 중형 세단입니다. 장거리 여행에도 편안한 승차감을 제공합니다.',
    features: [
      '5인승',
      '가죽시트',
      '듀얼 에어컨',
      '스마트 크루즈',
      '무선충전',
      '8인치 내비게이션'
    ],
    specs: {
      '차종': '중형 세단',
      '배기량': '2,000cc',
      '연비': '13.5km/l',
      '변속기': '자동 8단',
      '연료': '가솔린',
      '연식': '2024년'
    }
  },
  {
    id: 9,
    name: 'SUV 승용차 하이랜드러너',
    type: 'passenger',
    image:
      'https://s3-rms-production.s3.amazonaws.com/media/base_car/alice.eun_gmail/PC78P9B7/thumbnail/1.jpg',
    seats: 7,
    pricePerDay: 120_000,
    description: '강력한 성능과 넓은 적재공간을 자랑하는 대형 SUV입니다. 7인승 구조로 가족 여행에 최적화되어 있습니다.',
    features: [
      '7인승',
      '파노라마 선루프',
      '전방/후방 센서',
      '360도 카메라',
      '3존 에어컨',
      '전동 트렁크'
    ],
    specs: {
      '차종': '대형 SUV',
      '배기량': '3,000cc',
      '연비': '11.2km/l',
      '변속기': '자동 8단',
      '연료': '디젤',
      '연식': '2024년'
    }
  },
  {
    id: 10,
    name: '소형 승용차 문라이트',
    type: 'passenger',
    image:
      'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/YXYFZ22QQBISFMKHVQBX5G7GCI.JPG',
    seats: 4,
    pricePerDay: 70_000,
    description: '컴팩트한 크기와 우수한 연비로 도심 주행에 최적화된 소형차입니다. 스마트한 편의 기능을 갖추고 있습니다.',
    features: [
      '4인승',
      '스마트키',
      '애플 카플레이',
      '후방 카메라',
      '차선 이탈 경보',
      'LED 라이트'
    ],
    specs: {
      '차종': '소형 해치백',
      '배기량': '1,600cc',
      '연비': '14.8km/l',
      '변속기': '자동 7단',
      '연료': '가솔린',
      '연식': '2023년'
    }
  },
  {
    id: 11,
    name: '중형 승용차 그레이호라이즌',
    type: 'passenger',
    image:
      'https://autoimg.danawa.com/photo/4425/model_360.png',
    seats: 5,
    pricePerDay: 90_000,
    description: '세련된 디자인과 고급스러운 인테리어를 갖춘 중형 세단입니다. 최신 안전 기술과 편의 사양을 제공합니다.',
    features: [
      '5인승',
      '통풍시트',
      '헤드업 디스플레이',
      '전방 충돌 방지',
      '하이빔 어시스트',
      '무선 안드로이드 오토'
    ],
    specs: {
      '차종': '중형 세단',
      '배기량': '2,500cc',
      '연비': '12.8km/l',
      '변속기': '자동 8단',
      '연료': '가솔린',
      '연식': '2024년'
    }
  },
  {
    id: 12,
    name: 'SUV 승용차 아이언크루저',
    type: 'passenger',
    image:
      'https://i.namu.wiki/i/eIlQ3Zb_hpqGQ-3ZGD8_hneyDU-K3_d0oSid4jB5qFHnPZl9JfiDa9JWg2keO1l45xEtUfpQw23gqhWIVnSiUQ.webp',
    seats: 7,
    pricePerDay: 120_000,
    description: '강인한 외관과 뛰어난 주행성능을 자랑하는 프리미엄 SUV입니다. 고급 사양과 넓은 실내 공간을 제공합니다.',
    features: [
      '7인승',
      '파노라마 선루프',
      '프리미엄 사운드',
      '어댑티브 크루즈',
      '전자식 사이드스텝',
      '공기청정 시스템'
    ],
    specs: {
      '차종': '대형 SUV',
      '배기량': '3,500cc',
      '연비': '10.5km/l',
      '변속기': '자동 10단',
      '연료': '디젤',
      '연식': '2024년'
    }
  },
  {
    id: 13,
    name: '소형 승용차 데이브레이크',
    type: 'passenger',
    image:
      'https://file.carisyou.com/upload/2021/06/10/FILE_202106100304380000.png',
    seats: 4,
    pricePerDay: 70_000,
    description: '현대적인 디자인과 첨단 안전 기능을 갖춘 소형차입니다. 도심 주행에 최적화된 스마트한 기능들을 탑재했습니다.',
    features: [
      '4인승',
      '스마트키',
      '안드로이드 오토',
      '차선 유지 보조',
      'LED 헤드램프',
      '스마트 트렁크'
    ],
    specs: {
      '차종': '소형 세단',
      '배기량': '1,500cc',
      '연비': '15.5km/l',
      '변속기': '자동 7단',
      '연료': '가솔린',
      '연식': '2023년'
    }
  },
  {
    id: 14,
    name: '중형 승용차 스카이라인',
    type: 'passenger',
    image:
      'https://file.carisyou.com/upload/2021/07/05/EDITOR_202107050156035490.jpg',
    seats: 5,
    pricePerDay: 90_000,
    description: '역동적인 디자인과 고성능 주행을 제공하는 스포티 세단입니다. 최신 인포테인먼트 시스템과 안전 기능을 탑재했습니다.',
    features: [
      '5인승',
      '스포츠 시트',
      '파노라마 디스플레이',
      '서라운드 뷰',
      '스포츠 모드',
      'JBL 프리미엄 사운드'
    ],
    specs: {
      '차종': '중형 세단',
      '배기량': '2,200cc',
      '연비': '13.2km/l',
      '변속기': '자동 8단',
      '연료': '가솔린',
      '연식': '2024년'
    }
  },
  {
    id: 15,
    name: 'SUV 승용차 볼케이노X',
    type: 'passenger',
    image:
      'https://dimg.donga.com/wps/NEWS/IMAGE/2024/09/02/126811573.1.jpg',
    seats: 7,
    pricePerDay: 120_000,
    description: '혁신적인 디자인과 최첨단 기술을 결합한 플래그십 SUV입니다. 럭셔리한 실내와 강력한 성능을 자랑합니다.',
    features: [
      '7인승',
      '프리미엄 나파가죽',
      '증강현실 HUD',
      '자율주행 보조',
      '공기 서스펜션',
      '뱅앤올룹슨 사운드'
    ],
    specs: {
      '차종': '대형 SUV',
      '배기량': '3,800cc',
      '연비': '9.8km/l',
      '변속기': '자동 8단',
      '연료': '가솔린',
      '연식': '2024년'
    }
  }
]

export const allCars: Car[] = [...campCars, ...normCars]
