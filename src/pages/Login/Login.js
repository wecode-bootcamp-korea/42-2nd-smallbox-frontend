import React from 'react';
import styled from 'styled-components';
import LoginContainer from './LoginContainer';

const StyledLoginContainer = styled(LoginContainer)`
  background-color: white;
  border: 3px solid #ededed;
  border-radius: 8px;
  padding: 50px;
  margin: 70px auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = (...props) => {
  return <StyledLoginContainer />;
};

export default Login;
