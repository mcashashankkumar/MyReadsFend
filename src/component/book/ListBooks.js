import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./bookShelf";
import PropTypes from 'prop-types';


const ListBooks = (props) => {
  const {books} = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            title="Currently Reading"
            books={books.filter(book => book.shelf === 'currentlyReading')}
            changeShelf={props.changeShelf}
          />
          <Bookshelf
            title="Want To Read"
            books={books.filter(book => book.shelf === 'wantToRead')}
            changeShelf={props.changeShelf}
          />
          <Bookshelf
            title="Read"
            books={books.filter(book => book.shelf === 'read')}
            changeShelf={props.changeShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}


export default ListBooks;
