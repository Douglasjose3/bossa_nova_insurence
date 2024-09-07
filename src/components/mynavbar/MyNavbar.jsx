import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './mynavbar.css';
import { Button } from 'react-bootstrap';

function MyNavbar() {

    return (
        <Navbar expand="lg" className='color-nav mt-2' sticky='top'>
            <Container>
                <Navbar.Brand to="#home"><img className='img-brand' src="./src/assets/bossanova.png" alt="Logo da empresa" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="/#">Hiring</Nav.Link>
                        <Nav.Link href="#location">Location</Nav.Link>
                    </Nav>
                    <Button variant="success">Translate</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;