import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';

export default function DatePicker({
  selectDate,
  setSelectedDate,
  selectedDate,
}) {
  const [value, onChange] = useState(new Date('2023-03-08'));

  function leftPad(value) {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  }

  function toStringByFormatting(source, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
  }

  useEffect(() => {
    setSelectedDate(prev => toStringByFormatting(value));
  }, [value]);

  return (
    <StyledCalendar
      isChecked={selectedDate.includes(toStringByFormatting(value))}
    >
      <Title>날짜</Title>
      <Calendar
        onChange={onChange}
        value={value}
        locale="ko"
        showNeighboringMonth={false}
      />
    </StyledCalendar>
  );
}

const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
`;

const StyledCalendar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  background: white;

  .react-calendar {
    width: 150px;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;
  }

  .react-calendar__navigation__arrow {
    border: 0px;
    display: none;
  }

  .react-calendar__navigation__label {
    border: 0px;
    margin: 20px 0px;
    font-weight: 600;
    font-size: 25px;
    color: #7063ff;
    background: white;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: none;
  }

  .react-calendar__month-view__weekdays {
    display: flex;
    justify-items: center;
  }

  .react-calendar__month-view {
    overflow: hidden;
  }

  .react-calendar__month-view__days {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: -520px;
  }

  .react-calendar__month-view__days__day {
    border: 0px;
    padding: 15px 15px;
    font-size: 20px;
    background: white;
    border-radius: 30px;
    transition: 0.3s;
  }

  .react-calendar__month-view__days__day {
    margin: 0px !important;
  }

  .react-calendar__tile {
    border: 1px solid lightgray;
  }

  .react-calendar__tile--now {
    color: #7063ff;
    background: white;
  }

  .react-calendar__tile--rangeStart {
    background: #7063ff;
    border: 1px solid #7063ff;
    color: white !important;
    transition: 0.3s;
  }

  .react-calendar__tile:enabled:hover {
    background: #7063ff;
    border-radius: 30px;
    padding: 20px 20px;
    font-weight: bold;
    color: white;
    transition: 0.3s;
  }

  .react-calendar__month-view__days__day--weekend {
    color: red;
  }

  .date .saturday {
    color: blue;
  }
`;
