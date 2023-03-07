import React, { useState } from 'react';
import DatePicker from './DatePicker';
import { ko } from 'date-fns/locale';
import styled from 'styled-components';

function DateComponent({ selectDate, setSelectedDate, selectedDate }) {
  return (
    <BookingDateContainer>
      <DatePicker
        locale={ko}
        endDate={12}
        selectDate={new Date()}
        labelFormat="MMMM"
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
    </BookingDateContainer>
  );
}

export default DateComponent;

const BookingDateContainer = styled.div`
  height: 700px;
  overflow-y: scroll;
  z-index: 0;
`;
