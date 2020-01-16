import React from 'react'
import { FilterStyle } from './../styles/filterStyle'

export default class Filter extends React.Component {
  render() {
    return(
      <FilterStyle>
        <input type="text" id="filter" placeholder="Filter"/>
        <ul>
          <li>
            <a href="/">Frutas</a>
          </li>
        </ul>
      </FilterStyle>
    );
  }
}
