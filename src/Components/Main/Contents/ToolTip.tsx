import styled, { css } from "styled-components";
import { productList } from "Types";
import ArrowIcon from "Assets/Icons/ArrowIcon.png";
import TooltipIcon from "Assets/Icons/TooltipIcon.png";

export default function ToolTip({
  imageUrl,
  productName,
  outside,
  priceDiscount,
  productId,
  priceOriginal,
  pointX,
  pointY,
  discountRate,
}: productList) {
  const imageHeight: number = 500;
  const imageWidth: number = 400;

  const isRightSide = pointY * 1.58 + 11 > imageWidth;
  const isBottomSide = pointX * 1.6 > imageHeight;

  return (
    <Container isRightSide={isRightSide} isBottomSide={isBottomSide}>
      <Image src={imageUrl} alt="설명 이미지" />
      <TextContainer>
        <Name>{productName}</Name>
        <PriceContainer>
          {outside && <EstimatedPrice>예상가</EstimatedPrice>}
          <Discount>
            {!outside && <span>{discountRate}%</span>}
            {priceDiscount.toLocaleString("ko-KR")}
          </Discount>
        </PriceContainer>
      </TextContainer>
      <IconContainer>
        <Icon src={ArrowIcon} alt="이동 아이콘" />
      </IconContainer>
    </Container>
  );
}

const Container = styled.div<{ isRightSide: boolean; isBottomSide: boolean }>`
  position: absolute;
  z-index: 99;
  top: 28px;
  left: -20px;
  display: flex;
  align-items: center;
  padding: 8px 0 8px 8px;
  width: 220px;
  margin-top: 16px;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;

  &::before {
    content: "";
    position: absolute;
    background-image: url(${TooltipIcon});
    background-size: cover;
    width: 12px;
    height: 8px;
    top: -8px;
    left: 34px;
    z-index: 99;
  }

  ${({ isBottomSide }) =>
    isBottomSide &&
    css`
      top: unset;
      bottom: 52px;
      &::before {
        transform: rotate(180deg);
        top: unset;
        bottom: -8px;
      }
    `}

  ${({ isRightSide }) =>
    isRightSide &&
    css`
      left: -160px;
      &::before {
        right: 42px;
        left: unset;
      }
    `}
`;

const Image = styled.img`
  background-position: center;
  background-size: cover;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  border-radius: 4px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
  width: 112px;
  padding-bottom: 2px;
  overflow: hidden;
  text-align: left;
  color: #4a4a4a;
`;

const Name = styled.div`
  width: 100%;
  color: #333c45;
  text-overflow: ellipsis;
  line-height: 18.2px;
  text-align: left;
  font-size: 14px;
  overflow: hidden;
`;

const PriceContainer = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
`;

const EstimatedPrice = styled.span`
  color: #898f94;
  font-size: 11px;
  line-height: 13.2px;
  font-weight: 700;
  margin-right: 4px;
`;

const Discount = styled.div`
  display: flex;
  align-items: center;
  line-height: 13.2px;
  color: #181d1f;
  font-size: 16px;
  font-weight: 700;
  span {
    color: #ff585d;
    margin-right: 4px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  margin: auto 2px 0 0;
  align-items: flex-end;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
