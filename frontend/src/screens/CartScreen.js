import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';


const CartScreen = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();

    const cart = useSelector((state)=> state.cart);
    const { cartItems } = cart;

    useEffect(()=>{
        if(id){
            dispatch(addToCart(id, qty));
        }
    }, [dispatch, id, qty]);

    const removeFromCartHandler = (id)=>{
        console.log('remove')
    };
  
    return (
    <Row>
        <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length ===0 ? 
            <Message>
                Your Cart is empty <Link to='/'>Go Back</Link>
            </Message>: (
                <ListGroup variant='flush'>
                    {cartItems.map((item)=>(
                        <ListGroupItem key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>${item.price}</Col>
                                <Col md={2}>
                                    <Form.Select as='select' value={item.qty} onChange={(e)=> 
                                        dispatch(
                                            addToCart(item.prodcut, Number(e.target.value))
                                        )
                                    }>
                                        {[...Array(item.countInStock).keys()].map((x) => (
                                            <option key={x+1} value={x+1}>{x+1}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col md={2}>
                                    <Button type='button' variant='light' onClick={removeFromCartHandler(item.product)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            )}
        </Col>
        <Col md={2}>
            
        </Col>
        <Col md={2}>
            
        </Col>
    </Row>
  )
}

export default CartScreen;