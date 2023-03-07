import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Videos = ({ item, movieData }) => {
  const { id, title, description, video_url } = item;

  const navigate = useNavigate();

  const goToBooking = () => {
    navigate(`/booking`);
  };

  return (
    <VideoWrapper>
      <VideoTextWrapper>
        <VideoTitle>&#60; {title} &#62;</VideoTitle>
        <VideoContext>{description}</VideoContext>
        <VideoBtn
          onClick={() => {
            navigate(`/movieDetail/${id}`);
          }}
        >
          상세 보기&nbsp; &#62;
        </VideoBtn>
        <VideoBtn onClick={goToBooking}>예매 하기&nbsp; &#62;</VideoBtn>
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
};

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
  right: 100px;
  width: 450px;
  text-align: start;
  z-index: 10;
`;

const VideoTitle = styled.h2`
  color: white;
  font-size: 40px;
  font-weight: 600;
  text-shadow: 1px 1px 3px black;
`;

const VideoContext = styled.p`
  margin: 12px 0 50px 0;
  color: white;
  font-weight: 300;
  font-size: 17px;
  line-height: 25px;
  opacity: 0.9;
`;

const VideoBtn = styled.button`
  width: 120px;
  margin: 15px 10px;
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
    box-shadow: 1.8px 3.7px 8px #767676;
  }
`;

const MainVideo = styled.video`
  width: 100vw;
  margin-top: -270px;
  z-index: 0;
`;
