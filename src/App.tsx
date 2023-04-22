import styled from "styled-components";
import React from "react";
import UiIcon from "./Components/UI/UiIcon";

export default function App() {
  return (
    <Container>
      <UiIcon icon="DashBoardIcon" size={50} />
    </Container>
  );
}

const Container = styled.div`

 &:hover{

  svg{
    stroke:red;
    fill: red;
  }
 } 
  
  svg{
    stroke:black;
  }
`;
