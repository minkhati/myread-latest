import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';
import PropTypes from 'prop-types';

import * as BooksAPI from '../apis/BooksAPI';
import ShowBook from './ShowBook';

class SearchBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    query: PropTypes.string,
    searchedBooks: PropTypes.array,
    anyError: PropTypes.bool
  };

  state = {
    query: '',
    searchedBooks: [],
    anyError: false
  };

  searchQuery = query => {
    this.setState({ query });

    if (query) {
      this.searchBooks(query);
    } else {
      this.setState({
        searchedBooks: [],
        anyError: false
      });
    }
  };

  searchBooks = query => {
    BooksAPI.search(query, 20).then(searchedBooks => {
      searchedBooks.length > 0
        ? this.setState({
            searchedBooks,
            anyError: false
          })
        : this.setState({
            searchedBooks: [],
            anyError: true
          });
    });
  };

  render() {
    const { query, anyError, searchedBooks } = this.state;
    const { books, onChangeShelf } = this.props;

    // Sort the searchedBooks by title field
    searchedBooks.sort(sortBy('title'));

    const searBooksBar = () => (
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={event => this.searchQuery(event.target.value)}
            placeholder="Search by title or author"
          />
        </div>
      </div>
    );

    const searchBooksResult = () => (
      <div className="search-books-results">
        {searchedBooks.length > 0 && (
          <div>
            <div>
              <h3>Search returned {searchedBooks.length} books</h3>
            </div>
            <ol className="books-grid">
              {searchedBooks.map(book => (
                <ShowBook
                  key={book.id}
                  book={book}
                  books={books}
                  onChangeShelf={onChangeShelf}
                />
              ))}
            </ol>
          </div>
        )}

        {anyError && (
          <div>
            <div className="error">
              <h3>
                Search returned 0 books. Please try with different characters !!
              </h3>
            </div>
          </div>
        )}
      </div>
    );

    return (
      <div className="search-books">
        {searBooksBar()}
        {searchBooksResult()}
      </div>
    );
  }
}

export default SearchBook;
