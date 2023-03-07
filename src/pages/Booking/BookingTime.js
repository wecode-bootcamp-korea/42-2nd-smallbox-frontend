import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import dayIcon from './images/icon_day.png';
import nightIcon from './images/icon_night.png';
import BookingTimeButton from './BookingTimeButton';
import { previousDay } from 'date-fns';

function BookingTime({ setSelectedTime, selectedTime, selectedTimetableData }) {
  const [timeData, setTimeData] = useState([]);

  return (
    <BookingTimeContainer>
      <BookingTop>
        <BookingTitle>상영시간</BookingTitle>
        <DayNightIcons>
          <Icon alt="dayIcon" src={dayIcon} />
          <IconSpan>조조</IconSpan>
          <Icon alt="nightIcon" src={nightIcon} />
          <IconSpan>심야</IconSpan>
        </DayNightIcons>
      </BookingTop>
      <BookingBottom>
        {selectedTimetableData.map(item => {
          return (
            <BookingTimeButton
              key={item.id}
              item={item}
              value={item.id}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              selectedTimetableData={selectedTimetableData}
            />
          );
        })}
      </BookingBottom>
    </BookingTimeContainer>
  );
}
const BookingTimeContainer = styled.div`
  width: 500px;
  height: 800px;
`;

const BookingTop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70px;
`;

const BookingTitle = styled.h2`
  margin: 0 auto;
  font-weight: 700;
  font-size: 20px;
`;

const DayNightIcons = styled.div`
  position: absolute;
  justify-self: end;
  right: 30px;
`;

const Icon = styled.img`
  width: 15px;
  margin-left: 10px;
`;

const IconSpan = styled.span`
  font-size: 15px;
  margin-left: 5px;
`;

const BookingBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
  gap: 15px;
`;

export default BookingTime;
