import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BigIconChange from './BigIconChange';

const SelectMovieMid = ({
  movieInfoForm,
  buttonColor,
  setSelectedMovie,
  selectedMovie,
  selectMovie,
  movieList,
}) => {
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
        <Tc>
          {movieList.map(list => {
            return (
              <BigIconChange
                key={list.id}
                list={list}
                movieInfoForm={movieInfoForm}
                buttonColor={buttonColor}
                selectMovie={selectMovie}
                selectedMovie={selectedMovie}
              />
            );
          })}
        </Tc>
        <div />
      </TableWrap>
    </>
  );
};
const TableWrap = styled.div``;

const TableUl = styled.ul`
  margin: 0;
  table-layout: fixed;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;

  li {
    width: 100px;
    display: table-cell;
  }
`;
const TableLink = styled(Link)`
  display: block;
  width: 100px;
  text-align: center;
  font-size: 15px;
  line-height: 35px;
  height: 35px;
  margin-top: 20px;

  ::after {
    content: '';
    bottom: 0;
    left: 0;
    display: block;
    height: 2px;
    width: 100px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-y: scroll;

  span {
    justify-self: center;
    border: 2px solid #7063ff;
    border-radius: 15px;
    display: block;
    line-height: 28px;
    width: 300px;
    height: 33px;
    color: #7063ff;
    text-align: center;
  }
`;

const Tc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SelectMovieMid;
