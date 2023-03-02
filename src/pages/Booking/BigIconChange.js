import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';

const BigIconChange = ({ list, movieInfoForm }) => {
  const { movieTitle, rating, releaseDate, movieThumbnail } = list;

  const ageColor = {
    12: theme.ageGreen,
    15: theme.ageOrange,
    18: theme.ageRed,
  };

  return (
    <BigIconList>
      {movieInfoForm === 'thumnail' ? (
        <Link to="#">
          <BigIconImg>
            <img src={movieThumbnail} alt="movieImg" />
          </BigIconImg>
          <BigIconText>
            <MovieTitle>
              <AgeLimit color={ageColor[rating]}>{rating}</AgeLimit>&nbsp;
              {movieTitle}
            </MovieTitle>
            <MovieDataUl>
              <MovieDatali>
                <em>예매율</em>
                <span>20%</span>
              </MovieDatali>
              <MovieDatali>
                <em>개봉일</em>
                <span>{releaseDate}</span>
              </MovieDatali>
            </MovieDataUl>
          </BigIconText>
        </Link>
      ) : (
        <MovieTitle>
          <AgeLimit color={ageColor[rating]}>{rating}</AgeLimit>&nbsp;
          {movieTitle}
        </MovieTitle>
      )}
    </BigIconList>
  );
};

const BigIconList = styled.div`
  position: relative;
  overflow: visible;
  display: block;
  margin-top: 20px;
  width: 90%;
  display: table;
  table-layout: fixed;
  border-radius: 5px;
  margin-left: 5px;
  cursor: pointer;

  &:hover,
  &:active {
    color: white;
    background-color: #7063ff;
  }
`;
const BigIconImg = styled.span`
  display: table-cell;
  vertical-align: middle;

  img {
    display: block;
    width: 85px;
    height: 105px;
  }
`;
const BigIconText = styled.span`
  display: table-cell;
  vertical-align: middle;
  padding-left: 10px;
`;
const MovieTitle = styled.strong`
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  font-size: 18px;
  color: black;
  font-weight: 700;
  padding: 5px 0;
`;

const AgeLimit = styled.i`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  display: inline-block;
  color: #fff;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  font-weight: 700;
  padding-top: 2px;
  background: ${props => props.color};
`;

const MovieDataUl = styled.ul`
  margin-top: 10px;
`;
const MovieDatali = styled.li`
  display: table;
  table-layout: fixed;
  width: 100%;
  line-height: 14px;
  height: 14px;
  color: #999;
  font-size: 14px;

  em {
    width: 40px;
    padding-right: 5px;
    vertical-align: middle;
  }
`;
export default BigIconChange;
