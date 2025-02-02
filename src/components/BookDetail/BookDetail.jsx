import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addToDb';

const BookDetail = () => {

    const { bookId } = useParams();

    const data = useLoaderData();
    const id = parseInt(bookId)

    // console.log(data);
    // console.log(typeof bookId, typeof id, typeof data[0].bookId);

    const book = data.find(book => book.bookId === id);
    // console.log(book);

    const { bookId: currentBookID, image } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id)

    }

    return (
        <div className='my-12'>
            <h2>Book Details: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <button onClick={() => handleMarkAsRead(bookId)} className='btn btn-outline mr-4'> Mark as Read</button>
            <button className='btn btn-accent'>Add to Wish-List</button>
        </div>
    );
};

export default BookDetail;