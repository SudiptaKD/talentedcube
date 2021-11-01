import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App({ current }) {
  return (
    <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            {!current ? (
              <Redirect to="/" />
            ) : (
              <Route exact path="/product/:id" component={ProductDetails} />
            )}
          </Switch>
        </Container>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem
  };
};

export default connect(mapStateToProps)(App);