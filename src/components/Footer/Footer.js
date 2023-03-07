import React from 'react';
import styled from 'styled-components';
import FOOTER_LIST from './FooterData';
import FooterInfo from './FooterInfo';

function Footer() {
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
          <p>[12345] 서울특별시 강남구 테헤란로 427</p>
          <p>
            대표이사: Laralina 사업자등록번호 : 402-494-3930 통신판매업신고번호
            : 2017 서울강남-0222
          </p>
          <p>
            호스팅사업자 : CJ올리브네트웍스 개인정보보호 책임자 심준범
            대표이메일 : small_box@smallbox.co.kr
          </p>
          <p> © small_box </p>
        </div>
        <FooterInfo />
      </Article>
    </ListDiv>
  );
}

const ListDiv = styled.div`
  padding: 50px 0 0 14px;
  margin-top: 50px;
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
