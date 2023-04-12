/* eslint-disable quotes */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.scss";

function App() {
  return (
    <Container className="app">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
