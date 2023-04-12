import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Banner.scss";

function Banner() {
  return (
    <Container className="banner" fluid>
      <Row>
        <Col><img src="" alt="Logo WriterTalent" /></Col>
        <Col><h1>WriterTalent</h1></Col>
      </Row>
    </Container>
  );
}

export default Banner;
