import React from 'react';
import TheaterLocation from './TheaterLocation';
import styled from 'styled-components';
import logoImg from './smallbox_logo.png';

const Theater = () => {
  const PageTitleLogo = styled.img`
    margin-left: 80px;
  `;
  const TheaterConceptText = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    margin-bottom: 100px;
  `;
  return (
    <TheaterContainer>
      <div>
        <PageTitleLogo src={logoImg} alt="logo" />
        <TheaterConceptText>
          다양한 장르에서 보다 감성적인 인디영화에 포커스를 두어 <br />주
          매니아층 & 다양한 테마에서 컨셉에 맞는 영화를 즐기고자 하는 인디영화
          입문자들을 위한
          <br /> 시각적 뿐만아니라 공간적으로 다양한 즐거움, 그리고 특별한
          경험을 선사하는 문화공간입니다.
          <br />
          최고사양의 프로젝터, 스피커 와 프리미엄급 좌석과 함께 감정에
          젖어보세요.
        </TheaterConceptText>
      </div>
      <TheaterImgContainer>
        {THEATER_IMG_LIST.map(imgList => {
          return (
            <TeaterImgAndText key={imgList.id}>
              <TheaterImg src={imgList.src} alt="theaterImg" />
              <InfoTextBox>
                <InfoText>
                  <InfoTextTitle>{imgList.title}</InfoTextTitle>
                  {imgList.model}
                </InfoText>
                <InfoText>{imgList.info}</InfoText>
              </InfoTextBox>
            </TeaterImgAndText>
          );
        })}
      </TheaterImgContainer>
      <ContactAndMap>
        <ContactDetail>
          <LogoImg src={logoImg} />
          {CONTACT_DETAIL.map(detail => {
            return (
              <ul key={detail.id}>
                <ContactTitle>{detail.title}</ContactTitle>
                <br />
                <ContactText>{detail.context1}</ContactText>
                <ContactText>{detail.context2}</ContactText>
                <br />
                <br />
              </ul>
            );
          })}
        </ContactDetail>
        <TheaterLocation />
      </ContactAndMap>
    </TheaterContainer>
  );
};

export default Theater;

const TeaterImgAndText = styled.div`
  margin-right: 40px;
`;

const TheaterImg = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 20px;
`;

const LogoImg = styled.img`
  width: 450px;
`;

const TheaterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

const TheaterImgContainer = styled.div`
  display: flex;
  margin-bottom: 100px;
`;

const InfoTextBox = styled.div`
  margin: 20px 0;
`;

const InfoText = styled.p`
  font-size: 17px;
  color: #767676;
  line-height: 30px;
`;

const InfoTextTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: black;
  border-right: 1px solid black;
  padding-right: 10px;
  margin-right: 10px;
`;
const ContactTitle = styled.li`
  font-weight: 800;
  font-size: 20px;
  border-left: 5px solid #9971ff;
  padding-left: 10px;
`;
const ContactText = styled.li`
  font-size: 18px;
  line-height: 25px;
`;

const ContactDetail = styled.div`
  padding: 0 50px;
`;

const ContactAndMap = styled.div`
  display: flex;
  justify-content: space-around;
  border: 10px solid #f0f3f4;

  padding: 50px;
  overflow-x: auto;
  border-radius: 20px;
`;

const THEATER_IMG_LIST = [
  {
    id: 1,
    src: 'https://user-images.githubusercontent.com/118322531/223039372-e541efb1-c506-4d17-98ed-d6f075e03f13.png',
    title: 'Projector',
    model: 'Hayley pure RGB laster projector',
    info: '생동감 있게 작품 본연의 색과 디테일을 구현',
  },
  {
    id: 2,
    src: 'https://user-images.githubusercontent.com/118322531/223039416-cfd95375-480c-42a2-bdf8-f04ba8115479.png',
    title: 'Seats',
    model: 'Laralina-SMART SEATS',
    info: '편안하고 쾌적한 프리미엄급 좌석',
  },
  {
    id: 3,
    src: 'https://user-images.githubusercontent.com/118322531/223039411-f37dbe02-bb94-48e4-8f66-79ea91a993a0.png',
    title: 'Sound',
    model: 'Sam-Surround 10.1 / Sam-Atmos',
    info: '온전히 영화에 몰입되는 입체적인 사운드',
  },
];

const CONTACT_DETAIL = [
  {
    id: 1,
    title: '📞 CONTACT US',
    context1: '주소 : 서울특별시 강남 테헤란로 427',
    context2: 'Tel : 070-123-4567 | Fax : 02-234-1234 | samllbox@movie.co.kr',
  },
  {
    id: 2,
    title: '📍 오시는 길',
    context1: '선릉역 10번 출구 기준 도보 7분 소요',
    context2: '선정릉역 도보이용시 약 15분 소요',
  },
];
