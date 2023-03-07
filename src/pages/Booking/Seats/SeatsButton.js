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
        name={item.seats}
      >
        {item.seats}
      </SeatsBtn>
    );
  }
  if (item.seatStatus[0].status === '통로') {
    return <SeatsBtnNone key={item.seatStatus[0].timeTableSeatId} />;
  }
  if (item.seatStatus[0].status === '예매 불가능') {
    return (
      <SeatsBtnDisabled key={item.seatStatus[0].timeTableSeatId}>
        {item.seats}
      </SeatsBtnDisabled>
    );
  }
}

export default SeatsButton;

const SeatsBtn = styled.button`
  width: 30px;
  height: 30px;
  padding: 0px;
  color: ${props => (props.isChecked ? `white` : `black`)};
  background: ${props => (props.isChecked ? `#7063ff` : `lightgray`)};
  border: 0px;
  border-radius: 4px;
  text-align: center;
  transition: 0.3s;

  &:hover {
    color: white;
    scale: 1.2;
    background: #7063ff;
    transition: 0.3s;
  }
`;

const SeatsBtnNone = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border: 0px;
  border-radius: 4px;
`;

const SeatsBtnDisabled = styled.button`
  width: 30px;
  height: 30px;
  background: gray;
  border: 1px solid gray;
  border-radius: 4px;
`;
