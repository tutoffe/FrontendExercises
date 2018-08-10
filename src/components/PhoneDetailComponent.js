import React from 'react';
import { Panel, Table} from 'react-bootstrap';
import {connect} from 'react-redux';


const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


const PhoneDetailComponent = ({product=[], removeFromCart}) => {
    return (
      <Panel header="Phone Details">       
          <Table fill key={product.id}>
            <tbody>
              
                <tr >
                  <td>Phone:</td>
                  <td>{product.name}</td>
                </tr>
                <tr>
                  <td>Description:</td>
                  <td>{product.desc}</td>
                </tr>
            
            </tbody>
            <tfoot>
              <tr>
                <td>Price:</td>
                <td colSpan="4" style={styles.footer}>
                  ${product.price}
                </td>
              </tr>
            </tfoot>
          </Table>
      </Panel>
    )
};

const mapStateToProps = state=>{
  return{
    product:state.product
  };
};


export default connect(mapStateToProps) (PhoneDetailComponent);
