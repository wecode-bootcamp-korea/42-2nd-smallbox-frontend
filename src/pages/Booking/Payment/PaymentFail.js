import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SelectMovieHeader from '../SelectMovieHeader';
import LogoImg from './img/smallbox_logo.png';

export default function PaymentCancell() {
  const navigate = useNavigate();

  return (
    <PaymentApprovalContainer>
      <PaymentContainer>
        <SelectMovieHeader text="결제선택" />
        <MovieInfoContainer>
          <PaymentApprovalTitle>결제에 실패했습니다</PaymentApprovalTitle>
          <GoMainBtn onClick={navigate('/')}>메인으로 돌아가기</GoMainBtn>
        </MovieInfoContainer>
        <CashInfoContainer>
          <SmallBoxLogoImg src={LogoImg} />
        </CashInfoContainer>
      </PaymentContainer>
    </PaymentApprovalContainer>
  );
}

const PaymentApprovalContainer = styled.div`
  display: flex;
  justify-content: center;
`;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  width: 1000px;
`;

const PaymentApprovalTitle = styled.h1`
  margin-top: 50px;
  color: black;
  font-size: 30px;
`;

const CashInfoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  bottom: 0px;
  background: #dfdfdf;
  border-top: 1px solid lightgray;
`;

const SmallBoxLogoImg = styled.img`
  width: 200px;
  opacity: 0.3;
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

  &:hover {
    border: 0px;
    background: #7063ff;
    color: white;
    cursor: pointer;
    transition: 0.3s;
  }
`;
