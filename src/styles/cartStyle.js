import styled from 'styled-components'

export const CartStyle = styled.div`
  bottom: 15px;
  position: absolute;
  right: 15px;
  text-align: right;

  .listCart {
    background-color: #ffecdb;
    border-radius: 5px;
    bottom: -30px;
    box-shadow: 0 0 5px #0000004f;
    margin-left: auto;
    padding: 30px 15px;
    position: relative;
    text-align: left;
    width: 300px;
    z-index: 9;

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      align-items: center;
      display: flex;
      position: relative;

      &:not(:first-child) {
        border-top: 2px dashed #fff;
        margin-top: 10px;
        padding-top: 10px;
      }

      img {
        border: 2px solid #fff;
        border-radius: 5px;
        height: auto;
        padding: 10px;
        width: 70px;
      }

      div {
        margin-left: 5px;
      }
    }
  }

  .show {
    display: block;
    opacity: 1;
    transition: opacity .1s linear;
  }

  .hide {
    display: none;
    opacity: 0;
    transition: opacity .1s linear;
  }

  button {
    border-radius: 100%;
    color: #fff;

    &.plus,
    &.less {
      background-color: #2c9dff;
      border-color: #2c9dff;
    }

    &.remove {
      background-color: #db3e33;
      border-color: #db3e33;
      position: absolute;
      right: 0;
      top: 0px;

      &:not(:first-child) {
        top: 10px;
      }
    }

    &.cartButton {
      background: #26d206 url(${props => `${props.image}`})
                  no-repeat center center / auto;
      border: 3px groove #27f700;
      bottom: 0;
      box-shadow: 0 2px 6px #00000059;
      color: transparent;
      height: 60px;
      position: relative;
      width: 60px;
      z-index: 20;

      &::after {
        align-items: center;
        background: #db3e33;
        border-radius: 100%;
        color: #fff;
        content: ${props => `${props.qtdItens}`};
        display: grid;
        font-size: 8px;
        height: 15px;
        justify-content: center;
        position: absolute;
        right: 4px;
        top: 8px;
        width: 15px;
      }
    }

    &:hover {
      opacity: .8;
    }
  }
`
