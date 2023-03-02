import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from './smallbox_logo.png';
import withkakao from './withkakao.png';

const LoginContainer = ({ className }) => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className={className}>
      <SubTitle primary="#676767">감성에 흠뻑 🎬</SubTitle>
      <TitleLogo src={LogoImg} alt="logo" />
      <Textbubble>🍿 편리한 로그인 🍿</Textbubble>
      <LoginButton onClick={handleLogin} src={withkakao} alt="login" />
      <SignIn to="#">아직 회원이 아니신가요?</SignIn>
    </div>
  );
};

const LoginButton = styled.img`
  display: block;
  width: 180px;
  height: 43px;
`;

const TitleLogo = styled.img`
  width: 300px;
`;

const SubTitle = styled.p`
  color: ${props => props.primary};
`;

const SignIn = styled(Link)`
  border-bottom: 0.5px solid #7063ff;
  margin-top: 70px;
  display: inline-block;
  color: #767676;
`;

const Textbubble = styled.div`
  display: inline-block;
  margin: 50px 0 10px 0;
  border-radius: 10px;
  font-size: 12px;
  border-radius: 15px 15px 15px 0;
  border: 3px solid #7063ff;
  padding: 0.5em 0.6em;
`;

export default LoginContainer;
