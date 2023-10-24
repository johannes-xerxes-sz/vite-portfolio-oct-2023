import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Services from "./components/Services";
import WorkProcess from "./components/WorkProcess";
import WorkExperience from "./components/WorkExperience";
import MyPortfolio from "./components/MyPortfolio";
import Testimonials from "./components/Testimonials";
import Email from "./components/Email";
import Footer from "./components/Footer";

import { ColorContainer, WhiteContainer, FooterContainer } from "./components/style/Landing.styled";

function App() {
  return (
    <div>
      <Header />
      <ColorContainer>
        <Body />
      </ColorContainer>
      <WhiteContainer>
        <About />
      </WhiteContainer>
      <ColorContainer>
        <Services />
      </ColorContainer>
        <WorkProcess />
      <ColorContainer>
        <WorkExperience />
        <MyPortfolio />
        <Testimonials />
      </ColorContainer>

      <WhiteContainer>
        <Email />
      </WhiteContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  );
}

export default App;
