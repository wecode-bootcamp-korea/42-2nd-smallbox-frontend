import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

export default function BookingTimeButton({
  item,
  setSelectedTime,
  selectedTime,
  selectedTimetableData,
}) {
  return (
    <TimeSelection
      key={item.id}
      onClick={() => setSelectedTime(prev => item.startTime)}
      isChecked={selectedTime === item.startTime}
      value={item.id}
    >
      <TimeSpanStartToEnd>
        <TimeSpanStart>{item.startTime}</TimeSpanStart>
        <TimeSpanEnd>{item.endTime}</TimeSpanEnd>
      </TimeSpanStartToEnd>
      <Line />
      <TimeSpanSeat>
        {item.availableSeats} / {item.totalSeats}
      </TimeSpanSeat>
    </TimeSelection>
  );
}

const FadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(-5%);
}

100% {
  opacity: 1;
  transform: translateY(0);
}`;

const TimeSelection = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 10px;
  border: 0px;
  background: ${props => (props.isChecked ? '#7063FF' : 'lightgray')};
  scale: ${props => (props.isChecked ? '1' : '0.8')};
  transition: 0.3s;
  animation: ${FadeIn} 0.5s;
`;

const TimeSpanStartToEnd = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  height: 65px;
`;

const TimeSpanStart = styled.span`
  font-size: 22px;
  color: white;
`;

const TimeSpanEnd = styled.span`
  font-size: 18px;
  color: white;
`;

const Line = styled.div`
  width: 90px;
  border-bottom: 1px solid white;
`;

const TimeSpanSeat = styled.span`
  font-size: 12px;
  color: white;
  margin: 5px 0px;
`;
