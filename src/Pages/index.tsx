import styled from "styled-components";
import EventBar from "Components/Common/EventBar";
import NavigationBar from "Components/Common/NavigationBar";
import Main from "Components/Main";

export default function Pages() {
  return (
    <Container>
      <EventBar />
      <NavigationBar />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
