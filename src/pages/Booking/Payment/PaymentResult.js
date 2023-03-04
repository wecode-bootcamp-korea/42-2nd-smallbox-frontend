import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import CheckMark from './img/check-mark.png';

export default function PaymentResult() {
  const [movieData, setMovieData] = useState([]);
  const navigate = useNavigate();

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
    <PaymentResultContainer>
      <CheckImg alt="check" src={CheckMark} />
      <PaymentResultTitle>예매가 완료되었습니다!</PaymentResultTitle>
      <PaymentContainer>
        <MovieInfoContainer>
          <PosterWrapper>
            <PosterImg alt="poster" src={movieData.image_url} />
          </PosterWrapper>
          <RightSection>
            <MovieTitle>{movieData.name}</MovieTitle>
            <LineA />
            <MovieDataUl>
              {MOVIE_INFO.map(item => {
                return (
                  <li key={item.id}>
                    <MovieDataIndex>{item.index}</MovieDataIndex>
                    <MovieDataContext>{movieData[item.info]}</MovieDataContext>
                  </li>
                );
              })}
              <LineB />
              <CashInfoWrapper>
                <CashInfoTitle>결제 금액</CashInfoTitle>
                <CashTotalContext>24,000</CashTotalContext>
                <CashTotalUnit>원</CashTotalUnit>
              </CashInfoWrapper>
              <LineB />
            </MovieDataUl>
          </RightSection>
        </MovieInfoContainer>
      </PaymentContainer>
      <GoMainBtn onClick={navigate('/')}>메인으로 돌아가기</GoMainBtn>
    </PaymentResultContainer>
  );
}

const MOVIE_INFO = [
  { id: 1, index: '상영관', info: 'theater' },
  { id: 2, index: '상영등급', info: 'rating' },
  { id: 3, index: '날짜', info: 'date' },
  { id: 4, index: '상영시간', info: 'time', end: 'end_time' },
  { id: 5, index: '인원', info: 'date' },
  { id: 6, index: '좌석', info: 'date' },
];

const FadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(-10%);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
}`;

const PaymentResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const PaymentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 800px;
  height: 500px;
  border: 1px solid lightgray;
  border-radius: 10px;
  animation: ${FadeIn} 1s;
`;

const CheckImg = styled.img`
  width: 30px;
  animation: ${FadeIn} 1s;
`;

const PaymentResultTitle = styled.h1`
  margin-top: 20px;
  color: #7063ff;
  font-size: 30px;
  animation: ${FadeIn} 1s;
`;

const GoMainBtn = styled.button`
  width: 300px;
  bottom: 0px;
  height: 50px;
  margin-top: 40px;
  border: 0px;
  background: gray;
  color: white;
  font-size: 15px;
  cursor: pointer;
  z-index: 100;
  animation: ${FadeIn} 2s;

  &:hover {
    border: 0px;
    background: #7063ff;
    color: white;
    cursor: pointer;
    transition: 0.3s;
  }
`;

const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  width: 1000px;
`;

const PosterWrapper = styled.div`
  display: flex;
  width: 260px;
  height: 380px;
`;

const PosterImg = styled.img`
  width: 100%;
  height: 100%;
`;

const RightSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content; center;
  margin-top: 30px;
  margin-left: 80px;
  width: 300px;
`;

const MovieTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 30px;
`;

const LineA = styled.div`
  margin-bottom: 20px;
  border-bottom: 2px solid gray;
`;

const LineB = styled.div`
  margin: 15px 0px;
  border-bottom: 1px solid lightgray;
`;

const MovieDataUl = styled.ul`
  margin: 30x 0px;
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

const CashInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
`;

const CashInfoTitle = styled.span`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 5px;
  color: gray;
`;

const CashTotalContext = styled.span`
  margin-left: 20px;
  font-weight: 500;
  font-size: 30px;
  color: #7063ff;
`;

const CashTotalUnit = styled.span`
  font-size: 15px;
  color: #7063ff;
`;
