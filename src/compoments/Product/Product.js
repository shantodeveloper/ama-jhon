import React from 'react';
import './Product.css'

const Product = (props) => {
   console.log(props)
   const {img, name, seller, price, stock }= props.product
    return (
        <div className='product-container'>
            <div>
            <img src={img} alt="" />
            </div>
            <div className='text'>
            <h4>{name}</h4>
            <h5>By {seller}</h5>
            <h4>$ {price}</h4>
            <small>only {stock} left in stock-order soon</small>
            <br />
            <br />
            <button onClick={()=> props.addproduct(props.product)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;