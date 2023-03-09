import React from 'react';
import styled from 'styled-components';

function ChartList(props) {
  const { movieChart, sort } = props;
  return (
    <>
      {(sort === '1' || null) &&
        movieChart
          .sort(function (a, b) {
            if (Number(a.grade) < Number(b.grade)) {
              // console.log(a.grade, b.grade);
              return 1;
            }
            if (Number(a.grade) > Number(b.grade)) {
              return -1;
            }
            return 0;
          })
          .map(result => (
            <ChartBox key={result.movieName}>
              <Title />
              <Image src={result.movieThumbnailImageUrl} />
              <TextBox>
                <Title>{result.movieName}</Title>
                <Info>{result.movieSimpleDescription}</Info>
              </TextBox>
              <Ranking>
                <ReservationRate>예매율 {result.bookingRate}</ReservationRate>
                <Opening>
                  개봉일 {result.movieOpeningDate.substr(0, 10)}
                </Opening>
              </Ranking>
              <TicketingBtn>
                <i className="fas fa-calendar-alt" />
                <Ticketing>예매하기</Ticketing>
              </TicketingBtn>
            </ChartBox>
          ))}
    </>
  );
}

const ReservationRate = styled.span`
  font-size: 12px;
  margin-right: 5px;
`;

const Opening = styled.p`
  font-size: 12px;
`;

const ChartBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-self: center;
  align-items: flex-start;
  width: 300px;
  height: 600px;
`;

const Image = styled.img`
  top: 0px;
  width: 100%;
`;
const Title = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
`;
const Info = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 10px;
  line-height: 18px;
  margin-top: 15px;
  margin-bottom: 25px;
`;

const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const TicketingBtn = styled.button`
  position: absolute;
  padding: 10px 25px;
  margin-bottom: -30px;
  bottom: 0px;
  border: 1px solid black;
  width: 100%;
  text-align: center;
  background-color: white;
  &:hover {
    background-color: #6c5ce7;
    color: white;
  }
`;

const Ticketing = styled.span`
  margin-left: 5px;
`;

const Ranking = styled.div`
  margin-bottom: 10px;
`;

export default ChartList;
