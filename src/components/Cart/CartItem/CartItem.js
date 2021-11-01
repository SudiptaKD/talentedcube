import React, { useState } from "react";

import { Card, Button, Row, Col, Container } from "react-bootstrap";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/shop/actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <Container style={{marginLeft:'10px'}}>
      <Card  className='my-2 rounded text-center shadow mb-1'
          style={{ border:'none', backgroundColor:'#aea0ab' }}>
        <Row>
          <Col   >
            <Card.Title >{item.title}</Card.Title>
          </Col>
          <Col >
            <Card.Text className="fw-bolder fs-5">Price:<br/>${item.price}</Card.Text>
          </Col>
          <Col  >
            <Card.Text className="fw-bolder fs-5">Total item:<br/>{input}</Card.Text>
          </Col>
          <Col  >
            <label htmlFor="qty" className="fw-bold fs-6">Quantity :</label>
               <input style={{width:'120px'}}
                   min="1"
                   type="number"
                   id="qty"
                   name="qty"
                   value={input}
                 onChange={onChangeHandler}
                 />
          </Col>
          <Col >
            <Card.Text className="fw-bolder fs-5">Total Price:<br/>${input*item.price}</Card.Text>
          </Col>
          <Col   >
            <Button variant="danger"  onClick={() => removeFromCart(item.id)}>Remove</Button>
          </Col>
        </Row>
      </Card>  
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);