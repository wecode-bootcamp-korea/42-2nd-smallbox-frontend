import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SelectMovieHeader from '../SelectMovieHeader';

export default function Payment({
  selectedData,
  selectedSeat,
  selectedMovieData,
  selectedTimetableData,
  finalPeopleData,
  finalSeats,
}) {
  const APP_ADMIN_KEY = process.env.REACT_APP_ADMIN_KEY;
  const USER_TOKEN = localStorage.getItem('token');

  const quantity = selectedSeat.length;
  const total_amount = 12000 * selectedSeat.length;

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
        quantity: quantity,
        total_amount: total_amount,
        tax_free_amount: '0',
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

    fetch('http://43.200.63.91:3000/ticketings/seats/reservation', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8',
        Authorization: USER_TOKEN,
      },
      body: JSON.stringify({
        timeTableSeatId: selectedSeat,
      }),
    }).then(result => {
      console.log(result);
    });
  };

  console.log(selectedMovieData);
  console.log(selectedTimetableData);

  const MOVIE_INFO = [
    { id: 1, index: '상영관', info: '1관' },
    {
      id: 2,
      index: '상영등급',
      info: `${selectedMovieData[0]?.rating}` + '세 이상',
    },
    { id: 3, index: '날짜', info: `${selectedTimetableData[0]?.date}` },
    { id: 4, index: '상영시간', info: `${selectedData.time}` },
    { id: 5, index: '인원', info: `${selectedSeat.length}` + '명' },
    { id: 6, index: '좌석', info: `${selectedData.seatName.join(',')}` },
  ];

  return (
    <Container>
      <PaymentContainer>
        <SelectMovieHeader text="결제선택" />
        <MovieInfoContainer>
          <PosterWrapper>
            <PosterImg
              alt="poster"
              src={selectedMovieData[0]?.movieThumbnail}
            />
          </PosterWrapper>
          <RightSection>
            <MovieTitle>{selectedMovieData[0]?.movieTitle}</MovieTitle>
            <Line />
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
              <CashTotalContext>{12000 * selectedSeat.length}</CashTotalContext>
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

const CASH_INFO = [
  { id: 1, index: '할인', info: '0' },
  { id: 2, index: '장당', info: '12,000' },
];

const PaymentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
`;

const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
  width: 100%;
`;

const PosterWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 420px;
`;

const PosterImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const RightSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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
  height: 70px;
  border: 0px;
  border-radius: 10px;
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
  grid-template-columns: 700px 200px 200px 200px;
  align-items: center;
  width: 100%;
  height: 150px;
  bottom: 0px;
  background: #dfdfdf;
  border-top: 1px solid lightgray;
`;

const CashInfoHeader = styled.h3`
  margin-left: 70px;
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
