import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { assToStoreDB } from '../../utility/addToDB';

const BookDetails = () => {
    const{id}=useParams();
    const bookid=parseInt(id)
    const data=useLoaderData();
   // console.log(data)
   const singleBook=data.find(book=>book.bookId===bookid)
   const {image,bookName,publisher,tags,review,category,totalPages,author,yearOfPublishing,rating}=singleBook;
   ///console.log(singleBook)

   const BookDetail=()=>{
    assToStoreDB(id)
   }



    return (
        <div className='mx-auto bg-white flex gap-6 text-black p-8'>
     <div className='bg-gray-300 p-8 text-black rounded-2xl'>
     <img className='max-w-sm' src={image} alt="" />
     </div>

<div className='font-bold'>
    <h1 className='text-3xl font-bold'>{bookName}</h1>
    <h1 className='text-lg text-gray-700'>Book by: {author}</h1>
    <div className='border-t-1 border-dashed'></div>
 <p className='text-gray-700 text-xl'>{category}</p>
    <div className='border-t-1 border-dashed'></div>
    <p className='text-xl text-gray-500'><span className='text-black'>Review:</span> {review}</p>
    <div className='mt-8 flex gap-8'>
    {
      tags.map(tag=><div className='flex'>
        <h1>Tags: <span>{tag}</span></h1>
      </div>)
    }
    </div>
    <div className='mt-4 border-t-1 border-dashed'></div>
<div className='flex gap-30'>
    <h1 className='text-2xl font-bold'>Number Of Pages:</h1>
    <h1 className='font-bold'>{totalPages}</h1>
</div>
<div className='flex gap-54'>
    <h1 className='text-2xl font-bold'>Publisher:</h1>
    <h1 className='font-bold'>{publisher}</h1>
</div>
<div className='flex gap-28'>
    <h1 className='text-2xl font-bold'>Year Of Publishing:</h1>
    <h1 className='font-bold'>{yearOfPublishing}</h1>
</div>
<div className='flex gap-64'>
    <h1 className='text-2xl font-bold'>Rating:</h1>
    <h1 className='font-bold'>{rating}</h1>
</div>
<button onClick={()=> BookDetail(id)} className="btn btn-accent m-2">Read</button>
<button className="btn btn-info m-2">WishList</button>
</div>
        </div>
    );
};

export default BookDetails;