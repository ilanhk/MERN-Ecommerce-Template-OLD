import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'; // https://react-bootstrap.github.io/components/buttons/
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';

const App = () =>{
  return (
    <Router>
        <Header />
        <main className="py-3">
            <Container>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/product/:id" element={<ProductScreen />} />
                    <Route path="/cart/:id" element={<CartScreen />} />
                    <Route path="/cart/" element={<CartScreen />} />
                    <Route path="/" element={<HomeScreen />} exact />
                </Routes>
            </Container>
        </main>
        <Footer />
    </Router>
  );
};
//id? means id is optional 

export default App;

//Some useful React Component libraries:
// https://react-bootstrap.github.io/components/buttons/
// https://mui.com/

// this is for different styles of bootstrap: https://bootswatch.com/ take the .min.css

// py-3 means padding on y-axis 3

// exact in route says it has to be this exact path and component