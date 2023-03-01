import React from 'react';
import styled, { css } from 'styled-components';
import Swiper from './Swiper/Swiper';
import VideoSwiper from './VideoSwiper/VideoSwiper';

function Main() {
  return (
    <MainContainer>
      <VideoSwiper />
      <SectionA>
        <SectionTop>
          <SectionTopTitleColored>▶ Now Playing</SectionTopTitleColored>
          <SectionTopTitle>현재 상영작</SectionTopTitle>
          <SectionTopMore>+ 더 보기</SectionTopMore>
        </SectionTop>
        <Swiper />
      </SectionA>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 1300px;
`;
const SectionA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100vw;
`;

const SectionTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;
  height: 80px;
`;
const SectionTopTitleColored = styled.h3`
  color: #7063ff;
  font-weight: 600;
  font-size: 25px;
`;

const SectionTopTitle = styled.h3`
  margin-left: 15px;
  font-weight: 400;
  color: gray;
  font-size: 25px;
`;

const SectionTopMore = styled.button`
  position: absolute;
  right: 0px;
  color: #7063ff;
  padding: 8px 15px;
  border: 2px solid #7063ff;
  border-radius: 30px;
  background: transparent;
  font-weight: 700;
  font-size: 15px;
  pointer: cursor;
  transition: 0.3s;

  &:hover {
    color: white;
    background: #7063ff;
    transition: 0.3s;
  }
`;

export default Main;
