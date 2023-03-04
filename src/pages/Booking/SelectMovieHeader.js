import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import resetIcon from './resetIcon.png';

const SelectMovieHeader = ({ text }) => {
  return (
    <div>
      <BookingContainer>
        <BookingHeader>
          <HeaderTitle>{text}</HeaderTitle>
          <HeaderLeftUl>
            <li>
              <Link to="#">
                <LeftImg src={resetIcon} alt="다시예매하기" />
                <ResetText>예매 다시하기</ResetText>
              </Link>
            </li>
          </HeaderLeftUl>
          <HeaderRightUl>
            <li>
              <BookingGuide>예매가이드</BookingGuide>
            </li>
            <li>
              <English>ENG</English>
            </li>
          </HeaderRightUl>
        </BookingHeader>
      </BookingContainer>
    </div>
  );
};

const BookingContainer = styled.div`
  position: relative;
  width: 100%;
  word-wrap: break-word;
  word-break: keep-all;
`;

const BookingHeader = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #2f313d;
  z-index: 5;
  text-align: center;
`;
const HeaderTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  display: inline-block;
  color: white;
  font-weight: 500;
  line-height: 90px;
`;

const HeaderLeftUl = styled.ul`
  top: 20px;
  left: 30px;
  position: absolute;
`;
const LeftImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const ResetText = styled.span`
  color: #97989e;
  font-size: 18px;
  line-height: 47px;
`;

const HeaderRightUl = styled.ul`
  position: absolute;
  top: 20px;
  right: 30px;
  line-height: 47px;

  li {
    display: inline-block;
  }
`;

const BookingGuide = styled(Link)`
  color: #97989e;
  position: relative;
  margin-right: 10px;
`;

const English = styled(Link)`
  border: #97989e 1px solid;
  color: #97989e;
  border-radius: 14px;
  line-height: 26px;
  height: 28px;
  display: block;
  padding: 0 10px;
`;

export default SelectMovieHeader;
