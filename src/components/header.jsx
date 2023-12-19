import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const header = () => {
  return (

    <div id='parentNav'>

    <Navbar style={{backgroundColor:"green"}}>
      <Container>
        <Navbar.Brand href="#home"style={{marginRight:"80px",color:"white"}}>Reeco</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#home" style={{color:"white"}}>Store</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Orders</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Analytics</Nav.Link>



              
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
        <NavDropdown title="Hello, James" style={{color:"white"}}>
              
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default header