import { useState } from "react";
import styled from "styled-components";
import Coupon from "Assets/Coupon.png";
import CloseIcon from "Assets/CloseIcon_White.png";

export default function EventBar() {
  const [close, setClose] = useState<boolean>(false);
  const handleClick = () => {
    setClose(true);
  };
  return (
    <>
      {!close ? (
        <Container>
          <Wrapper>
            <Image src={Coupon} alt="쿠폰 이미지" />
            <Title>
              첫 구매 고객님! 앱으로 최대 50,000원 즉시 할인 혜택 누려보세요!
            </Title>
            <Image src={Coupon} alt="쿠폰 이미지" />
          </Wrapper>
          <CloseButton onClick={handleClick}>
            <Icon src={CloseIcon} alt="닫기 버튼 이미지" />
          </CloseButton>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

const Container = styled.section`
  height: 55px;
  width: 100%;
  display: flex;
  padding-left: 80px;
  align-items: center;
  background-color: #f8ae0f;
`;

const Wrapper = styled.div`
  width: calc(100% - 156px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Image = styled.img`
  height: 32px;
  width: 60px;
`;

const Title = styled.h3`
  color: white;
  font-size: 16px;
  margin: 0 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const CloseButton = styled.div`
  width: 76px;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
