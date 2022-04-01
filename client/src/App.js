import React from "react";
import Body from "./Components/Body";
import styled from "styled-components";
import LabelContents from "./Components/LabelContents";

function App() {
  return (
    <div class="container md mx-auto px-4">
      <div class="box-border h-24 p-4 columns-2">
        <div class="box-content w-5 h-5">
          <img src={require("./label.png")} alt="" class="object-cover" />
        </div>
        <div class="box-content">
        <span class="Text-Style">라벨 종류 선택</span>
        </div>
        </div>

        <div>
        <LabelContents />
        </div>
        <div class="Path-2" />
        <Body />
      </div>
  );
}



export default App;
