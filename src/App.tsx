// import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import styled from "styled-components";

const MarginAppHeader = styled.div`
  background-color: #fefafa;
  padding-top: 15px;
  padding-right: 100px;
  padding-bottom: 15px;
  padding-left: 100px;
`;

const MarginAppAbout = styled.div`
  background-color: white;
  padding-top: 15px;
  padding-right: 100px;
  padding-bottom: 15px;
  padding-left: 100px;
`;

function App() {
  return (
    <div>
      <MarginAppHeader>
        <Header />
        <Body />
      </MarginAppHeader>
      <MarginAppAbout>
      <About />
      </MarginAppAbout>
    </div>
  );
}

export default App;
