import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swiper from './Swiper/Swiper';
import VideoSwiper from './VideoSwiper/VideoSwiper';
import MainTop4 from './MainTop4';

function Main() {
  // const navigate = useNavigate();

  return (
    <MainContainer>
      <VideoSwiper />
      <SectionTop>
        <SectionTopTitleColored>▶ Now Showing</SectionTopTitleColored>
        <SectionTopTitle>현재 상영작</SectionTopTitle>
        <SectionTopMore>+ 더 보기</SectionTopMore>
      </SectionTop>
      <SectionA>
        <Swiper />
        <MainTop4 />
      </SectionA>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  /* width: 100%; */
`;
const SectionA = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-left: 100px;
  margin-top: 20px;
`;
const SectionTopTitleColored = styled.h3`
  color: #9971ff;
  font-weight: 700;
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
  right: 200px;
  color: #9971ff;
  padding: 8px 15px;
  border: 2px solid #9971ff;
  border-radius: 30px;
  background: transparent;
  font-weight: 700;
  font-size: 15px;
  transition: 0.3s;

  &:hover {
    color: white;
    background: #9971ff;
    transition: 0.3s;
  }
`;

export default Main;
