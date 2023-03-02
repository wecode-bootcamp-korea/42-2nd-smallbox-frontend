import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CharmingGraph from './CharmingGraph';
import MovieReview from './MovieReview';
import DetailImg from './MovieDetailVideoImage/DetailImg';

const MovieDetail = () => {
  const [movieData, setMovieData] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggleBtn, setToggleBtn] = useState(true);

  const {
    movieTumbNailImg,
    movieName,
    movieNameInEnligh,
    director,
    movieActors,
    country,
    movieAgeRating,
    movieRunningTime,
    moiveGenre,
    movieOpeningDate,
    movieDetailDescription,
    // movieStillCut,
    // movieTrailer,
  } = movieData;

  const handleScroll = () => {
    const { scrollY } = window;
    scrollY > 200 && setToggleBtn(!toggleBtn);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toggleBtn(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    fetch('http://10.58.52.179:3000/movies/detail?movieId=10', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(response => response.json())
      .then(data => {
        setMovieData(data.getMovieDetail[0]);
      });
  }, []);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <>
      <WholeContainer>
        <MovieBox>
          <MovieAndDetail>
            <MoviePoster src={movieTumbNailImg} alt="포스터" />
            <AsidePoster>
              <MovieTitle>{movieName}</MovieTitle>
              <EnglishTitle>{movieNameInEnligh}</EnglishTitle>
              <DetailBox>
                <ul>
                  {Detail_LIST.map(category => {
                    return (
                      <DetailTitle key={category.id}>
                        {category.title}
                      </DetailTitle>
                    );
                  })}
                </ul>
                {movieData.director && (
                  <ul>
                    <DetailContext>{director}</DetailContext>
                    <DetailContext>{movieActors.join(' ')}</DetailContext>
                    <DetailContext>{country}</DetailContext>
                    <DetailContext>{movieAgeRating}세 관람가</DetailContext>
                    <DetailContext>{movieRunningTime}분</DetailContext>
                    <DetailContext>{moiveGenre.join(' ')}</DetailContext>
                    <DetailContext>{movieOpeningDate}</DetailContext>
                  </ul>
                )}
              </DetailBox>
              <BookingButton>예매하기🎬</BookingButton>
            </AsidePoster>
          </MovieAndDetail>
          <DesBox className="description">
            <Destitle>줄거리</Destitle>
            <br />
            <DesContent>
              <span>{movieDetailDescription}</span>
            </DesContent>
            <DetailImg />
          </DesBox>
          <CharmingGraph />
          <MovieReview />
        </MovieBox>
        <div className="logoplace" />

        {/* <img src={movieStillCut[0]} alt="이미지" /> */}
      </WholeContainer>
      <ButtonBox>
        <ScrollBtn
          right={scrollPosition > 100 ? '0px' : '-30px'}
          width="136px"
          scrollPosition={scrollPosition}
        >
          예매하기
        </ScrollBtn>

        <ScrollBtn
          right={scrollPosition > 100 ? '-50px' : '-100px'}
          width="50px"
          scrollPosition={scrollPosition}
          onClick={goToTop}
        >
          Up
        </ScrollBtn>
      </ButtonBox>
    </>
  );
};
const ButtonBox = styled.div`
  right: 50%;
  margin-right: -548px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 80px;
  min-height: 50px;
  text-align: center;
  z-index: 7;
`;

const ScrollBtn = styled.button`
  opacity: 1;
  pointer-events: auto;
  position: absolute;
  left: auto;
  right: ${props => props.right};
  opacity: ${props => (props.scrollPosition > 100 ? '1' : '0')};
  width: ${props => props.width};
  padding: 12px 0 14px;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  background-image: linear-gradient(to left, navy, #9971ff);
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 30%);
  border-radius: 25px;
  transition: right 0.5s;
  cursor: pointer;
  border: 1px solid white;

  &:disabled {
    cursor: default;
  }
`;

const DesBox = styled.div`
  padding: 70px 30px 50px 60px;
`;

const Destitle = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

const DesContent = styled.div`
  font-size: 18px;
  color: #817f7f;
  margin-top: 50px;
  width: 89%;
  line-height: 60px;
`;

const BookingButton = styled.button`
  border-radius: 5em;
  background: #f9f9f9;
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.2);
  margin: 20px 0 0 5px;
  color: gray;
  width: 100%;
  height: 80px;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #7063ff;
    border-color: #7063ff;
  }
`;

const DetailTitle = styled.li`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 600;
  border-left: 4px solid #7063ff;
  padding-left: 6px;
`;

const DetailContext = styled.li`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 300;
  padding-top: 2px;
  text-overflow: hidden;
`;

const DetailBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 5px;
`;
const EnglishTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  padding: 40px 0;
  text-align: center;
`;

const MovieTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  padding: 30px 0;
  text-overflow: ellipsis;
  word-break: break-all;
  border-bottom: 12px solid #f1f1f3;
  padding-bottom: 0;
  text-align: center;
`;
const AsidePoster = styled.div`
  width: 40%;
  margin-left: 60px;
  padding-top: 50px;
`;

const WholeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const MovieBox = styled.div`
  width: 80%;
  border: 5px solid #f1f1f3;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  word-break: break-all;
`;

const MovieAndDetail = styled.div`
  width: 100%;
  display: flex;
`;
const MoviePoster = styled.img`
  width: 580px;
  height: auto;
  border-radius: 10px;
  filter: drop-shadow(10px 10px 10px #000);
`;
export default MovieDetail;

const Detail_LIST = [
  { id: 1, title: '감독' },
  { id: 2, title: '출연' },
  { id: 3, title: '국가' },
  { id: 4, title: '등급' },
  { id: 5, title: '상영시간' },
  { id: 6, title: '장르' },
  { id: 7, title: '개봉일' },
];
