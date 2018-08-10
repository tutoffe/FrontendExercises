import React from 'react';
import { Button, Glyphicon, Col } from 'react-bootstrap';
import {showDetails} from '../actionCreator';
import {connect} from "react-redux";


const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {

  }
};

const PhoneListContainer =({products, showDetails}) =>{
  return (
    <div style={styles.products}>
      {products.map(product =>
        <Col xs={4}  key={product.id}>
          <div className="thumbnail" style={styles.product}>
            <img src={product.img} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => showDetails(product)} role="button">Details <Glyphicon glyph="info-sign" /></Button>
              </p>
            </div>
          </div>
        </Col>
      )}
    </div>
  );
}

const mapStateToProps =state => {
  return{
    products:state.products
  }
}

const mapDispatchToProps =dispatch =>{
  return{
    showDetails(product){
      dispatch(showDetails(product));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);
