import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SelectMovieHeader from '../SelectMovieHeader';

export default function Payment() {
  const [movieData, setMovieData] = useState([]);

  const APP_ADMIN_KEY = process.env.REACT_APP_ADMIN_KEY;

  useEffect(() => {
    fetch('/data/movieData.json')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setMovieData(data.movie[0]);
      });
  }, []);

  const onKakaoPay = () => {
    fetch('/v1/payment/ready', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `KakaoAK ${APP_ADMIN_KEY}`,
      },
      body: new URLSearchParams({
        cid: `TC0ONETIME`,
        partner_order_id: '1',
        partner_user_id: '2',
        item_name: 'ticket',
        quantity: '4',
        total_amount: '240000',
        tax_free_amount: '10000',
        approval_url: 'http://localhost:3000/payment/approval',
        cancel_url: 'http://localhost:3000/payment/cancel',
        fail_url: 'http://localhost:3000/payment/fail',
      }),
    })
      .then(res => res.json())
      .then(result => {
        localStorage.setItem('tid', result.tid);
        window.location.href = result.next_redirect_pc_url;
      });
  };

  return (
    <Container>
      <PaymentContainer>
        <SelectMovieHeader text="결제선택" />
        <MovieInfoContainer>
          <PosterWrapper>
            <PosterImg alt="poster" src={movieData.image_url} />
          </PosterWrapper>
          <RightSection>
            <MovieTitle>{movieData.name}</MovieTitle>
            <Line />
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
            <KakaoPayBtn onClick={onKakaoPay}>카카오페이 결제하기</KakaoPayBtn>
          </RightSection>
        </MovieInfoContainer>
        <CashInfoContainer>
          <CashInfoWrapper>
            <CashInfoHeader>결제정보</CashInfoHeader>
          </CashInfoWrapper>
          {CASH_INFO.map(item => {
            return (
              <CashInfoWrapper key={item.id}>
                <CashInfoTitle>{item.index}</CashInfoTitle>
                <CahsInfoBottomWRapper>
                  <CashInfoContext>{item.info}</CashInfoContext>
                  <CashInfoUnit>원</CashInfoUnit>
                </CahsInfoBottomWRapper>
              </CashInfoWrapper>
            );
          })}
          <CashInfoWrapper>
            <CashInfoTitle>합계</CashInfoTitle>
            <CahsInfoBottomWRapper>
              <CashTotalContext>24,000</CashTotalContext>
              <CashTotalUnit>원</CashTotalUnit>
            </CahsInfoBottomWRapper>
          </CashInfoWrapper>
        </CashInfoContainer>
      </PaymentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const MOVIE_INFO = [
  { id: 1, index: '상영관', info: 'theater' },
  { id: 2, index: '상영등급', info: 'rating' },
  { id: 3, index: '날짜', info: 'date' },
  { id: 4, index: '상영시간', info: 'time', end: 'end_time' },
  { id: 5, index: '인원', info: 'date' },
  { id: 6, index: '좌석', info: 'date' },
];

const CASH_INFO = [
  { id: 1, index: '할인', info: '0' },
  { id: 2, index: '장당', info: '12,000' },
];

const PaymentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 700px;
  border: 1px solid lightgray;
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

const Line = styled.div`
  border-bottom: 2px solid lightgray;
`;

const MovieDataUl = styled.ul`
  margin-top: 20px;
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

const KakaoPayBtn = styled.button`
  position: absolute;
  width: 300px;
  bottom: 0px;
  height: 50px;
  border: 0px;
  background: gray;
  color: white;
  font-size: 15px;
  cursor: pointer;
  z-index: 100;

  &:hover {
    border: 0px;
    background: #7063ff;
    color: white;
    cursor: pointer;
    transition: 0.3s;
  }
`;

const CashInfoContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 400px 200px 200px 200px;
  align-items: center;
  width: 100%;
  height: 150px;
  bottom: 0px;
  background: #dfdfdf;
  border-top: 1px solid lightgray;
`;

const CashInfoHeader = styled.h3`
  margin-left: 20px;
  font-size: 30px;
`;

const CashInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: 300px;
  border-left: 1px solid lightgray;
`;

const CashInfoTitle = styled.span`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 5px;
  color: gray;
`;

const CahsInfoBottomWRapper = styled.div``;

const CashInfoContext = styled.span`
  font-weight: 500;
  font-size: 30px;
  color: black;
`;

const CashInfoUnit = styled.span`
  font-size: 20px;
  color: black;
`;

const CashTotalContext = styled.span`
  font-weight: 500;
  font-size: 30px;
  color: #7063ff;
`;

const CashTotalUnit = styled.span`
  font-size: 15px;
  color: #7063ff;
`;
