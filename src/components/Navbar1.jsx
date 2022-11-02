import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function Navbar1() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className='b' href="#home" ><strong>GOMYCODE</strong></Navbar.Brand>
          <Nav className="ms-2">
            <Nav.Link href="#home"><strong>Home</strong></Nav.Link>
            <Nav.Link href="#courses"><strong>courses</strong></Nav.Link>
            <Nav.Link className='btn btn-outline-dark' href="#Login">login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;