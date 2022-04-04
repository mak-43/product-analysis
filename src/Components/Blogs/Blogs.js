import React from 'react';

const Blogs = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8'>
            <div className='border border-black p-3 m-5'>
                <h1 className='font-bold text-xl py-4'>What is context API And  When is it used ?</h1>
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. Context is primarily used when some data needs to be accessible by many components at different nesting levels.</p>
            </div>
            <div className='border border-black p-3 m-5'>
                <h1 className='font-bold text-xl py-4'>What is Semantic tag ?</h1>
                <p>HTML semantic tags clearly describes its meaning to both the browser and the developer.The semantic HTML tags also help the search engines and other user devices to determine the importance and context of a website . Example of Semantic tags : </p>
            </div>
            <div className='border border-black p-3 m-5'>
                <h1 className='font-bold text-xl py-4'>Differences Between inline VS inline block element</h1>
                <p>inline The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height. On the other hand ,inline-block It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.</p>
            </div>
        </div>
    );
};

export default Blogs;