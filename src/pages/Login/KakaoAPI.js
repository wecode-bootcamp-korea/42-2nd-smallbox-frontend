import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoginLoading from './LoginLoading';

const KakaoAPI = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split('=')[1];

  const getKakaoToken = () => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          postToken(data.access_token);
        } else {
          alert('다시 로그인 해주세요!');
          navigate('/login');
        }
      });
  };

  const postToken = token => {
    fetch('http://10.58.52.168:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          console.log(token);
          navigate('/');
        } else {
          alert('다시 로그인 해주세요!');
          navigate('/login');
        }
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, [location.search]);

  return (
    <div>
      <LoginLoading />
    </div>
  );
};

export default KakaoAPI;
