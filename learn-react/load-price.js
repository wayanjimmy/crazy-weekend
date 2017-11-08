import React from 'react'
import Price from './Price'

const Product = () => (
  <table>
    <tr>
        <td>Name</td>
        <td>Price</td>
    </tr>
    <tr>
        <td>Burger</td>
        <td>
            <Price value={10000} />
        </td>
    </tr>
  </table>
)

export default Product
