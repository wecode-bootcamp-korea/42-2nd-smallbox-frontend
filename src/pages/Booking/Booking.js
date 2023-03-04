import React from 'react';
import styled from 'styled-components';
import BookingTime from './BookingTime';
import BookingResult from './BookingResult';

function Booking() {
  return (
    <BookingContainer>
      <BookingTime />
      <BookingResult />
    </BookingContainer>
  );
}

const BookingContainer = styled.div`
  display: flex;
`;
export default Booking;
