import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SelectMovieHeader from '../SelectMovieHeader';
import PropagateLoader from 'react-spinners/PropagateLoader';
import LogoImg from './img/smallbox_logo.png';

export default function PaymentApproval() {
  const location = useLocation();
  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState([]);

  const PG_TOKEN = location.search.split('=')[1];
  const APP_ADMIN_KEY = process.env.REACT_APP_ADMIN_KEY;
  const TID = localStorage.getItem('tid');
  const USER_TOKEN = localStorage.getItem('token');
  const ORDER_NUMBER = localStorage.getItem('orderNumber');

  useEffect(() => {
    fetch('/v1/payment/approve', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `KakaoAK ${APP_ADMIN_KEY}`,
      },
      body: new URLSearchParams({
        cid: `TC0ONETIME`,
        tid: TID,
        partner_order_id: '1',
        partner_user_id: '2',
        pg_token: PG_TOKEN,
      }),
    })
      .then(res => res.json())
      .then(result => {
        setPaymentData(result);
      });
  }, []);

  const onFinalResult = () => {
    fetch('http://43.200.63.91:3000/orders/payment', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8',
        Authorization: USER_TOKEN,
      },
      body: JSON.stringify({
        paymentData,
        // orderNumber,
      }),
    })
      .then(res => res.json())
      .then(result => {
        localStorage.setItem('orderNumber', result.orderNumber);
      })
      .then(navigate('/payment/result'));
  };

  return (
    <PaymentApprovalContainer>
      <PaymentContainer>
        {/* <SelectMovieHeader text="결제선택" /> */}
        <MovieInfoContainer>
          <PropagateLoader color="#7063FF" />
          <PaymentApprovalTitle>결제가 진행중입니다</PaymentApprovalTitle>
          <PaymentApprovalContext>
            아래 버튼을 누르면 결제가 완료됩니다
          </PaymentApprovalContext>
          <KakaoPayBtn onClick={onFinalResult}>결제 완료</KakaoPayBtn>
          {/* <SmallBoxLogoImg src={LogoImg} /> */}
        </MovieInfoContainer>
        {/* <CashInfoContainer /> */}
      </PaymentContainer>
    </PaymentApprovalContainer>
  );
}

const PaymentApprovalContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const PaymentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 700px;
  // border: 1px solid lightgray;
`;

const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  width: 1000px;
`;

const PaymentApprovalTitle = styled.h1`
  margin-top: 50px;
  color: #7063ff;
  font-size: 30px;
`;

const PaymentApprovalContext = styled.h3`
  margin-top: 20px;
  color: gray;
  font-size: 15px;
`;

const KakaoPayBtn = styled.button`
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  bottom: 0px;
  background: #dfdfdf;
  border-top: 1px solid lightgray;
`;

const SmallBoxLogoImg = styled.img`
  width: 200px;
  opacity: 0.3;
`;
