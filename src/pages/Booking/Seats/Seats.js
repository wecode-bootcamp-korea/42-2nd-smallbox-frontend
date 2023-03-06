import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PeopleCount from './PeopleCount';
import resetIcon from './images/icon_reset.png';
import SeatsButton from './SeatsButton';

function Seats() {
  const [movieData, setMovieData] = useState([]);
  const [seatsData, setSeatsData] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState([]);
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
    fetch('/data/SeatsData.json')
      .then(response => response.json())
      .then(data => {
        setSeatsData(data);
      });
  }, []);

  const isNotZero = currentValue => currentValue > 0;

  const reset = () => {
    setPeopleTotalCount(initCountValue);
    setSelectedSeat([]);
    setToggle(() => !toggle);
  };
  const addSeats = e => {
    if (peopleTotalSum > selectedSeat.length)
      setSelectedSeat(prev => [...prev, e.target.value]);
    if (peopleTotalSum <= selectedSeat.length) {
      window.alert('선택한 인원수를 초과하였습니다');
    }
  };

  useEffect(() => {
    fetch('/data/movieData.json')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setMovieData(data.movie[0]);
      });
  }, []);

  const removeSeats = e => {
    setSelectedSeat(prev => prev.filter(item => item !== e.target.value));
  };

  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderResetIcon alt="resetIcon" src={resetIcon} />
          <HeaderResetSpan onClick={reset}>예매 다시하기</HeaderResetSpan>
        </HeaderLeft>
        <HeaderCenter>
          <HeaderCenterTitle>좌석선택</HeaderCenterTitle>
        </HeaderCenter>
        <HeaderRight>
          <HeaderRightSpan>예매 가이드</HeaderRightSpan>
        </HeaderRight>
      </HeaderContainer>
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
          <MovieTitle>잠 못 이루는 밤</MovieTitle>
          <Line />
          <MovieDataWrapper>
            <MovieDataIndex>
              <ul>
                <li>상영관</li>
                <li>상영등급</li>
                <li>날짜</li>
                <li>상영시간</li>
                <li>인원</li>
              </ul>
            </MovieDataIndex>
            <MovieDataContext>
              <ul>
                <li>{movieData.theater}</li>
                <li>{movieData.rating}</li>
                <li>{movieData.date}</li>
                <li>{movieData.time}</li>
                <li>
                  {Object.values(peopleTotalCount).some(isNotZero) ? null : (
                    <div>&nbsp;</div>
                  )}
                  {Object.entries(peopleTotalCount).map(([key, value]) => {
                    if (value > 0)
                      return (
                        <div key={key}>
                          {key}({value})
                        </div>
                      );
                  })}
                </li>
              </ul>
            </MovieDataContext>
          </MovieDataWrapper>
          <SeatsDataWrapper>
            <MovieDataIndex>좌석</MovieDataIndex>
            <MovieDataContext>{selectedSeat.join()}</MovieDataContext>
          </SeatsDataWrapper>
          <TimeInfoWrapper>
            <TimeInfoTitle>현재선택 상영시간</TimeInfoTitle>
            <TimeInfoTime>{movieData.time}</TimeInfoTime>
            <TimeInfoBtn>상영시간 변경</TimeInfoBtn>
          </TimeInfoWrapper>
          <GoPayBtn>결제 →</GoPayBtn>
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

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 70px;
  background: #3e3e3e;
`;

const HeaderLeft = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 30px;
  width: 200px;
`;

const HeaderRight = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 30px;
`;

const HeaderRightSpan = styled.span`
  font-size: 15px;
  color: lightgray;
`;

const HeaderCenter = styled.h2`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HeaderCenterTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin-right: auto;
  color: white;
`;

const HeaderResetIcon = styled.img`
  width: 20px;
  filter: invert(90%);
`;

const HeaderResetSpan = styled.span`
  margin-left: 10px;
  font-size: 15px;
  color: lightgray;
`;

const PeopleContainer = styled.div`
  position: relative;
  width: 200px;
  height: 600px;
  border: 1px solid lightgray;
`;

const SeatsSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 600px;
  height: 600px;
  border-bottom: 1px solid lightgray;
`;

const SeatsSelectInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 0px;
  width: 600px;
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
  align-content: center;
  align-items: center;
  height: 70px;
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
  width: 200px;
  height: 600px;
  border: 1px solid lightgray;
`;

const MovieTitle = styled.h3`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin: 15px 0px;
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
`;

const MovieDataIndex = styled.span`
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
`;

const MovieDataContext = styled.span`
  font-size: 15px;
  color: #949494;
  line-height: 25px;
`;

const SeatsDataWrapper = styled.div`
  display: flex;
  margin-left: 16px;
  gap: 45px;
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
  font-size: 15px;
  font-weight: 600;
  color: #7063ff;
  background: transparent;
`;

const GoPayBtn = styled.button`
  position: absolute;
  bottom: 0px;
  background: #7063ff;
  border: 0px;
  font-size: 20px;
  color: white;
  width: 100%;
  height: 80px;
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
