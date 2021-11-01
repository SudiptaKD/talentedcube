import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar as NavbarTag, Nav, Container, Button } from "react-bootstrap";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <NavbarTag bg="dark" variant="dark">
      <Container>
        <Nav style={{height:'60px'}}>
          <Button variant="success">
            <Link to="/cart" style={{textDecoration:'none'}}>
                <h1 >{cartCount}</h1>
            </Link>
          </Button>
        </Nav>
      </Container>
    </NavbarTag>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);