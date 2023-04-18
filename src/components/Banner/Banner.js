import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Banner.scss";

function Banner() {
  return (
    <Container className="banner" fluid>
      <Row>
        <Col><img src="" alt="Logo représentant une main qui tient une plume et qui écrit Write Talent. La pointe de la plume brille comme une étoile." /></Col>
        <Col><h1>WriterTalent</h1></Col>
      </Row>
    </Container>
  );
}

export default Banner;
