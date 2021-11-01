import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect } from "react";
import { Col,Card, Row, ListGroup } from "react-bootstrap";

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div style={{marginLeft:'10px', marginRight:'10px'}}>
      <Row>
        <Col>
        {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Col>
        <Col >
          <Card className='my-2 rounded text-center shadow mb-1'
            style={{ border:'none', backgroundColor:'#ada0ae' }}>
            <Card.Body> 
              <Card.Title className="fw-bolder fs-3">Cart Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="fw-bolder fs-5">Total {totalItems} items</ListGroup.Item>
                <ListGroup.Item className="fw-bolder fs-5">Total Price : ${totalPrice}</ListGroup.Item>
              </ListGroup>
              <Button variant="success" >
              Proceed To Checkout
              </Button>
            </Card.Body>
            
          </Card>
        </Col>
      </Row>
    </div> 
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);