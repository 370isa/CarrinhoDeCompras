import styled from 'styled-components'

export const ProductStyle = styled.div`
  display: block;
  margin: 30px 15px;

  .productItem {
    border: 2px solid #fff;
    display: inline-block;
    margin: 0 15px 30px;
    width: 300px;

    img {
      border-bottom: 2px solid #fff;
      display: inline-block;
      height: auto;
      width: 300px;
    }

    .descriProduct {
      margin: 0 15px;
      padding-bottom: 15px;
      position: relative;
    }

    h2 {
      margin-bottom: 5px;
    }

    .btnClass {
      bottom: -15px;
      position: absolute;
      right: -35px;
      text-align: right;
    }

    button {
      background-color: #2c9dff;
      border-color: #2c9dff;
      border-radius: 100%;
      color: #fff;
      font-weight: bold;
      height: 50px;
      width: 50px;

      &:hover {
        opacity: .8;
      }
    }
  }
`
