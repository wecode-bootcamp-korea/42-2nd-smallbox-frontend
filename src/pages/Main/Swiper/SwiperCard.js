import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

function SwiperCard({ movie }) {
  const [isMouseHover, setIsMouseHover] = useState(false);
  const {
    movieName,
    movieNameInEnglish,
    movieThumbnailImageUrl,
    movieSimpleDescription,
  } = movie;

  const onMouseOverMovie = () => {
    setIsMouseHover(true);
  };

  const onMouseOutMovie = () => {
    setIsMouseHover(false);
  };
  return (
    <SwiperCardContainer
      onMouseOver={onMouseOverMovie}
      onMouseOut={onMouseOutMovie}
    >
      <Overlay isMouseHover={isMouseHover}>
        <OverlayText>{movieSimpleDescription}</OverlayText>
        <OverlayBtn>상세 보기</OverlayBtn>
      </Overlay>
      <PosterImg src={movieThumbnailImageUrl} />
      <MovieInfoTextWrapper>
        <MovieInfoTitle>{movieName}</MovieInfoTitle>
        <MovieInfoText>{movieNameInEnglish}</MovieInfoText>
      </MovieInfoTextWrapper>
    </SwiperCardContainer>
  );
}

export default SwiperCard;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SwiperCardContainer = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  display: ${props => (props.isMouseHover ? 'block' : 'none')};
  position: absolute;
  width: 300px;
  height: 430px;
  border-radius: 10px;
  background: rgba(112, 99, 255, 0.3);
  backdrop-filter: blur(20px);
  animation: ${fadeIn} 0.1s ease-out;
  z-index: 100;
`;

const OverlayText = styled.p`
  width: 230px;
  margin: auto;
  margin-top: 100px;
  font-weight: 400;
  text-align: center;
  color: white;
  font-size: 18px;
  line-height: 25px;
`;

const OverlayBtn = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 30px;
  border: 0px;
  border-radius: 10px;
  background: #7063ff;
  color: white;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background: white;
    color: #7063ff;
  }
`;

const PosterImg = styled.img`
  width: 100%;
`;

const MovieInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const MovieInfoTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
`;

const MovieInfoText = styled.span`
  margin-top: 10px;
  font-size: 15px;
  color: gray;
`;
