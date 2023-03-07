import React from 'react';
import styled from 'styled-components';

function Videos({ item }) {
  const { title, description, video_url, link } = item;
  return (
    <VideoWrapper>
      <VideoTextWrapper>
        <VideoTitle>{title}</VideoTitle>
        <VideoContext>{description}</VideoContext>
        <a href={link}>
          <VideoBtn>상세 보기</VideoBtn>
        </a>
      </VideoTextWrapper>
      <MainVideo
        alt="mainVideo"
        className="mainVideo"
        src={video_url}
        autoPlay
        muted
        loop
      />
    </VideoWrapper>
  );
}

export default Videos;

const VideoWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 500px;
  overflow: hidden;
`;

const VideoTextWrapper = styled.div`
  position: absolute;
  top: 180px;
  right: 200px;
  width: 450px;
  text-align: start;
  z-index: 10;
`;

const VideoTitle = styled.h2`
  color: white;
  font-size: 25px;
`;

const VideoContext = styled.p`
  margin-top: 12px;
  color: white;
  font-weight: 300;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.8;
`;

const VideoBtn = styled.button`
  width: 120px;
  margin-top: 15px;
  padding: 10px 10px;
  border: 0px;
  border-radius: 5px;
  color: white;
  background: #7063ff;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #7063ff;
    background: white;
    transition: 0.3s;
  }
`;

const MainVideo = styled.video`
  width: 100vw;
  margin-top: -270px;
  z-index: 0;
`;
