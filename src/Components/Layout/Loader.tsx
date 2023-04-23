import styled from "styled-components";
import PulseLoader from "react-spinners/ClipLoader";

export default function Loader() {
  return (
    <Container className="Loading_container">
      <PulseLoader size={30} />
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`;
