import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

const bookshelfs = [
  { id: 'currentlyReading', title: 'Currently Reading' },
  { id: 'wantToRead', title: 'Want to Read' },
  { id: 'read', title: 'Read' }
];

const ListBooks = ({ books, onChangeShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {bookshelfs.map((shelf, index) => {
          const shelfBooks = books.filter(book => book.shelf === shelf.id);
          return (
            <Shelf
              key={index}
              shelf={shelf}
              shelfBooks={shelfBooks}
              onChangeShelf={onChangeShelf}
            />
          );
        })}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;
