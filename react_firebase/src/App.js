import logo from './logo.svg';
import { useState } from 'react';
import {Container, Navbar, Row, Col} from "react-bootstrap"
import AddBook from "./components/AddFood"
import FoodList from "./components/FoodList"
import './App.css';

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
          <AddBook id={foodId} setFoodId={setBookId} />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          <BooksList getFoodId={getFoodIdHandler} />
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default App;
