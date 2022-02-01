import styled from "styled-components";
import useProduct from "Hooks/useProduct";
import Title from "Components/Main/Title";
import Contents from "Components/Main/Contents";

export default function Main() {
  const { data, loading, error } = useProduct();

  if (loading) {
    return <div>로딩 중입니다.</div>;
  }
  if (error) {
    return (
      <div>
        데이터가 존재하지 않거나 불러오기에 실패했습니다. 다시 시도해주시기
        바랍니다.
      </div>
    );
  }

  return (
    <Container>
      <Wrapper>
        <Title />
        <Contents data={data} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 800px;
`;
