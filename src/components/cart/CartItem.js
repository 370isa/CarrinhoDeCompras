import React from 'react';
import { connect } from 'react-redux';
import './../../styles/cartStyle';

export default class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }

  decrementar() {
    this.setState({
      contador: this.state.contador - 1,
    })
  }

  incrementar() {
    this.setState({
      contador: this.state.contador + 1,
    })
  }

  render() {
    return(
      <li key={ this.props.id }>
        <img src={ this.props.image } alt={ this.props.title } />
        <div>
          <h3>{ this.props.title }</h3>
          <span>R$ { this.props.price }</span>
          <article>
            <span>Units: </span>
            <button className="plus">+</button>
            <span> { this.props.units } </span>
            <button className="less">-</button>
          </article>
        </div>
        <button className="remove">X</button>
      </li>
    );
  }
}
