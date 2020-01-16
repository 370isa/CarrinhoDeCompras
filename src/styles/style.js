import styled from 'styled-components'

export const Header = styled.header`
  align-items: center;
  background: repeating-linear-gradient(45deg, #ffad61, transparent 100px);
  display: flex;
  height: 200px;
  justify-content: center;
  position: relative;

  &::after {
    background-color: #ffad61;
    bottom: 0;
    content: '';
    height: 10px;
    position: absolute;
    width: 100%;
  }

  img {
    height: 150px;
    width: auto;
  }
`

export const Body = styled.div`
  position: relative;
`
export const Col2 = styled.div`
  padding: 30px 0;
  position: relative;
  width: calc(2 * 100% / 12);

  &::after {
    background: linear-gradient(45deg, transparent, #ffad61, transparent);
    content: '';
    height: 100%;
    position: absolute;
    right: -1px;
    top: 0;
    width: 2px;
  }
`

export const Col10 = styled.div`
  width: calc(10 * 100% / 12);
`

export const Col12 = styled.div`
  background-color: #fffcd5;
  display: ${props => `${props.typeDisplay}`};
  width: 100%;
`

export const Footer = styled.footer`
  align-items: center;
  background-color: #ffad61;
  color: #346066;
  display: flex;
  font-weight: bold;
  height: 50px;
  justify-content: center;
`
