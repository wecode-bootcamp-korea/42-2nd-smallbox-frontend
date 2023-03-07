import React, { useState } from 'react';
import styled from 'styled-components';
import listIcon from './listIcon.png';
import squareIcon from './square.png';

const SelectMovieTop = ({ setMovieInfoForm }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <ContainerTop>
      <h2>영화</h2>
      <TopRight>
        <TopButton
          color={toggle ? 'lightgray' : '#7063ff'}
          background={listIcon}
          onClick={() => {
            setMovieInfoForm('list');
            setToggle(!toggle);
          }}
        />
        &nbsp;
        <TopButton
          color={toggle ? '#7063ff' : 'lightgray'}
          background={squareIcon}
          onClick={() => {
            setMovieInfoForm('thumnail');
            setToggle(!toggle);
          }}
        />
      </TopRight>
    </ContainerTop>
  );
};

const ContainerTop = styled.div`
  position: relative;
  padding: 30px 0 18px;
  width: 400px;
  text-align: center;

  h2 {
    font-size: 19px;
    font-weight: 700;
  }
`;
const TopRight = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const TopButton = styled.button`
  position: relative;
  width: 19px;
  height: 19px;
  display: inline-block;
  border: ${props => props.color} 2px solid;
  color: ${props => props.color};
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: 19px;
  background-position: center;

  cursor: pointer;

  &:active,
  &:foucus {
    background-color: #7063ff;
    color: white;
  }
`;

export default SelectMovieTop;
