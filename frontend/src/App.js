import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'; // https://react-bootstrap.github.io/components/buttons/
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () =>{
  return (
    <Router>
        <Header />
        <main className="py-3">
            <Container>
                <Routes>
                    <Route path="/" element={<HomeScreen />} exact />
                    <Route path="/product/:id" element={<ProductScreen />} />
                </Routes>
            </Container>
        </main>
        <Footer />
    </Router>
  );
};

export default App;

//Some useful React Component libraries:
// https://react-bootstrap.github.io/components/buttons/
// https://mui.com/

// this is for different styles of bootstrap: https://bootswatch.com/ take the .min.css

// py-3 means padding on y-axis 3

// exact in route says it has to be this exact path and component