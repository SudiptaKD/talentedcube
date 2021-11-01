import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import ProductCard from  "./ProductCard/ProductCard"
import { getData } from "../../redux/shop/actions";

const Products = ({ products, getData }) => {

  useEffect (()  => {
    getData();
    console.log()

  })
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

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData)
  };
}
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    product : state.shop.product
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);