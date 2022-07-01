import styled from "styled-components";
import { LandingPage } from "./views/LandingPage/LandingPage";
import { Footer } from "./views/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./constants/GlobalStyles";

const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  font-family: "Roboto Condensed", sans-serif;
`;

const App = () => {
  return (
    <ThemeProvider theme={GlobalStyles}>
      <Body>
        <LandingPage />
        <Footer />
      </Body>
    </ThemeProvider>
  );
};

export default App;
