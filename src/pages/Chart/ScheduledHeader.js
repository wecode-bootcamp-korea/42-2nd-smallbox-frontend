import { React } from 'react';
import styled from 'styled-components';

function ScheduledHeader() {
  return (
    <Header>
      <HeaderBox>
        <Strong>무비차트</Strong>
        <UnorderedList>
          <ALink href="/chart?sort=1">무비차트</ALink>
          <ALink href="/scheduled">개봉순</ALink>
        </UnorderedList>
      </HeaderBox>
    </Header>
  );
}

const Header = styled.div`
  font-size: 24px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
`;

const HeaderBox = styled.div`
  width: 100%;
`;

const UnorderedList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Strong = styled.strong`
  padding-left: 30px;
`;

const ALink = styled.a`
  font-size: 15px;
  margin-right: 10px;
  &:hover {
    color: #9b59b6;
  }
`;

export default ScheduledHeader;
