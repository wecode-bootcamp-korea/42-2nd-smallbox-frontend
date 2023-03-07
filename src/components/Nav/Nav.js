import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './images/smallbox_logo.png';
import searchIcon from './images/icon_search.png';
import loginIcon from './images/icon_login.png';
import mypageIcon from './images/icon_mypage.png';
import useFetch from '../../Hooks/useFetch';

function Nav() {
  const [searchInput, setSearchInput] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  const [recommendData, loading, error] = useFetch('/data/searchResult.json');

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });
  const handleSearchInput = e => setSearchInput(e.target.value);

  useEffect(() => {
    window.addEventListener('click', function (e) {
      if (e.target.contains !== searchWrapper) {
        setSearchInput('');
      }
    });
  }, []);

  const searchWrapper = useRef();

  if (loading) return null;
  if (error) return window.alert('통신에 실패하였습니다');

  const filteredRecommendData = recommendData.movies.filter(item =>
    item.name.replace(' ', '').includes(searchInput)
  );
  return (
    <NavWrapper scrollPosition={scrollPosition}>
      <MenuWrapper>
        <LogoImg alt="logo" src={logo} scrollPosition={scrollPosition} />
        <MenuName scrollPosition={scrollPosition}>영화</MenuName>
        <MenuName scrollPosition={scrollPosition}>예매</MenuName>
        <MenuName scrollPosition={scrollPosition}>영화관 소개</MenuName>
      </MenuWrapper>

      <SearchWrapper ref={searchWrapper}>
        {searchInput && (
          <RecommendSearch>
            {filteredRecommendData.map(item => {
              return <SearchedLink key={item.id}>{item.name}</SearchedLink>;
            })}
          </RecommendSearch>
        )}
        <SearchInput
          placeholder="검색"
          onChange={handleSearchInput}
          value={searchInput}
          scrollPosition={scrollPosition}
        />
        <SearchIcon alt="serachIcon" src={searchIcon} />
      </SearchWrapper>
      <IconWrapper>
        <IconImg
          alt="loginIcon"
          src={loginIcon}
          scrollPosition={scrollPosition}
        />
        <IconImg
          alt="mypageIcon"
          src={mypageIcon}
          scrollPosition={scrollPosition}
        />
      </IconWrapper>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  position: sticky;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100vw;
  height: 80px;
  background: ${props => (props.scrollPosition > 100 ? '#9971ff' : 'white')};
  transition: 0.2s ease-out;
  z-index: 100;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
  gap: 30px;
`;

const LogoImg = styled.img`
  width: 200px;
  cursor: pointer;
  filter: ${props =>
    props.scrollPosition > 100 ? 'invert(100%)' : 'invert(0%)'};
`;

const MenuName = styled(Link)`
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  margin-top: 5px;
  color: ${props => (props.scrollPosition > 100 ? 'white' : 'black')};

  &:hover {
    color: ${props => (props.scrollPosition > 100 ? 'black' : '#7063ff;')};
    transition: 0.3s;
  }
`;

const downFadeAnimation = keyframes`
from {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: 0 0;
}
to {
  opacity: 1;
  transform: scaleY(1);
  transform-origin: 0 0;
}`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RecommendSearch = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  top: 40px;
  width: 600px;
  border-radius: 20px;
  background: white;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.3));
  animation: ${downFadeAnimation} 0.4s ease-out;
`;

const SearchedLink = styled(Link)`
  margin-top: 20px;
  font-size: 15px;
  text-decoration: none;
  color: gray;
`;

const SearchInput = styled.input`
  width: ${props => (props.scrollPosition > 100 ? '600px' : '300px')};
  height: 40px;
  border: 0px;
  border-radius: 30px;
  margin-right: 20px;
  padding-left: 20px;
  background: #e4e4e4;
  outline: none;
  transition: 0.3s ease-out;
  transition-delay: 0.1s;

  &:focus {
    width: 600px;
    color: ${props => (props.scrollPosition > 100 ? '#9971ff' : 'white')};
    background: ${props =>
      props.scrollPosition > 100 ? 'lightgray' : '#9971ff'};
    transition: 0.3s ease-out;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 40px;
  width: 20px;
  cursor: pointer;
`;

const IconImg = styled.img`
  width: 25px;
  cursor: pointer;
  filter: ${props =>
    props.scrollPosition > 100 ? 'invert(100%)' : 'invert(0%)'};
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
  gap: 15px;
`;

export default Nav;
