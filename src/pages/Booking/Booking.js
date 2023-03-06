import React from 'react';
import styled from 'styled-components';
import BookingTime from './BookingTime';
import BookingResult from './BookingResult';
import DateComponent from './DateComponent';

function Booking() {
  return (
    <BookingContainer>
      <BookingTime />
      <BookingResult />
      <DateComponent />
    </BookingContainer>
  );
}

const BookingContainer = styled.div`
  display: flex;
`;
export default Booking;
