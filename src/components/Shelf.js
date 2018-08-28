import React from 'react';
import ShowBook from './ShowBook';
import PropTypes from 'prop-types';

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

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  shelfBooks: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default Shelf;
