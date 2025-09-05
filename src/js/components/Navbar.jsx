import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import RBNavbar from 'react-bootstrap/Navbar';

const Navbar = () => {
    return (
        <RBNavbar expand="lg" className="bg-dark navbar-dark">
            <Container>
                <RBNavbar.Brand href="#home">Start Bootstrap</RBNavbar.Brand>
                <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
                <RBNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Services">Services</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </RBNavbar.Collapse>
            </Container>
        </RBNavbar>
    );
};

export default Navbar;