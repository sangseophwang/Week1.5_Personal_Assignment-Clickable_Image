import { TitleInterface } from "Types";
import styled from "styled-components";

export default function Title() {
  const titleData: TitleInterface = {
    title: "화이트, 우드, 라탄! 세 가지 컨셉으로 꾸민 내 방",
    tags: ["방꾸미기", "우드톤", "화이트", "라탄"],
    locker: 93,
    comments: 0,
    date: "2022.01.12 17:55",
  };

  return (
    <Container>
      <Date>{titleData.date}</Date>
      <Topic>{titleData.title}</Topic>
      {titleData.tags.map((element, index) => (
        <HashTag key={index}>#{element}</HashTag>
      ))}
      <UserInfoWrapper>
        <InfoTitle>보관함</InfoTitle>
        <InfoData>{titleData.locker}</InfoData>
        <InfoTitle>댓글</InfoTitle>
        <InfoData>{titleData.comments}</InfoData>
      </UserInfoWrapper>
    </Container>
  );
}

const Container = styled.header`
  padding: 10px 0;
`;

const Date = styled.p`
  font-size: 10px;
  color: #646464;
  font-weight: 100;
  padding: 0px 0px 8px;
  letter-spacing: 0.5px;
`;

const Topic = styled.h1`
  display: flex;
  align-items: center;
  font-size: 27px;
  font-weight: 900;
  height: 48px;
`;

const HashTag = styled.span`
  font-size: 15px;
  color: #646464;
  margin-right: 20px;
`;

const UserInfoWrapper = styled.div`
  height: 60px;
  display: flex;
  font-size: 15px;
  align-items: center;
`;

const InfoTitle = styled.span`
  color: #afafaf;
  margin-right: 5px;
`;

const InfoData = styled.span`
  color: #333333;
  margin-right: 15px;
`;
