import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import ReviewLists from './ReviewLists';

const MovieReview = () => {
  const [charmingPoint, setCharmingPoint] = useState([]);
  const [emotionalPoint, setEmotionalPoint] = useState([]);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [inputComment, setInputComment] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [reviewComments, setReviewComments] = useState([]);

  const post = () => {
    setReviewComments(prevState => {
      return [inputComment, ...prevState];
    });
    setInputComment('');
    setOpenReviewModal(false);
  };

  const InputChange = e => {
    setInputComment(e.target.value);
  };
  const userName = '관객아이디';

  return (
    <WholeReviewConstainer>
      <ReviewInfoBox>
        <div className="infoText">
          <BoxText>🙌 이번 영화 관람은 어떠셨나요 ? 🙌</BoxText>
          <p>
            <ReviewCount>2,345 명</ReviewCount>의 실관람객이 평가해주셨습니다.
          </p>
        </div>
        <OpenReviewBtn
          onClick={() => {
            setOpenReviewModal(!openReviewModal);
          }}
        >
          &nbsp;✎ 평점 작성 &nbsp;
        </OpenReviewBtn>
      </ReviewInfoBox>
      {openReviewModal && (
        <ReviewContainer>
          <ReviewModalTitle>
            <ReviewModalTitle>My Review &#9787;</ReviewModalTitle>
            <CloseReviewBtn
              onClick={() => {
                setOpenReviewModal(false);
              }}
            >
              X
            </CloseReviewBtn>
          </ReviewModalTitle>
          <ReviewModalContentBox>
            <ReviewModalInfoBox>
              <ReviewTitleText>
                &nbsp; &nbsp;당신만의 관람 포인트 선택해주세요!&nbsp;&nbsp;
              </ReviewTitleText>
              <p>
                <br />
                <SelectAgainText>중복선택</SelectAgainText>도 가능합니다.
              </p>
            </ReviewModalInfoBox>

            <CheckboxContainer>
              <CheckboxGroup values={charmingPoint} onChange={setCharmingPoint}>
                <SelectPointTitle>✔️ 매력포인트</SelectPointTitle>
                {CHARMING_DATA_LIST.map(charmingList => {
                  return (
                    <Checkbox key={charmingList.id} value={charmingList.title}>
                      {charmingList.title}
                    </Checkbox>
                  );
                })}
              </CheckboxGroup>
              <br />
              <CheckboxGroup
                values={emotionalPoint}
                onChange={setEmotionalPoint}
              >
                <SelectPointTitle>✔️ 감정 포인트</SelectPointTitle>
                {EMOTIOMAL_DATA_LIST.map(emotionalList => {
                  return (
                    <Checkbox
                      key={emotionalList.id}
                      value={emotionalList.title}
                    >
                      {emotionalList.title}
                    </Checkbox>
                  );
                })}
              </CheckboxGroup>

              <br />
            </CheckboxContainer>
            <WriteReview>
              <ReviewInput
                onChange={InputChange}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    post();
                  }
                }}
                onKeyUp={e => {
                  e.target.value.length > 4
                    ? setIsValid(true)
                    : setIsValid(false);
                }}
                type="text"
                value={inputComment}
                placeholder=" 리뷰 작성 (다섯 글자 이상)  "
              />
              <UploadBtn onClick={post} disabled={isValid ? false : true}>
                등록
              </UploadBtn>
            </WriteReview>
          </ReviewModalContentBox>
        </ReviewContainer>
      )}
      <OnlyReviewContainer>
        <ReviewTitle> &#62; Review</ReviewTitle>
        <ReviewCommentContainer>
          {reviewComments.map(reviews => {
            return (
              <ReviewLists
                key={reviews.id}
                userName={userName}
                userReview={reviews}
                charmingPoint={charmingPoint}
                emotionalPoint={emotionalPoint}
              />
            );
          })}
        </ReviewCommentContainer>
      </OnlyReviewContainer>
    </WholeReviewConstainer>
  );
};

const OnlyReviewContainer = styled.div`
  padding: 20px;
`;

const CheckboxContainer = styled.div`
  margin-left: 60px;
`;
const UploadBtn = styled.button`
  width: 100px;
  background-color: #9971ff;
  border: transparent;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  z-index: 1000;
`;

const WriteReview = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
const ReviewInput = styled.input`
  border: transparent;
  border-radius: 10px;
  width: 80%;
  line-height: 100px;
  margin-right: 20px;
  font-size: 17px;

  &:focus,
  &:hover {
    border: 2px solid #9971ff;
  }
`;

const ReviewTitle = styled.p`
  color: #9971ff;
  font-size: 18px;
  font-weight: 600;
  margin: 30px 10px 10px 10px;
`;

const ReviewCommentContainer = styled.div`
  border-top: 2px solid #f1f1f3;
  padding: 20px 20px 0 0px;
  margin: 20px 0 10px 20px;
  width: 100%;
  max-height: 700px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const CloseReviewBtn = styled.button`
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
  color: #57565c;
  margin-top: 4px;
`;

const ReviewModalContentBox = styled.div`
  padding: 20px;
`;

const ReviewModalInfoBox = styled.header`
  text-align: center;
  padding: 30px 0;
`;

const ReviewModalTitle = styled.div`
  background-color: #9971ff;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  border-radius: 5px;
  padding: 6px 10px;
`;

const ReviewTitleText = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: #57565c;
  margin-bottom: 5px;
  display: inline-block;
  border-bottom: 12px solid #fff;
`;

const SelectAgainText = styled.span`
  color: #9971ff;
  font-size: 18px;
  font-weight: 500;
`;
const SelectPointTitle = styled.p`
  color: #57565c;
  font-size: 18px;
  font-weight: 500;
`;

const ReviewContainer = styled.div`
  background-color: #f1f1f3;
  border-radius: 10px;
  margin-top: 20px;
  /* transition-duration: 1ms; */
`;
const OpenReviewBtn = styled.button`
  background-color: #9971ff;
  border: none;
  border-radius: 100px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  -webkit-box-shadow: 17px 23px 25px 5px rgba(0, 0, 0, 0.19);
  box-shadow: 17px 23px 25px 5px rgba(0, 0, 0, 0.19);
  transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
  cursor: pointer;

  &:hover {
    color: #7063ff;
    background: aliceblue;
  }
`;

const ReviewInfoBox = styled.div`
  background-color: #f1f1f3;
  display: flex;
  justify-content: space-between;
  padding: 35px;
  border-radius: 10px;
  -webkit-box-shadow: 17px 23px 25px 5px rgba(0, 0, 0, 0.19);
  box-shadow: 17px 23px 25px 5px rgba(0, 0, 0, 0.19);
  font-weight: 600;
  transition: 0.25s;
`;
const WholeReviewConstainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;
const BoxText = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: #57565c;
  margin-bottom: 15px;
`;

const ReviewCount = styled.span`
  font-size: 17px;
  color: #7063ff;
  font-weight: 600;
`;
export default MovieReview;

const CHARMING_DATA_LIST = [
  { id: 1, title: '감독연출' },
  { id: 2, title: '스토리' },
  { id: 3, title: '영상미' },
  { id: 4, title: '배우연기' },
  { id: 5, title: 'OST' },
];

const EMOTIOMAL_DATA_LIST = [
  { id: 1, title: '스트레스 해소' },
  { id: 2, title: '무서움' },
  { id: 3, title: '현실감' },
  { id: 4, title: '몰입감' },
  { id: 5, title: '긴장감' },
];
