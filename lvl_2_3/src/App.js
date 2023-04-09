import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const AppStyled = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <AppStyled>
      <Header />
      <Main />
      <Footer />
    </AppStyled>
  );
}

export default App;
