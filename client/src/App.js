import React from "react";
import Body from "./Components/Body";
import styled from "styled-components";
import LabelContents from "./Components/LabelContents"; 
import "./App.css";

function App() {
  return (
    <div className="frame">
      <div className="Rectangle">
        <img src={require("./label.png")} alt="" class="Group-2" />
        <span class="Text-Style">라벨 종류 선택</span>
        <LabelContents/>
      </div>
    </div>
  );
}

// const TestStyled = styled.div`
//   font-size: 50px;
//   color: white;
//   background-color: black;
//   text-align: center;
// `;

export default App;
