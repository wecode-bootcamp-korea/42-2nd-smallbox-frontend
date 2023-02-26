import React from 'react';
import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components';

const LoginLoading = ({ loading }) => {
  return (
    <LoadingContainer>
      <LoadingIcon>
        <PropagateLoader
          color="#7063FF"
          cssOverride={overRide}
          loading
          size={40}
          speedMultiplier={1}
        />
      </LoadingIcon>
      <LoadingText>Please Wait...🙏🏻</LoadingText>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

const LoadingIcon = styled.div`
  position: absolute;
`;

const overRide = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'absolute',
  top: '100px',
};

const LoadingText = styled.p`
  font-size: 26px;
  font-weight: 500;
  color: #676767;
`;
export default LoginLoading;
