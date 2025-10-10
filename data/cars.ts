import type { Car } from '../components/CarCard'

export const campCars: Car[] = [
  {
    id: 1,
    name: '시그니처 캠핑카 모닝글로우',
    type: 'camper',
    image:
      'https://s3-rms-production.s3.amazonaws.com/media/base_car/mintyzzang_naver/CCBV3P7S/thumbnail/%EC%95%84%EC%8D%B81.jpg',
    seats: 4,
    pricePerDay: 120_000,
  },
  {
    id: 2,
    name: '럭셔리 캠핑카 크리스탈로드',
    type: 'camper',
    image:
      'https://s3-rms-production.s3.amazonaws.com/media/base_car/gpwjdqudgjs_naver/CC7Z435S/thumbnail/1_79bIIGk.jpg',
    seats: 6,
    pricePerDay: 180_000,
  },
  {
    id: 3,
    name: '패밀리 캠핑카 선셋브리즈',
    type: 'camper',
    image:
      'https://s3-rms-production.s3.amazonaws.com/media/base_car/91012361_naver/CCO55OTO/thumbnail/%EC%B9%B8%EC%97%A0%ED%8E%98%EB%9F%AC-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
    seats: 4,
    pricePerDay: 150_000,
  },
  {
    id: 4,
    name: '프리미엄 캠핑카 미드나잇호라이즌',
    type: 'camper',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/h4Q6/image/nO70zrqzXoxHyXj6DkGTT4XzrlI.jpg',
    seats: 4,
    pricePerDay: 120_000,
  },
  {
    id: 5,
    name: '익스클루시브 캠핑카 오로라라인',
    type: 'camper',
    image:
      'https://cdn.cvinfo.com/news/photo/201606/4790_7303_2522.jpg',
    seats: 6,
    pricePerDay: 180_000,
  },
  {
    id: 6,
    name: '패밀리 캠핑카 골든트레일',
    type: 'camper',
    image:
      'https://img.sbs.co.kr/sbscnbc/upload/2020/02/27/30000255651.jpg',
    seats: 4,
    pricePerDay: 150_000,
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
  },
  {
    id: 8,
    name: '중형 승용차 실버레이크',
    type: 'passenger',
    image:
      'https://s3-rms-production.s3.amazonaws.com/media/base_car/alice.eun_gmail/PCOYTJSR/thumbnail/66135735257916043_1082761555_6HCoZVq.jpg',
    seats: 5,
    pricePerDay: 90_000,
  },
  {
    id: 9,
    name: 'SUV 승용차 하이랜드러너',
    type: 'passenger',
    image:
      'https://s3-rms-production.s3.amazonaws.com/media/base_car/alice.eun_gmail/PC78P9B7/thumbnail/1.jpg',
    seats: 7,
    pricePerDay: 120_000,
  },
  {
    id: 10,
    name: '소형 승용차 문라이트',
    type: 'passenger',
    image:
      'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/YXYFZ22QQBISFMKHVQBX5G7GCI.JPG',
    seats: 4,
    pricePerDay: 70_000,
  },
  {
    id: 11,
    name: '중형 승용차 그레이호라이즌',
    type: 'passenger',
    image:
      'https://autoimg.danawa.com/photo/4425/model_360.png',
    seats: 5,
    pricePerDay: 90_000,
  },
  {
    id: 12,
    name: 'SUV 승용차 아이언크루저',
    type: 'passenger',
    image:
      'https://i.namu.wiki/i/eIlQ3Zb_hpqGQ-3ZGD8_hneyDU-K3_d0oSid4jB5qFHnPZl9JfiDa9JWg2keO1l45xEtUfpQw23gqhWIVnSiUQ.webp',
    seats: 7,
    pricePerDay: 120_000,
  },
  {
    id: 13,
    name: '소형 승용차 데이브레이크',
    type: 'passenger',
    image:
      'https://file.carisyou.com/upload/2021/06/10/FILE_202106100304380000.png',
    seats: 4,
    pricePerDay: 70_000,
  },
  {
    id: 14,
    name: '중형 승용차 스카이라인',
    type: 'passenger',
    image:
      'https://file.carisyou.com/upload/2021/07/05/EDITOR_202107050156035490.jpg',
    seats: 5,
    pricePerDay: 90_000,
  },
  {
    id: 15,
    name: 'SUV 승용차 볼케이노X',
    type: 'passenger',
    image:
      'https://dimg.donga.com/wps/NEWS/IMAGE/2024/09/02/126811573.1.jpg',
    seats: 7,
    pricePerDay: 120_000,
  },
]

export const allCars: Car[] = [...campCars, ...normCars]
