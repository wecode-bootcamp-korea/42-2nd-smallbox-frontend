import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function SeatsButton({
  item,
  selectedSeat,
  addSeats,
  removeSeats,
  peopleTotalSum,
  toggle,
}) {
  const isChecked = selectedSeat.includes(
    String(item.seatStatus[0].timeTableSeatId)
  );
  if (item.seatStatus[0].status === '예매 가능') {
    return (
      <SeatsBtn
        onClick={e => {
          isChecked ? removeSeats(e) : addSeats(e);
        }}
        isChecked={isChecked}
        value={item.seatStatus[0].timeTableSeatId}
      >
        {item.seatStatus[0].timeTableSeatId}
      </SeatsBtn>
    );
  }
  if (item.seatStatus[0].status === '통로') {
    return <SeatsBtnNone key={item.seatStatus[0].timeTableSeatId} />;
  }
  if (item.seatStatus[0].status === '예매 불가능') {
    return (
      <SeatsBtnDisabled key={item.seatStatus[0].timeTableSeatId}>
        {item.seatStatus[0].timeTableSeatId}
      </SeatsBtnDisabled>
    );
  }
}

export default SeatsButton;

const SeatsBtn = styled.button`
  width: 25px;
  height: 25px;
  padding: 0px;
  color: ${props => (props.isChecked ? `white` : `black`)};
  background: ${props => (props.isChecked ? `#7063ff` : `lightgray`)};
  border: ${props =>
    props.isChecked ? `1px solid #7063ff` : `1px solid gray`};
  text-align: center;

  &:active {
    background: violet;
    color: white;
    border: 1px solid violet;
  }
`;

const SeatsBtnNone = styled.button`
  width: 25px;
  height: 25px;
  background: transparent;
  border: 0px;
`;

const SeatsBtnDisabled = styled.button`
  width: 25px;
  height: 25px;
  background: gray;
  border: 1px solid gray;
`;
