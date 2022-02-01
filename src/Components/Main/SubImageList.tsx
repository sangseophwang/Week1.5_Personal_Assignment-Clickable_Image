import { ImageListProps } from "Types";
import styled, { css } from "styled-components";
import DiscountIcon from "Assets/DiscountIcon.png";

export default function SubImageList({
  productList,
  selectedImage,
  onSelectImage,
}: ImageListProps) {
  return (
    <Container>
      <Wrapper>
        {productList.map((element) => {
          const isSelected = element.productId === selectedImage;
          return (
            <ImageContainer
              isSelected={isSelected}
              key={element.productId}
              onClick={() =>
                onSelectImage(isSelected ? null : element.productId)
              }
            >
              <Image imageUrl={element.imageUrl}>
                {!element.outside && (
                  <DiscountBadge>
                    {element.discountRate}
                    <span>%</span>
                  </DiscountBadge>
                )}
              </Image>
            </ImageContainer>
          );
        })}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
`;

const ImageContainer = styled.div<{ isSelected: boolean }>`
  margin: 28px 6px;
  position: relative;
  ${({ isSelected }) =>
    isSelected &&
    css`
      background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
      border-radius: 18px;
      margin: 26px 4px;
      padding: 2px;
    `}
`;

const Image = styled.div<{ imageUrl: string }>`
  width: 106px;
  height: 106px;
  position: relative;
  border: 0.5px solid #aaafb9;
  background-position: center center;
  background-size: cover;
  border-radius: 16px;
  user-select: none;
  cursor: pointer;
  background-image: url(${({ imageUrl }) => imageUrl});
`;

const DiscountBadge = styled.div`
  position: absolute;
  right: 5px;
  width: 24px;
  height: 28px;
  font-size: 11px;
  font-weight: 700;
  line-height: 25px;
  color: white;
  padding-left: 1px;
  text-align: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${DiscountIcon});
  span {
    font-size: 8px;
  }
`;
