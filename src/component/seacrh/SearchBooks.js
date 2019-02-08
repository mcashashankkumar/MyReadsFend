import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import SearchResult from './searchResult';
import PropTypes from 'prop-types';


class SearchBooks extends Component {
  state = {
    input: '',
    result: []
  }

  onInputChange = (input) => {
    this.setState({ input })
    this.searchBooks(input)
  }

  searchBooks = (query) => {
    BooksAPI.search(query,30).then((books) => {
      if(query.length === 0) {
        this.setState({ result: [] })
      }
      if(books){
        if(books.length>0){
          const result = books.map(book => {
            const extingBook = this.props.books.find(bk => bk.id === book.id)
            book.shelf = !!extingBook ? extingBook.shelf : 'none'
            return book
          });
          this.setState(
            { 
              result 
            }
            )
        }
        else {
          this.setState(
            { 
              result: [] 
            }
            )
        }
      }
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={e => this.onInputChange(e.target.value)}
              value={this.state.input}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <SearchResult result={this.state.result} changeShelf={this.props.changeShelf}/>
      </div>
    )
  }
}

SearchBooks.propTypes = {
	books: PropTypes.array.isRequired
}

export default SearchBooks
