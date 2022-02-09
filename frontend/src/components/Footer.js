import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                 <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Ecommerce site
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

// py-3 is padding on y-axis 3
// &copy; is the copyright sign
