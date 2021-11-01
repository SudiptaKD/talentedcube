import React from "react";
import { Card, Button, Container } from "react-bootstrap";

import { connect } from "react-redux";
import { addToCart } from "../../redux/shop/actions";

const SingleItem = ({ current, addToCart }) => {
  return (
      <Container>
        <Card  className='my-2 rounded text-center shadow mb-1'
          style={{ width: '18rem',border:'none', backgroundColor:'#edf0eb' }}>
          <Card.Body>
            <Card.Title>{current.title}</Card.Title>
            <Card.Text>{current.description}</Card.Text>
            <Card.Text>${current.price}</Card.Text>
            <Button variant="primary" onClick={() => addToCart(current.id)}>
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);