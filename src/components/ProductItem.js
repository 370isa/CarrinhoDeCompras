import React from 'react'

const ProductItem = ({ id, title, price, image, addFunc }) => {
  return (
    <div key={ id } id={ id } className="productItem">
      <img src={ image } alt={ title } />
      <div className="descriProduct">
        <h2>{ title }</h2>
        <span>R$ { price }</span>
        <div className="btnClass">
          <button onClick={() => addFunc({
            id, title, price, image, units: 1
          })}
          className="buyItem">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
