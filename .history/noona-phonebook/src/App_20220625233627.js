import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContactForm } from "./components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import { ContactList } from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <h1 className="title">ㅇㅕㄴ라ㄱ처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
