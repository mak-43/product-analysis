import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Pic from '../Assets/images/f1.jpg'
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';


const Home = () => {
    const [carts,setCart]=useCart([])
   
    const navigate=useNavigate()
    const goToReview=()=>{
            const path='/reviews'
            navigate(path)
    }
    return (
        <div className='py-8'>
            <div className=' grid md:grid-cols-2 sm:grid-cols-1 '>
                <div className='basis-9/12 flex flex-col justify-center items-center m-3  order-2 md:order-1'>
                     <h1 className='text-6xl py-5 '>Yummy Food</h1>
                     <p>Very texture , Mouth waterig ,juicy ,yummy,just awesome</p>
                     <button  className='rounded-full  py-2 px-4 my-5 text-white bg-gray-500 hover:bg-black '>Add Button</button>
                </div>
                <div className='basis-4/12 mr-8 sm:w-2/3 sm:ml-8 order-1 md:order-2'>
                        <img className='rounded ' src={Pic} alt="yummy " />
                </div>
            </div>
            <div className='py-6'>
                <h2 className='text-4xl font-medium'>Customer Reviews(3)</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 gap-4 py-5  '>
                    {   
                        
                        carts.slice(0,3).map(cart=><Cart
                        cart={cart.name}
                        cart={cart}
                        ></Cart>)
                    }
                </div>
                <button  className='rounded-full  py-2 px-4 my-5 text-white bg-gray-500 hover:bg-black ' onClick={goToReview}>See All Reviews</button>
                
            </div>
        </div>
    );
};

export default Home;