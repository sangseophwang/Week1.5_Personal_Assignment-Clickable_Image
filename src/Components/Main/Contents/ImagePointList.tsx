import { ImageListProps } from "Types";
import ToolTip from "Components/Main/Contents/ToolTip";
import styled from "styled-components";
import PointIcon from "Assets/Icons/PointIcon.png";
import CloseIcon from "Assets/Icons/CloseIcon_Red.png";

export default function ImagePointList({
  productList,
  selectedImage,
  onSelectImage,
}: ImageListProps) {
  return (
    <>
      {productList.map((element) => {
        const isSelected = element.productId === selectedImage;
        return (
          <PointContainer
            key={element.productId}
            X={element.pointX}
            Y={element.pointY}
            onClick={() => onSelectImage(isSelected ? null : element.productId)}
          >
            {isSelected ? <Point src={CloseIcon} /> : <Point src={PointIcon} />}
            {isSelected && (
              <ToolTip
                imageUrl={element.imageUrl}
                productName={element.productName}
                outside={element.outside}
                pointX={element.pointX}
                pointY={element.pointY}
                priceDiscount={element.priceDiscount}
                discountRate={element.discountRate}
                productId={element.productId}
                priceOriginal={element.priceOriginal}
              />
            )}
          </PointContainer>
        );
      })}
    </>
  );
}

const PointContainer = styled.div<{ X: number; Y: number }>`
  position: absolute;
  top: ${(props) => props.X * 1.58}px;
  left: ${(props) => props.Y * 1.6 + 11}px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Point = styled.img`
  width: 32px;
  height: 32px;
`;
