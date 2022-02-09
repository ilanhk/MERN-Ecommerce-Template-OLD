import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'; // same function as Link in react-router   so no refresh when you go to a link
import { Navbar, Nav, Container} from 'react-bootstrap';
const Header = () => {
    return (
        <header>
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand >Ecommerce Site</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <LinkContainer to="/cart">
                                    <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/login">
                                    <Nav.Link ><i className="fas fa-user"></i>Sign In</Nav.Link>
                                </LinkContainer> 
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
        </header>
    );
};

export default Header;

// the <i> icons are from here https://cdnjs.com/libraries/font-awesome the first link