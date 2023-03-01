import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import Videos from './Videos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './VideoSwiper.css';

// import required modules
import { EffectFade, Pagination, Navigation } from 'swiper';

export default function App() {
  return (
    <StyledSwiper
      slidesPerView={1}
      spaceBetween={100}
      loop={true}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[EffectFade, Pagination]}
      effect="fade"
      className="mySwiper"
    >
      {VIDEO_DATA.map(item => (
        <SwiperSlide key={item.id}>
          <Videos item={item} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 450px;

  .swiper-pagination .swiper-pagination-bullet {
    opacity: 0.8;
    border: 1px solid white;
    background-color: transparent;
    margin-bottom: 20px;
  }
  .swiper-pagination .swiper-pagination-bullet-active {
    width: 30px;
    border-radius: 10px;
    background-color: white;
    transition: 0.2s ease-out;
  }
`;

const VIDEO_DATA = [
  {
    id: 1,
    title: '민환의 초상',
    video_url:
      'https://user-images.githubusercontent.com/118322531/221493173-553d56d7-c9b0-4b35-a9a9-51ab2dd85c25.mp4',
    description:
      '명성과 부를 쌓으면서 민환은 성공에는 대가가 따른다는 사실을 깨닫고 진정한 행복과 성취감을 찾기 위해 과거의 악마와 맞서야 한다. ',
    link: '#',
  },
  {
    id: 2,
    title: '선키스드 드림',
    video_url:
      'https://user-images.githubusercontent.com/118322531/222043814-ce1566f5-6de1-4d5d-867f-f6862ca58ccc.mp4',
    description:
      '달콤하고 재미있는 구애를 시작하면서 어색한 첫 데이트부터 진심 어린 사랑 고백에 이르기까지 첫사랑의 우여곡절을 탐색한다',
    link: '#',
  },
  {
    id: 3,
    title: '에밀리의 불행한 여름',
    video_url:
      'https://user-images.githubusercontent.com/118322531/222048296-83bbffc1-bacc-4627-a06b-84bf508ce1bc.mp4',
    description:
      '갑작스러운 비극이 닥친 에밀리는 삶의 가혹한 현실을 직시한다. 회복력의 힘과 삶의 예기치 않은 순간의 아름다움에 대한 가슴 아픈 메시지',
    link: '#',
  },
];
