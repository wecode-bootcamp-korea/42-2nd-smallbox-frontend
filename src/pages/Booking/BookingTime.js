import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dayIcon from './images/icon_day.png';
import nightIcon from './images/icon_night.png';

function BookingTime() {
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    fetch('/data/bookingTimeData.json')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setTimeData(data.times);
      });
  }, []);

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
        {timeData.map(item => {
          return (
            <TimeSelection key={item.id}>
              <TimeSpanStartToEnd>
                <TimeSpanStart>{item.start_time}</TimeSpanStart>
                <TimeSpanEnd>{item.end_time}</TimeSpanEnd>
              </TimeSpanStartToEnd>
              <Line />
              <TimeSpanSeat>{item.seat}</TimeSpanSeat>
            </TimeSelection>
          );
        })}
      </BookingBottom>
    </BookingTimeContainer>
  );
}

const BookingTimeContainer = styled.div`
  width: 500px;
  height: 800px;
  border: 1px solid lightgray;
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
  font-size: 24px;
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

const TimeSelection = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 10px;
  border: 0px;
  background: #b2b2b2;

  &:hover {
    background: #7063ff;
    cursor: pointer;
  }
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

export default BookingTime;
