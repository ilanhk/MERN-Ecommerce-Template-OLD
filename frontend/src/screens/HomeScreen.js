import React, { useEffect } from 'react'; // useState hook allows us to create a state using a hook instead of class constructor
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';



const HomeScreen = () => {

    const dispatch = useDispatch();

    const productList = useSelector((state)=> state.productList);
    const { loading, error, products } = productList;

    useEffect(()=>{
        dispatch(listProducts());
    }, [dispatch]); 
    // useEffect hook is used to make a request to the backend. Takes in an arrow function. 
    //It will fire off as soon as the component loads which is where we would want to make our requests. because we want those products as soon as the component loads.
    // useEffect cant take in an async function need to build the async funciton inside it

    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? (<Loader/>) : error ? (<Message variant='danger'>{error}</Message>) : (
            <Row>
                {products.map((product) =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
            )}
        </div>
    );
};



export default HomeScreen;

// sm={12} md={6} lg={4} xl={3} these are sizes of screen monitors and the number is how many columns they should take
// need a key prop key={product._id} because each product that we are looping through needs to have a unique key