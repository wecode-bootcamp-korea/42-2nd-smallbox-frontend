import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

function BookingResult({
  selectedData,
  selectedMovieData,
  selectedTimetableData,
  finalSelectedData,
}) {
  const MOVIE_INFO = [
    { id: 1, index: '상영관', info: '1관' },
    {
      id: 2,
      index: '상영등급',
      info: `${selectedMovieData[0]?.rating}` + '세 이상',
    },
    { id: 3, index: '날짜', info: `${selectedTimetableData[0]?.date}` },
    {
      id: 4,
      index: '상영시간',
      info: `${selectedData.time}`,
    },
  ];

  return (
    <BookingResultContainer>
      <BookingTop>
        <BookingTitle>구매내역</BookingTitle>
      </BookingTop>
      {selectedTimetableData[0] && (
        <BookingBottom>
          <PosterImg alt="poster" src={selectedMovieData[0]?.movieThumbnail} />
          <MovieTitle>{selectedMovieData[0]?.movieTitle}</MovieTitle>
          <Line />
          <MovieDataWrapper>
            <MovieDataUl>
              {MOVIE_INFO.map(item => {
                return (
                  <li key={item.id}>
                    <MovieDataIndex>{item.index}</MovieDataIndex>
                    <MovieDataContext>{item.info}</MovieDataContext>
                  </li>
                );
              })}
            </MovieDataUl>
          </MovieDataWrapper>
        </BookingBottom>
      )}
    </BookingResultContainer>
  );
}
const BookingResultContainer = styled.div`
  position: relative;
  width: 250px;
  height: 800px;
  border-left: 0px;
`;

const BookingTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  height: 70px;
`;

const BookingTitle = styled.h2`
  margin: 0 auto;
  font-weight: 700;
  font-size: 20px;
`;

const FadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(-5%);
}
100% {
  opacity: 1;
  transform: translateY(0);
}`;

const BookingBottom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 15px;
  animation: ${FadeIn} 0.5s;
`;

const RatingMark = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  top: 10px;
  right: 15px;
  width: 35px;
  height: 35px;
  font-weight: 800;
  background: #7063ff;
`;

const PosterImg = styled.img`
  width: 180px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const MovieTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
`;

const Line = styled.div`
  width: 200px;
  border-bottom: 2px solid black;
`;

const MovieDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
`;

const MovieDataUl = styled.ul`
  line-height: 35px;
`;

const MovieDataIndex = styled.span`
  display: inline-block;
  width: 70px;
  font-weight: 600;
  font-size: 15px;
`;

const MovieDataContext = styled.span`
  width: 100px;
  color: gray;
  font-size: 15px;
`;

export default BookingResult;
