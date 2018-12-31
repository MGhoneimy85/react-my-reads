import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './components/SearchBook/SearchBook';
import Book from './components/Book/Book';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      console.log(books);
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook />
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>my books shelfs</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        <li>
                          <Book />
                        </li>
                        <li>
                          <Book />
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        <li>
                          <Book />
                        </li>
                        <li>
                          <Book />
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        <li>
                          <Book />
                        </li>
                        <li>
                          <Book />
                        </li>
                        <li>
                          <Book />
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
