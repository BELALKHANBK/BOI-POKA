import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../utility/addToDB';
import Book from '../book/Book';


const ReadList = () => {
const[ReadList,setReadList]=useState([])
const [sort,setSort]=useState('')

const data=useLoaderData()
console.log(data)
useEffect(()=>{
const storeBook=getStoreBook()
const convertStoreBook=storeBook.map(id=>parseInt(id))
const myDataList=data.filter(book=>convertStoreBook.includes(book.bookId))
setReadList(myDataList)
}, [])



const handleSort=(type)=>{
    setSort(type)
if(type==='pages'){
    const sortBypages=[...ReadList].sort((a,b)=>a.totalPages- b.totalPages);
    setReadList(sortBypages)
}
if(type==='ratings'){
    const sortRating=[...ReadList].sort((a,b)=>a.rating-b.rating);
    setReadList(sortRating)
}
}


    return (  
        <div>
        
        <details className="dropdown">
  <summary className="btn m-1">sort by: {sort?sort:''}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('pages')}>pages</a></li>
    <li><a onClick={()=>handleSort('rating')}>rating</a></li>
  </ul>
</details>

        <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i read: {ReadList.length}</h2>
     <div className='text-black grid grid-cols-3'>
     {
        ReadList.map(b =><Book  key={b.bookId} singleBook={b}></Book>)
      }
     </div>
    </TabPanel>
    <TabPanel>
      <h2>My wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;