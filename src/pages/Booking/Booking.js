import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import BookingTime from './BookingTime';
import BookingResult from './BookingResult';
import DateComponent from './DateComponent';
import SelectMovie from './SelectMovie';
import SelectMovieHeader from './SelectMovieHeader';
import Seats from './Seats/Seats';
import Payment from '../Booking/Payment/Payment';

function Booking({ onClick }) {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [selectedSeatName, setSelectedSeatName] = useState([]);
  const [timetableData, setTimetableData] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const [finalPeopleData, setFinalPeopleData] = useState({});

  const [seatPageToggle, setSeatPageToggle] = useState(false);
  const [paymentPageToggle, setPaymentPageToggle] = useState(false);

  const selectedData = {
    movie: selectedMovie,
    date: selectedDate,
    time: selectedTime,
    seat: selectedSeat,
    seatName: selectedSeatName,
  };

  console.log(selectedData);

  const selectMovie = id => {
    setSelectedMovie(id);
  };

  const selectedTimetableData = timetableData.filter(item => {
    return (
      item.movieId === selectedData.movie && item.date === selectedData.date
    );
  });

  const selectedMovieData = movieList.filter(item => {
    return item.id === selectedData.movie;
  });

  const finalSelectedData = selectedTimetableData.filter(item => {
    return item.startTime === selectedData.time;
  });

  useEffect(() => {
    fetch('http://43.200.63.91:3000/ticketings')
      .then(response => response.json())
      .then(data => {
        setMovieList(data.options.movies);
        setTimetableData(data.options.timetables);
      });
  }, []);

  return (
    <Container>
      {seatPageToggle && !paymentPageToggle && (
        <SeatsAll>
          <Seats
            finalSelectedData={finalSelectedData}
            selectedMovieData={selectedMovieData}
            selectedTimetableData={selectedTimetableData}
            setPaymentPageToggle={setPaymentPageToggle}
            setSelectedSeat={setSelectedSeat}
            selectedSeat={selectedSeat}
            selectedSeatName={selectedSeatName}
            setSelectedSeatName={setSelectedSeatName}
          />
        </SeatsAll>
      )}
      {!seatPageToggle && (
        <BookingAll>
          <SelectMovieHeader
            setPaymentPageToggle={setPaymentPageToggle}
            setSeatPageToggle={setSeatPageToggle}
            text="영화예매"
          />
          <BookingContainer>
            <MovieSelectWrapper>
              <SelectMovie
                selectedMovie={selectedMovie}
                setSelectedMovie={setSelectedMovie}
                selectMovie={selectMovie}
                movieList={movieList}
              />
            </MovieSelectWrapper>
            <DateSelectWrapper>
              <DateComponent
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </DateSelectWrapper>
            <TimeSelectWrapper>
              <BookingTime
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                selectedTimetableData={selectedTimetableData}
              />
            </TimeSelectWrapper>
            <ResulttWrapper>
              <BookingResult
                selectedData={selectedData}
                selectedMovieData={selectedMovieData}
                selectedTimetableData={selectedTimetableData}
                finalSelectedData={finalSelectedData}
              />
              <GoSeatSelectionBtn onClick={() => setSeatPageToggle(true)}>
                좌석선택 →
              </GoSeatSelectionBtn>
            </ResulttWrapper>
          </BookingContainer>
        </BookingAll>
      )}
      {paymentPageToggle && (
        <PaymentAll>
          <Payment
            finalPeopleData={finalPeopleData}
            finalSelectedData={finalSelectedData}
            selectedMovieData={selectedMovieData}
            selectedTimetableData={selectedTimetableData}
            selectedData={selectedData}
            selectedSeat={selectedSeat}
          />
        </PaymentAll>
      )}
      <BgImg src="https://user-images.githubusercontent.com/118322531/223667150-f0012099-85f3-497e-b2cc-dac2cddd087b.png" />
    </Container>
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

const SizeUp = keyframes`
0% {
  opacity: 0;
  scale: 0;
}

100% {
  opacity: 1;
  scale: 1;
}`;

const BgImg = styled.img`
  width: 100vw;
  z-index: 0;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 800px;
  justify-content: center;
  align-items: center;
`;

const BookingAll = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 1350px;
  height: 800px;
  margin-top: 80px;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  z-index: 5;
  -webkit-box-shadow: 3px 5px 9px 5px rgba(0, 0, 0, 0.27);
  box-shadow: 3px 5px 9px 5px rgba(0, 0, 0, 0.27);
  animation: ${SizeUp} 0.5s ease-out;
`;

const BookingContainer = styled.div`
  position: relative;
  display: flex;
`;

const MovieSelectWrapper = styled.div`
  width: 400px;
  border-right: 1px solid lightgray;
  animation: ${FadeIn} 1s;
`;

const DateSelectWrapper = styled.div`
  width: 150px;
  border-right: 1px solid lightgray;
  animation: ${FadeIn} 1s;
  animation-delay: 0.2s;
`;

const TimeSelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 550px;
  border-right: 1px solid lightgray;
`;

const ResulttWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
`;

const GoSeatSelectionBtn = styled.button`
  position: absolute;
  width: 250px;
  height: 80px;
  bottom: 80px;
  font-size: 20px;
  border: 0px;
  background: gray;
  color: white;

  &:hover {
    background: #7063ff;
    color: white;
  }
`;

const SeatsAll = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 1350px;
  height: 800px;
  margin-top: 80px;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  z-index: 10;
  -webkit-box-shadow: 3px 5px 9px 5px rgba(0, 0, 0, 0.27);
  box-shadow: 3px 5px 9px 5px rgba(0, 0, 0, 0.27);
  animation: ${SizeUp} 0.5s ease-out;
`;

const PaymentAll = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 1350px;
  height: 800px;
  margin-top: 80px;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  z-index: 80;
  -webkit-box-shadow: 3px 5px 9px 5px rgba(0, 0, 0, 0.27);
  box-shadow: 3px 5px 9px 5px rgba(0, 0, 0, 0.27);
  animation: ${SizeUp} 0.5s ease-out;
`;

export default Booking;
