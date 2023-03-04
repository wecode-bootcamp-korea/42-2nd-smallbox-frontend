import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function BookingResult() {
  const [movieData, setMovieData] = useState([]);
  const { theater, reating, date, time, end_time } = movieData;

  useEffect(() => {
    fetch('/data/movieData.json')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setMovieData(data.movie[0]);
      });
  }, []);

  return (
    <BookingResultContainer>
      <BookingTop>
        <BookingTitle>구매내역</BookingTitle>
      </BookingTop>
      <BookingBottom>
        <RatingMark>15</RatingMark>
        <PosterImg alt="poster" src={movieData.image_url} />
        <MovieTitle>{movieData.name}</MovieTitle>
        <Line />
        <MovieDataWrapper>
          <MovieDataUl>
            {MOVIE_INFO.map(item => {
              return (
                <li key={item.id}>
                  <MovieDataIndex>{item.index}</MovieDataIndex>
                  <MovieDataContext>{movieData[item.info]}</MovieDataContext>
                </li>
              );
            })}
          </MovieDataUl>
        </MovieDataWrapper>
      </BookingBottom>
      <GoSeatSelectionBtn>좌석선택 ></GoSeatSelectionBtn>
    </BookingResultContainer>
  );
}

const MOVIE_INFO = [
  { id: 1, index: '상영관', info: 'theater' },
  { id: 2, index: '상영등급', info: 'rating' },
  { id: 3, index: '날짜', info: 'date' },
  { id: 4, index: '상영시간', info: 'time', end: 'end_time' },
];

const BookingResultContainer = styled.div`
  position: relative;
  width: 250px;
  height: 800px;
  border: 1px solid lightgray;
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
  font-size: 24px;
`;

const BookingBottom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 15px;
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

const GoSeatSelectionBtn = styled.button`
  position: absolute;
  width: 250px;
  height: 80px;
  bottom: 0px;
  background: #7063ff;
  color: white;
  font-size: 20px;
  border: 0px;
`;

export default BookingResult;
