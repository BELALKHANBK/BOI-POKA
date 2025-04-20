import React, { Suspense } from 'react';
import Book from '../book/Book';


const Books = ({data}) => {
   /*  const [book,setBook]=useState([]) */
/* seEffect(()=>{
    fetch('booksData.json')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
}) */
/* const bookPromiss=fetch('booksData.json')
.then(res=>res.json()) */

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-9 underline'>Book</h1>
<Suspense fallback={<span>Loading.....</span>}>
<div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-14 p-'>
{
    data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}>

    </Book> 
)
}
</div>
</Suspense>
        </div>
    );
};

export default Books;