import { Container, Nav, Navbar } from "react-bootstrap"


const Header = () => {
  return (
    <header>
        <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">PetsAdoption</Navbar.Brand>    
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Sobre</Nav.Link>
                    </Nav>
                </Container>
        </Navbar>
    </header>
    )
}

export default Header