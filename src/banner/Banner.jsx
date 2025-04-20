import React from 'react';
import assets from '../assets/books.jpg'

const Banner = () => {
    return (
        <div className=' bg-gray-400  p-16 w-full m-auto'>
     <div className='flex justify-between items-center ml-50 text-black'>
     <div>
      <h1>Lorem ipsum dolor sit amet.</h1>
     <button className='btn btn-primary'>Test Test</button>
     </div>
    <div>
     <img className='w-80 ' src={assets} alt="" />
     </div>
     </div>
        </div>
    );
};

export default Banner;