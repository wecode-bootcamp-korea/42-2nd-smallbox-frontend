import React, { useState } from 'react';
import styled from 'styled-components';
import FOOTER_LIST from './FooterData';
import FooterInfo from './FooterInfo';

function Footer() {
  const [siteMove, setSiteMove] = useState();

  return (
    <ListDiv>
      <ListUl>
        {FOOTER_LIST.map(info => (
          <List key={info.id}>
            <ALink href={info.link}>{info.list}</ALink>
          </List>
        ))}
      </ListUl>
      <Article>
        <div>
          <p>[04377]서울특별시 용산구 한강대로 23길 59, 아파몰 6층(한강로등)</p>
          <p>
            대표이사:허민회 사업자등록번호 : 104-81-45690 통신판매업신고번호 :
            2017 서울용산-0662 사업자정보확인
          </p>
          <p>
            호스팅사업자 : CJ올리브네트웍스 개인정보보호 책임자 심준범
            대표이메일 : cjcgvmaster@cj.net
          </p>
          <p>© CJ CGV.AII Rights Reserved</p>
        </div>
        <FooterInfo />
      </Article>
    </ListDiv>
  );
}

const ListDiv = styled.div`
  min-width: 1040px;
  padding: 190px 0 0 14px;
  background-color: #f8f8f8;
`;

const ListUl = styled.ul`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  margin: 0 auto;
  padding: 23px 0;
  border-bottom: 1px solid #ebebeb;
`;

const List = styled.li`
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  color: black;
  &:hover {
    text-decoration: underline;
  }
  &:nth-child(7) {
    text-decoration: underline;
    font-weight: bold;
  }
`;
const ALink = styled.a`
  color: inherit;
`;
const Article = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 980px;
  margin: 0 auto;
  padding: 23px 0;
  font-size: 13px;
  line-height: 20px;
`;

export default Footer;
