import React from 'react';
import { CartStyle } from './../../styles/cartStyle';
import CartItem from './../cart/CartItem';
import imgCart from './../../images/cart.png';

export default class CartList extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      actionClass: 'hide',
    };
  }

  alterAction() {
    var actionState;
    if(this.state.actionClass === 'show') {
      actionState = "hide";
    } else {
      actionState = "show";
    }
    this.setState({
      actionClass: actionState
    })
  }

  render() {
    const {cart} = this.props;

    return (
      <CartStyle image={ imgCart }>
        <div className={ 'listCart ' + this.state.actionClass } >
          <ul>
            {
              cart.map(item => <CartItem {...item} key={item.id} />)
            }
          </ul>
        </div>
        <button onClick={this.alterAction.bind(this)} className='cartButton'>
          Cart
        </button>
      </CartStyle>
    );
  }
}
