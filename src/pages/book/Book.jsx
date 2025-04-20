import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({singleBook}) => {
//const data=use(bookPromiss)
//console.log(data)
//console.log(singleBook)
const {bookName,bookId,author,image,rating,category,tags,totalPages,publisher}=singleBook;

    return (
        
       <Link to={`/BookDetails/${bookId}`}>
       <div className="card bg-amber-50 p-6 mx-2 border shadow-sm mt-9">
  <figure className=" bg-gray-400 p-4 w-2/3 mx-auto">

    <img className="h-[166px]"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="flex justify-center gap-10">
    {
      tags.map(tag=><button>{tag}</button>)
    }
  </div>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{totalPages}</div>
    </h2>
    <p>Book by: {publisher}</p>
    <div className="border-t-1 border-dashed"></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="flex items-center gap-2">{rating}<FaStarHalfAlt /></div>
    </div>
  </div>
</div>
       </Link>
        
    );
};

export default Book;