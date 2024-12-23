import React from 'react'
import AddToCart from './AddToCart'
import style from './ProductCart.module.css'

const ProductCard = () => {
  return (
    <div className={style.card}>
        <AddToCart/>
    </div>
  )
}

export default ProductCard