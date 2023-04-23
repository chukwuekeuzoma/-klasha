import styled from "styled-components";
import UiIcon from "./Components/UI/UiIcon";
import DashbordSideBar from "./Components/Layout/DashbordSideBar";
import DashBoardLayout from "./Layouts/DashBoardLayout";

export default function App() {
  return (
    <DashBoardLayout/>
    // <DashbordSideBar/>
    // <Container>
    //   <UiIcon icon="DashBoardIcon" size={50} />
    // </Container>
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
