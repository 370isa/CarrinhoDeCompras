import React from 'react'
import ProductItem from './../ProductItem'

export default class Products extends React.PureComponent {
  addToCart = (product) => {
    this.props.addToCartAction(product);
  }

  render() {
    const { products } = this.props;
    return <div>
      {
        products.map(p => <ProductItem key={p.id} {...p}
        addFunc={this.addToCart} />)
      }
    </div>
  }
}
