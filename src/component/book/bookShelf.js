import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


const Bookshelf = (props) => {
    const {title, books} = props;
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((book) => (
                <li key={book.id}>
                    <Book
                    book={book}
                    backgroundImage={book.imageLinks ? book.imageLinks.thumbnail : null}
                    changeShelf={props.changeShelf}
                    />
                </li>
                ))}
            </ol>
            </div>
        </div>
    )  
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Bookshelf;
