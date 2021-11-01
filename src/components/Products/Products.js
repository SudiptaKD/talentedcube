import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import ProductCard from  "./ProductCard/ProductCard"

const Products = ({ products }) => {
  return (
    < >
      <Row>
        {products.map((product) => (
          <Col key={product.id}  >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);