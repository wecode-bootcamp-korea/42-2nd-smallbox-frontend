import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
// import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const now = new Date();
const todayWeak = now.getDay();
const today = now.getDate();
const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

function DateBooking() {
  // const [daylist, setDaylist] = useState([]);
  // const [weaklist, setWeaklist] = useState([]);
  return (
    <ReserveContainer>
      <MoviePart>
        <ReserveTitle>영화</ReserveTitle>
        <div className="MovieList">영화 목록 가져오기 </div>
      </MoviePart>
      <TheaterPart>
        <ReserveTitle>극장</ReserveTitle>
        <theaterPart />
      </TheaterPart>
      <Daypart>
        <ReserveTitle>날짜</ReserveTitle>
        <div className="reserveDate" />
      </Daypart>
      <TimePart>
        <ReserveTitle>시간</ReserveTitle>
      </TimePart>
    </ReserveContainer>
  );
}

const getAlldate = (today, lastday) => {
  let dates = [];
  dates[0] = today;
  for (let i = 1; i <= 6; i++) {
    today++;
    if (today > lastday) {
      today = 1;
      dates[i] = today;
    } else {
      dates[i] = today;
    }
  }
  return dates;
};

const getAllweak = todayWeak => {
  let strWeak = ['일', '월', '화', '수', '목', '금', '토'];
  let weaklist = [];

  weaklist[0] = strWeak[todayWeak];

  for (let i = 1; i <= 6; i++) {
    todayWeak++;
    if (todayWeak > 6) {
      todayWeak = 0;
      weaklist[i] = strWeak[toBeDisabled];
    } else {
      weaklist[i] = strWeak[todayWeak];
    }
  }
  return weaklist;
};

const calendarDay = getAlldate(today, lastDay);
const CalendarWeak = getAllweak(todayWeak);

// const CalendatObject = [
//   { weak: CalendarWeak[0], day: calendarDay[0] },
//   { weak: CalendarWeak[1], day: calendarDay[1] },
//   { weak: CalendarWeak[2], day: calendarDay[2] },
//   { weak: CalendarWeak[3], day: calendarDay[3] },
//   { weak: CalendarWeak[4], day: calendarDay[4] },
//   { weak: CalendarWeak[5], day: calendarDay[5] },
//   { weak: CalendarWeak[6], day: calendarDay[6] },
// ];

// useEffect(() => {
//   return () => console.log('Clean up');
// });
// const Weak = useRef(null);

const ReserveContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  height: 800px;
`;

const MoviePart = styled.div`
  border: 1px solid #dddddd;
`;

const ReserveTitle = styled.div`
  border-bottom: 1px solid #dddddd;
  background-color: #444444;
  text-align: center;
  color: #dddddd;
  padding: 5px;
  font-size: 13px;
  font-weight: bold;
`;

const TheaterPart = styled.div`
  border: 1px solid #dddddd;
`;

const Daypart = styled.div`
  border: 1px solid #dddddd;
`;

const TimePart = styled.div`
  border: 1px solid #dddddd;
`;

export default DateBooking;
