import React, { useState } from 'react';
import styled from 'styled-components';
import SelectMovieHeader from './SelectMovieHeader';
import SelectMovieTop from './SelectMovieTop';
import SelectMovieMid from './SelectMovieMid';

const SelectMovie = () => {
  const [movieInfoForm, setMovieInfoForm] = useState('thumnail');

  return (
    <BookingPageDiv>
      <SelectMovieHeader />
      <Movie>
        <SelectMovieTop setMovieInfoForm={setMovieInfoForm} />
        <SelectMovieMid movieInfoForm={movieInfoForm} />
      </Movie>
    </BookingPageDiv>
  );
};

const BookingPageDiv = styled.div`
  width: 75%;
  height: 700px;
  word-wrap: break-word;
  word-break: keep-all;
`;

const Movie = styled.div`
  width: 30%;
`;

export default SelectMovie;
