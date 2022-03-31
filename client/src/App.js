import React from "react";
import LabelNav from "./Components/LabelNav";
import styled from "styled-components";

function App() {
  return (
    <TestStyled>
      <LabelNav />
    </TestStyled>
  );
}

const TestStyled = styled.div`
font-size : 50px;
color : white;
background-color:black;
`

export default App;
