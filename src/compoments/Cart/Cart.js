import React from 'react';

const Cart = (props) => {
   
    const cart = props.cart

    let total= 0
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price
        
    }

   let shiping= 0
   if (total>15) {
      shiping=0
   }
   else if (total>15) {
    shiping= 4.99
   }

   else if(total > 0){
    shiping= 12.99
   }


 const tex = (total / 10).toFixed(2);
 const grandtotal=(total+ shiping + Number(tex)).toFixed(2)
    return (
        <div>
            <h1>order Summary</h1>
             <h3>Items ordered: {cart.length} </h3>
             <p>Items: {cart.length}</p>
             
             <p>Shipping: {shiping}</p>
             
             <p>Estimated Tax: {tex}</p>
             
             <h2>Total Price: {grandtotal} </h2>
             <button>review order</button>
        </div>
    );
};

export default Cart;