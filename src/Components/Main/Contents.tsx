import { useState } from "react";
import { ProductInterface } from "Types";
import styled from "styled-components";
import ImagePointList from "Components/Main/ImagePointList";
import SubImageList from "Components/Main/SubImageList";

interface ProductProps {
  data: ProductInterface;
}

export default function Contents({ data }: ProductProps) {
  const { imageUrl, productList } = data;
  const [selected, setSelected] = useState<number | null>(null);

  const onSelectImage = (id: number | null) => setSelected(id);

  return (
    <Container>
      <ImageWrapper>
        <MainImage
          src={imageUrl}
          alt="메인 이미지"
          onClick={() => onSelectImage(null)}
        />
        <ImagePointList
          productList={productList}
          selectedImage={selected}
          onSelectImage={onSelectImage}
        />
      </ImageWrapper>
      <SubImageList
        productList={productList}
        selectedImage={selected}
        onSelectImage={onSelectImage}
      />
    </Container>
  );
}

const Container = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  cursor: pointer;
  height: auto;
`;
