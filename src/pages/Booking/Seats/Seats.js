import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PeopleCount from './PeopleCount';
import SeatsButton from './SeatsButton';
import SelectMovieHeader from '../SelectMovieHeader';

function Seats({
  finalSelectedData,
  selectedMovieData,
  selectedTimetableData,
  setPaymentPageToggle,
  finalPeopleData,
  setSelectedSeat,
  selectedSeat,
  setFinalPeopleData,
  setSelectedSeatName,
  selectedSeatName,
}) {
  const [movieData, setMovieData] = useState([]);
  const [seatsData, setSeatsData] = useState([]);

  const [toggle, setToggle] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const initCountValue = {
    성인: 0,
    대학생: 0,
    청소년: 0,
    우대: 0,
  };

  const [peopleTotalCount, setPeopleTotalCount] = useState(initCountValue);

  const peopleTotalSum = Object.values(peopleTotalCount).reduce(
    (a, b) => a + b,
    0
  );

  useEffect(() => {
    fetch(
      `http://43.200.63.91:3000/ticketings/${finalSelectedData[0]?.timetableId}`
    )
      .then(response => response.json())
      .then(data => {
        setSeatsData(data.result);
      });
  }, []);

  const isNotZero = currentValue => currentValue > 0;

  const reset = () => {
    setPeopleTotalCount(initCountValue);
    setSelectedSeat([]);
    setToggle(() => !toggle);
  };

  const addSeats = e => {
    if (peopleTotalSum > selectedSeat.length) {
      setSelectedSeat(prev => [...prev, e.target.value]);
      setSelectedSeatName(prev => [...prev, e.target.name]);
    }
    if (peopleTotalSum <= selectedSeat.length) {
      window.alert('선택한 인원수를 초과하였습니다');
    }
  };

  const removeSeats = e => {
    setSelectedSeat(prev => prev.filter(item => item !== e.target.value));
    setSelectedSeatName(prev => prev.filter(item => item !== e.target.name));
  };

  const peopleList = Object.entries(peopleTotalCount).map(([key, value]) => {
    if (value > 0) {
      return `${key}(${value}) \n`;
    }
  });
  const SEATS_RESULT_SECTION = [
    {
      id: 1,
      index: '등급',
      context: `${selectedMovieData[0]?.rating}세 이상`,
    },
    { id: 2, index: '날짜', context: `${finalSelectedData[0]?.date}` },
    { id: 3, index: '시간', context: `${finalSelectedData[0]?.startTime}` },
    {
      id: 4,
      index: '인원',
      context: `${peopleList?.join(' ')}`,
    },
    {
      id: 5,
      index: '좌석',
      context: `${selectedSeatName.join(',')}`,
    },
  ];
  return (
    <>
      <SelectMovieHeader text="좌석선택" />
      <SeatsContainer>
        <PeopleContainer>
          <BookingTop>
            <BookingTitle>인원선택</BookingTitle>
          </BookingTop>
          <BookingBottom>
            {PEOPLE_INDEX.map(item => {
              return (
                <PeopleCount
                  key={item.id}
                  peopleIndex={item.name}
                  setPeopleTotalCount={setPeopleTotalCount}
                  peopleTotalCount={peopleTotalCount}
                  reset={reset}
                  toggle={toggle}
                />
              );
            })}
            <NoticeSpan>
              인원선택은
              <br />
              최대 8명까지 가능합니다
            </NoticeSpan>
          </BookingBottom>
          <GoBookingBtn> ← 영화선택 </GoBookingBtn>
        </PeopleContainer>
        <SeatsSelectContainer>
          <ScreenWrapper>
            <ScreenLine /> <ScreenText>Screen</ScreenText>
          </ScreenWrapper>
          <SeatsButtonContainer>
            {seatsData.map(item => {
              return (
                <SeatsButton
                  key={item.seatStatus[0].timeTableSeatId}
                  item={item}
                  selectedSeat={selectedSeat}
                  peopleTotalSum={peopleTotalSum}
                  addSeats={e => addSeats(e)}
                  removeSeats={e => removeSeats(e)}
                  toggle={toggle}
                />
              );
            })}
          </SeatsButtonContainer>
          <SeatsSelectInfo>
            <ColorBoxGray /> <ColorBoxSpan>일반석</ColorBoxSpan>
            <ColorBoxViolet /> <ColorBoxSpan>현재선택</ColorBoxSpan>
            <ColorBoxBlue /> <ColorBoxSpan>판매중</ColorBoxSpan>
            <ColorBoxBlack /> <ColorBoxSpan>판매완료</ColorBoxSpan>
            <RemainingSeatsContainer>
              <RemainingSeatsSpan>잔여좌석</RemainingSeatsSpan>
              <RemainingSeatsSpanColored>22</RemainingSeatsSpanColored>
              <RemainingSeatsSpan>/39</RemainingSeatsSpan>
            </RemainingSeatsContainer>
          </SeatsSelectInfo>
        </SeatsSelectContainer>
        <SeatsResultContainer>
          <BookingTop>
            <BookingTitle>구매내역</BookingTitle>
          </BookingTop>
          <MovieTitle>{selectedMovieData[0]?.movieTitle}</MovieTitle>
          <Line />
          <MovieDataWrapper>
            <ul>
              {SEATS_RESULT_SECTION.map(item => {
                return (
                  <li key={item.id}>
                    <MovieDataSpan>
                      <MovieDataIndex>{item.index}</MovieDataIndex>
                      <MovieDataContext>{item.context}</MovieDataContext>
                    </MovieDataSpan>
                  </li>
                );
              })}
            </ul>
          </MovieDataWrapper>
          <TimeInfoWrapper>
            <TimeInfoTitle>현재선택 상영시간</TimeInfoTitle>
            <TimeInfoTime>{finalSelectedData[0]?.startTime}</TimeInfoTime>
            <TimeInfoBtn>상영시간 변경</TimeInfoBtn>
          </TimeInfoWrapper>
          <GoPayBtn onClick={() => setPaymentPageToggle(true)}>결제 →</GoPayBtn>
        </SeatsResultContainer>
      </SeatsContainer>
    </>
  );
}

const SeatsContainer = styled.div`
  display: flex;
  flex-direcion: row;
  width: 100%;
`;

const PeopleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 800px;
  border-right: 1px solid lightgray;
`;

const SeatsSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 70px;
  width: 800px;
  height: 650px;
  border-bottom: 1px solid lightgray;
`;

const SeatsSelectInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 0px;
  width: 100%;
  height: 80px;
  background: #e7e7e7;
  border-top: 1px solid lightgray;
`;

const ColorBoxGray = styled.div`
  margin-left: 30px;
  width: 15px;
  height: 15px;
  background: lightgray;
`;

const ColorBoxViolet = styled.div`
  margin-left: 30px;
  width: 15px;
  height: 15px;
  background: #7063ff;
`;

const ColorBoxBlue = styled.div`
  margin-left: 30px;
  width: 15px;
  height: 15px;
  background: indigo;
`;

const ColorBoxBlack = styled.div`
  margin-left: 30px;
  width: 15px;
  height: 15px;
  background: black;
`;

const ColorBoxSpan = styled.span`
  margin-left: 5px;
  color: gray;
  font-size: 12px;
`;

const RemainingSeatsContainer = styled.div`
  position: absolute;
  right: 50px;
`;

const RemainingSeatsSpan = styled.span`
  margin-left: 2px;
  font-size: 15px;
`;

const RemainingSeatsSpanColored = styled.span`
  margin-left: 2px;
  font-size: 15px;
  color: #7063ff;
`;

const BookingTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
`;

const BookingTitle = styled.h2`
  margin: 0 auto;
  font-weight: 700;
  font-size: 24px;
`;

const BookingBottom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2px 20px;
`;

const GoBookingBtn = styled.button`
  position: absolute;
  bottom: 0px;
  background: #7063ff;
  border: 0px;
  font-size: 20px;
  color: white;
  width: 100%;
  height: 80px;
`;

const NoticeSpan = styled.span`
  white-space: pre-wrap;
  line-height: 15px;
  font-size: 12px;
  color: gray;
`;

const SeatsResultContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 720px;
  border-left: 1px solid lightgray;
`;

const MovieTitle = styled.h3`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Line = styled.div`
  margin: 0 auto;
  width: 180px;
  border-bottom: 2px solid black;
`;

const MovieDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  height: 100%;
`;

const MovieDataIndex = styled.p`
  width: 50px;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
`;

const MovieDataSpan = styled.div`
  display: flex;
`;

const MovieDataContext = styled.span`
  font-size: 15px;
  color: #949494;
  line-height: 25px;
  white-space: pre-line;
`;

const SeatsDataWrapper = styled.div`
  display: flex;
  gap: 45px;
`;

const SeatsDataContext = styled.span`
  font-size: 15px;
  color: #7063ff;
  line-height: 25px;
`;

const TimeInfoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: 80px;
  width: 100%;
  height: 150px;
  background: #3e3e3e;
`;

const TimeInfoTitle = styled.h2`
  font-weight: 600;
  font-size: 15px;
  color: white;
`;

const TimeInfoTime = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #7063ff;
`;

const TimeInfoBtn = styled.button`
  padding: 8px 15px;
  border: 2px solid #7063ff;
  border-radius: 30px;
  bottom: 0px;
  font-size: 15px;
  font-weight: 600;
  color: #7063ff;
  background: transparent;
`;

const GoPayBtn = styled.button`
  position: absolute;
  bottom: 0px;
  background: gray;
  border: 0px;
  font-size: 20px;
  color: white;
  width: 100%;
  height: 80px;

  &:hover {
    background: #7063ff;
    color: white;
  }
`;

const SeatsButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: 1fr;
  gap: 10px;
  margin-top: 40px;
  width: 400px;
`;
const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: ceneter;
  margin-top: 40px;
  width: 400px;
`;

const ScreenLine = styled.div`
  width: 90%;
  border-bottom: 3px solid gray;
`;

const ScreenText = styled.h3`
  margin-top: 10px;
  font-size: 30px;
  color: gray;
`;

const PEOPLE_INDEX = [
  { id: 1, name: '성인' },
  { id: 2, name: '대학생' },
  { id: 3, name: '청소년' },
  { id: 4, name: '우대' },
];

export default Seats;
