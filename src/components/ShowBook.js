import React from 'react';

import noCoverImage from '../icons/no-cover-image.png';

const ShowBook = ({ book, books, onChangeShelf }) => {
  const { imageLinks, title, authors } = book;
  const coverImage =
    imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : noCoverImage;

  let currentShelf = 'none';

  for (let item of books) {
    if (item.id === book.id) {
      currentShelf = item.shelf;
      break;
    }
  }

  const BookCover = () => (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${coverImage})`
      }}
    />
  );

  const BookShelfChanger = () => (
    <div className="book-shelf-changer">
      <select
        onChange={e => onChangeShelf(book, e.target.value)}
        defaultValue={currentShelf}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <BookCover />
          <BookShelfChanger />
        </div>
        <div className="book-title">{title || 'Book title not available'}</div>
        <div className="book-authors">
          {authors &&
            authors.map((author, index) => {
              return (
                <div className="book-authors" key={index}>
                  {author}
                </div>
              );
            })}
        </div>
      </div>
    </li>
  );
};

export default ShowBook;
