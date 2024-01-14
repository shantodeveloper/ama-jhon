import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../../Product/Product';
import Cart from '../../Cart/Cart';
const Shop = () => {
    const [product, setProduct]= useState([])
    const [cart , setcart] = useState([])
   
    useEffect(()=>{   
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
    .then(res=> res.json())
    .then(data => setProduct(data) )
    
   },[])
   var result = product.slice(1 , 20)


   function addproduct(product) {
    
     const newcart = [...cart, product]
     setcart(newcart)
   }


    return (
        <div className='shop'>
        <div className="products">
            {
            result.map(pro=> <Product addproduct={addproduct}  product={pro}></Product>)
            }

            </div>
            <div className="revew">
             <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;