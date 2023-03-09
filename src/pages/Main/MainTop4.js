import React from 'react';
import styled from 'styled-components';
import laurel from './laurel.png';

const MainTop4 = () => {
  return (
    <TopList4Container>
      <Top4TitleBox>
        <Icon src={laurel} alt="laurel" />
        <Top4Title>
          small box 의
          <br />
          <Hotkeyword> &nbsp;&nbsp;핫 키워드</Hotkeyword> 영화 TOP4&nbsp;&nbsp;
        </Top4Title>
        <Icon src={laurel} alt="laurel" />
      </Top4TitleBox>
      <TopListBox>
        {TOP_FOUR_LIST.map(toplist => {
          return (
            <Top4WholeContainer key={toplist.id}>
              <TopListImgAndContext>
                <TopListImg src={toplist.movieThumbnail} alt="movieposter" />
                <Top4ContextContainer>
                  <Top4TitleText>{toplist.movieTitle}</Top4TitleText>
                  <Top4SubTitleText>
                    &#10077; {toplist.movieSubTitle} &#10078;
                  </Top4SubTitleText>
                  <br />
                  <Top4SubTitleText>
                    - {toplist.movieContent} -
                  </Top4SubTitleText>
                </Top4ContextContainer>
              </TopListImgAndContext>
            </Top4WholeContainer>
          );
        })}
      </TopListBox>
    </TopList4Container>
  );
};
const Top4WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top4ContextContainer = styled.div`
  // background-color: RGB(228 228 228);
  padding: 30px;
  // border-radius: 20px;
  word-break: break-all;
  overflow-x: hidden;
`;

const Top4TitleText = styled.p`
  font-size: 25px;
  line-height: 30px;
  font-weight: 500;
  text-shadow: 1px 1px 1px #676767;
`;
const Top4SubTitleText = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: #676767;
`;

const TopListImgAndContext = styled.div`
  padding: 10px;
  border-radius: 20px;
  box-shadow: 21px 17px 28px -4px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 21px 17px 28px -4px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 21px 17px 28px -4px rgba(0, 0, 0, 0.36);
  transition: 0.3s;

  &:hover {
    scale: 1.1;
    transition: 0.3s;
  }
`;

const Hotkeyword = styled.span`
  color: #9971ff;
`;
const TopList4Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 200px;
`;
const TopListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
  gap: 100px;
`;
const TopListImg = styled.img`
  border-radius: 15px;
  width: 380px;
  height: 500px;
  padding: 10px;
  /* margin-bottom: 30px; */
  // box-shadow: 21px 17px 28px -4px rgba(0, 0, 0, 0.36);
  // -webkit-box-shadow: 21px 17px 28px -4px rgba(0, 0, 0, 0.36);
  // -moz-box-shadow: 21px 17px 28px -4px rgba(0, 0, 0, 0.36);
`;

const Top4TitleBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const Top4Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  line-height: 45px;
  /* border-bottom: 5px solid #f1f1f3; */
  border-radius: 20px;
  color: black;
  padding-bottom: -10px;
  /* text-shadow: 1px 1px 1px black; */
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
`;
export default MainTop4;
const TOP_FOUR_LIST = [
  {
    id: 1,
    movieTitle: '꿈의 문',
    movieSubTitle: 'Documentary AWARDS',
    movieContent: '무명 배우들의 꿈을 향한 원데이 클래스 ',
    movieThumbnail:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster4.png?raw=true',
  },
  {
    id: 2,
    movieTitle: '선키스드 드림',
    movieSubTitle: '2015 Robinson Int Film Competition',
    movieContent: '눈부시게 찬란한 첫 사랑',
    movieThumbnail:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster12.png?raw=true',
  },
  {
    id: 3,
    movieTitle: '에밀리의 불행한 여름',
    movieSubTitle: '소피아 듀랭 감동 데뷔작',
    movieContent: '어떤 비밀은 모르는게 더 나아 ',
    movieThumbnail:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster9.png?raw=true',
  },
  {
    id: 4,
    movieTitle: '잠 못 이루는 밤',
    movieSubTitle: 'Official Selection festival de Cannes',
    movieContent: '인생의 가장 놀라운 순간!',
    movieThumbnail:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster1.png?raw=true',
  },
];
