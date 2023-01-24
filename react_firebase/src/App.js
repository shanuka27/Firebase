import { useState } from 'react';
import { Container, Navbar, Row, Col} from "react-bootstrap"
import AddFood from "./components/AddFood"
import FoodList from "./components/FoodList"
import './App.css';
// import Container from 'react-bootstrap/Container';


function App() {
  const [foodId, setFoodId] = useState("");

  const getFoodIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setFoodId(id);
  };
  return (
    <>
    <Navbar bg="dark" variant="dark" className="header">
      <Container>
        <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
      </Container>
    </Navbar>

    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <AddFood id={foodId} setFoodId={setFoodId} />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          <FoodList getFoodId={getFoodIdHandler} />
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default App;
