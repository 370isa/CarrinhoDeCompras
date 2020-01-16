import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Filter from './../components/Filter';
import PRODUCTS from './../components/DATA';
import Products from './../components/products/Products';
import CartList from './../components/cart/CartList';
import { Header, Body, Col2, Col10, Col12, Footer } from './../styles/style';
import { ProductStyle } from './../styles/productStyle';
import Logo from './../images/logo.png';
import {addToCartAction} from './../redux/actions/cart_actions';

class FrontPage extends React.Component {
  render() {
    const {cart, addToCartAction} = this.props;
    return (
      <div>
        <Header>
          <img src={ Logo } alt="Carrinho de Compras" />
        </Header>
        <Body>
          <Col12 typeDisplay={"flex"}>
            <Col2>
              <Filter />
            </Col2>
            <Col10>
            <div>
              <ProductStyle>
                <CartList cart={cart} />
                <Products products={PRODUCTS}
                  addToCartAction={addToCartAction}
                />
              </ProductStyle>
            </div>
            </Col10>
          </Col12>
        </Body>
        <Footer>
          <span>Autor(a): Eloisa Amorin</span>
        </Footer>
      </div>
    );
  }
}

const mapStateToProps = ({cart}) => {
  return{cart}
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    addToCartAction
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(FrontPage)
