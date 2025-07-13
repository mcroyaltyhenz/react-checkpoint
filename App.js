import React from 'react';
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React Bootstrap Demo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Heading */}
        <Container className="mt-4">
          <h1 className="text-center mb-4">Welcome to React Bootstrap</h1>
          
          {/* Cards */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            
            <div className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="success">Learn More</Button>
                </Card.Body>
              </Card>
            </div>
            
            <div className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="warning">Click Here</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
