import React from 'react';
import Book from './../book/Book';
const SearchResult = (props) => {
    const {result, changeShelf} = props;
    return(
        <div className="search-books-results">
            <ol className="books-grid">
                {result.map((book) => (
                <li key={book.id}>
                    <Book
                    book={book}
                    backgroundImage={book.imageLinks ? book.imageLinks.thumbnail : ""}
                    changeShelf={changeShelf}
                    />
                </li>
                ))}
            </ol>
        </div>
    )
};

export default SearchResult;

