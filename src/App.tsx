// import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Services from "./components/Services";
import WorkProcess from "./components/WorkProcess";
import WorkExperience from "./components/WorkExperience";
import MyPortfolio from "./components/MyPortfolio";
import Testimonials from "./components/Testimonials";
import Email from "./components/Email";
import Footer from "./components/Footer"

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
  padding-left: 100px;
`;

const MarginAppServices = styled.div`
  background-color: #fefafa;
  padding-top: 15px;
  padding-right: 100px;
  padding-bottom: 15px;
  padding-left: 100px;
`;

const MarginAppWorkProcess = styled.div`
  background-color: white;
  padding-bottom: 15px;
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
      <MarginAppServices>
        <Services />
      </MarginAppServices>
      <MarginAppWorkProcess>
        <WorkProcess />
      </MarginAppWorkProcess>
        <WorkExperience />
        <MyPortfolio />
        <Testimonials />
        <Email />
        <Footer />
    </div>
  );
}

export default App;
