import React from 'react';

const Cart = ({ cart }) => {
    const { img, name, comment, rating } = cart
    return (
        <div  >
            <div className=' border-2 border-zinc-800 p-2 m-5 rounded drop-shadow-xl  h-full '>
                <div className='flex justify-center drop-shadow-md py-3'>
                    <img className='h-44 w-52 rounded-sm' src={img} alt="several batper" />
                </div>
                <div className='flex flex-col items-start flex-wrap '>
                    <p ><span className='font-bold '>Name:</span> {name}</p>
                    <p><span className='font-bold '>Comment: </span>{comment}</p>
                    <p><span className='font-bold '>Rating:</span> {rating}</p>
                </div>
            </div>

        </div>
    );
};

export default Cart;