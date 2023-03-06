import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function PeopleCount({
  setPeopleTotalCount,
  peopleIndex,
  peopleTotalCount,
  reset,
  toggle,
}) {
  const peoplePlus = () => {
    if (peopleTotalCount[peopleIndex] < 8) {
      setPeopleTotalCount(prev => ({
        ...prev,
        [peopleIndex]: peopleTotalCount[peopleIndex] + 1,
      }));
    }
  };
  const peopleMinus = () => {
    if (peopleTotalCount[peopleIndex] > 0) {
      setPeopleTotalCount(prev => ({
        ...prev,
        [peopleIndex]: peopleTotalCount[peopleIndex] - 1,
      }));
    }
  };

  return (
    <>
      <PeoplaSpan>{peopleIndex}</PeoplaSpan>
      <PeopleCountContainer>
        <PeopleMinusBtn onClick={peopleMinus}>-</PeopleMinusBtn>
        <PeopleCountNum>{peopleTotalCount[peopleIndex]}</PeopleCountNum>
        <PeoplePlusBtn onClick={peoplePlus}>+</PeoplePlusBtn>
      </PeopleCountContainer>
    </>
  );
}
export default PeopleCount;

const PeoplaSpan = styled.span`
  font-size: 15px;
`;

const PeopleCountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

const PeopleCountNum = styled.span`
  font-size: 15px;
`;

const PeopleMinusBtn = styled.button`
  width: 30px;
  height: 30px;
  border: 0px;
  border-right: 1px solid lightgray;
  background: transparent;
`;

const PeoplePlusBtn = styled.button`
  width: 30px;
  height: 30px;
  border: 0px;
  border-left: 1px solid lightgray;
  background: transparent;
`;
