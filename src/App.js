import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './components/SearchBook/SearchBook';
import ListBooks from './components/ListBooks/ListBooks';
import Loading from './components/Loading/Loading';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     * 
     * DONE DONE DONE 
     */
    allBooks: [],
    loading: false

  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    this.setState({ loading: true }, () => {
      BooksAPI.getAll().then((books) => {
        this.setState({ allBooks: books });
        this.setState({ loading: false });
      })
    });
  }

  UpdateBookShelf = (book, shelf) => {
    this.setState({ loading: true }, () => {
      BooksAPI.update(book, shelf).then(() => {
        this.getAllBooks();
      })
    });

  }

  render() {
    return (

      <div className="app">
        {this.state.loading ? <Loading /> : null}
        {/* <Loading /> */}
        <Route exact path="/" render={() => (
          <Redirect to="/ListBooks" />
        )} />
        <Route path="/ListBooks"
          render={() => (
            <ListBooks
              books={this.state.allBooks}
              onUpdate={this.UpdateBookShelf}
            />
          )}
        />
        <Route path="/SearchBook" component={SearchBook} />
      </div>
    )
  }
}

export default BooksApp
