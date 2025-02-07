import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { image, bookName, author, tags, category, bookId, rating, totalPages } = book

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6 mx-auto">
                <figure className='bg-gray-200 py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-4'>
                        {
                            tags.map((tag, idx) => <button
                            key={idx}
                            className="btn btn-xs bg-green-200 text-green-500">{tags}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{author}</p>
                    {/* <div className='divider'></div> */}

                    {/* we can use this border also */}
                    <div className='border-t-2 border-dashed'></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div>{rating}</div>
                        <div>Pages: {totalPages}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;