import React from 'react';
import styled, { css } from 'styled-components';

function Main() {
  return (
    <MainContainer>
      <VideoWrapper>
        <MainVideo
          alt="mainVideo"
          className="mainVideo"
          src="https://user-images.githubusercontent.com/118322531/221493173-553d56d7-c9b0-4b35-a9a9-51ab2dd85c25.mp4
          "
          autoPlay
          muted
          loop
        />
      </VideoWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 1000vh;
`;

const VideoWrapper = styled.div`
  width: 100vw;
  height: 500px;
  overflow: hidden;
`;

const MainVideo = styled.video`
  width: 100vw;
  margin-top: -250px;
`;

export default Main;
