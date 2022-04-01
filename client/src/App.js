import React from "react";
import Body from "./Components/Body";
import styled from "styled-components";
import LabelContents from "./Components/LabelContents";
import {ReactComponent as LabelIcon} from "./group-2.svg"

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 border border-red-400">
      <div className="max-w-3xl mx-auto px-4 border border-grey-400">
        <div className="flex flex-row max-w-3xl mx-auto pt-7 border border-yellow-400">
          <LabelIcon  className="mt-1.5 mr-0.5 mb-3 ml-0"/>
          <span className="mr-16 mb-3 ml-0.5 font-sans text-base">라벨 종류 선택</span>
        </div>
        <LabelContents />
        <div class="border border-grey-400" />
        <Body />
      </div>
    </div>
  );
}

export default App;
