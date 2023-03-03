import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BigIconChange from './BigIconChange';

const SelectMovieMid = ({ movieInfoForm, buttonColor }) => {
  const [movieList, setMovieList] = useState([]);
  const movieListArr = Object.values(movieList);

  // useEffect(() => {
  //   fetch('/data/movieSelect.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       setMovieList(data.options.movies);
  //     });
  // }, []);

  useEffect(() => {
    fetch('http://10.58.52.126:3000/ticketing')
      .then(response => response.json())
      .then(data => {
        setMovieList(data.options.movies);
      });
  }, []);

  return (
    <>
      <WholeTitle>
        <span>전체</span>
      </WholeTitle>
      <TableWrap>
        <TableUl>
          <li>
            <TableLink>예매율순</TableLink>
          </li>
          <li>
            <TableLink>가나다순</TableLink>
          </li>
        </TableUl>
        <div className="tc">
          {movieListArr.map(list => {
            return (
              <BigIconChange
                key={list.id}
                list={list}
                movieInfoForm={movieInfoForm}
                buttonColor={buttonColor}
              />
            );
          })}
        </div>
        <div />
      </TableWrap>
    </>
  );
};
const TableWrap = styled.div`
  margin-left: 25px;
`;

const TableUl = styled.ul`
  margin: 0;
  table-layout: fixed;
  display: table;
  width: 230px;

  li {
    width: 34%;
    display: table-cell;
    padding-left: 55px;
  }
`;
const TableLink = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 15px;
  line-height: 35px;
  height: 35px;

  ::after {
    content: '';
    bottom: 0;
    left: 0;
    display: block;
    height: 2px;
    width: 100%;
    background-color: #828282;

    &active {
      ::before {
        background-color: #7063ff;
        color: white;
      }
    }
  }
`;

const WholeTitle = styled.div`
  position: relative;
  width: 85%;
  margin: 0 25px;

  span {
    border: 2px solid #7063ff;
    border-radius: 15px;
    display: block;
    line-height: 28px;
    height: 33px;
    color: #7063ff;
    text-align: center;
  }
`;

export default SelectMovieMid;
