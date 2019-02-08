import React from "react";
import {BrowserRouter, Switch , Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./component/book/ListBooks";
import SearchBooks from "./component/seacrh/SearchBooks";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  componentDidMount() {
    this.getAllBooks();
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(bk => bk.id !== book.id).concat(book)
      }))
    })
  }


  render() {
    return (
      <div className="app">
      <BrowserRouter>
        <Switch>
          <Route
              exact path="/"
              render={() => (
                <ListBooks
                  books={this.state.books}
                  changeShelf={this.changeBookShelf}
                />
              )}
            />
            <Route
              exact path="/search"
              render={() => (
                <SearchBooks
                  books={this.state.books}
                  changeShelf={this.changeBookShelf}
                />
              )}
            />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
