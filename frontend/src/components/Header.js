import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap'; // same function as Link in react-router   so no refresh when you go to a link
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout())
    };

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
                                {userInfo ? (
                                    <NavDropdown title={userInfo.name} id='username'>
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link ><i className="fas fa-user"></i>Sign In</Nav.Link>
                                </LinkContainer> 
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
        </header>
    );
};

export default Header;

// the <i> icons are from here https://cdnjs.com/libraries/font-awesome the first link