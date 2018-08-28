import React from 'react';
import ShowBook from './ShowBook';

const Shelf = ({ shelf, shelfBooks, onChangeShelf }) => {
  const { title } = shelf;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map(book => (
            <ShowBook
              key={book.id}
              book={book}
              books={shelfBooks}
              onChangeShelf={onChangeShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
