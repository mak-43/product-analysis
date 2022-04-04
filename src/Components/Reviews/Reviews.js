import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../useCart/useCart';

const Reviews = () => {
    const [carts,setCart]=useCart([])
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 gap-4 '>
            {
                carts.map(cart=><Cart
                cart={cart.name}
                cart={cart}
                
                
                ></Cart>)
            }
        </div>
    );
};

export default Reviews;