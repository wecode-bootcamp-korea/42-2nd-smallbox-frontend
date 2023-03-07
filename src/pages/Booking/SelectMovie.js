import React, { useState } from 'react';
import styled from 'styled-components';
import SelectMovieHeader from './SelectMovieHeader';
import SelectMovieTop from './SelectMovieTop';
import SelectMovieMid from './SelectMovieMid';

const SelectMovie = ({
  selectedMovie,
  setSelectedMovie,
  selectMovie,
  movieList,
}) => {
  const [movieInfoForm, setMovieInfoForm] = useState('thumnail');

  return (
    <BookingPageDiv>
      <Movie>
        <SelectMovieTop setMovieInfoForm={setMovieInfoForm} />
        <SelectMovieMid
          movieInfoForm={movieInfoForm}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          selectMovie={selectMovie}
          movieList={movieList}
        />
      </Movie>
    </BookingPageDiv>
  );
};

const BookingPageDiv = styled.div`
  width: 400px;
  height: 700px;
  display: flex;
  justify-content: center;
  word-wrap: break-word;
  word-break: keep-all;
  overflow-y: scroll;
`;

const Movie = styled.div`
  width: 400px;
`;

export default SelectMovie;
