import React from 'react'
import { Route , Redirect } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './components/SearchBook/SearchBook';
import ListBooks from './components/ListBooks/ListBooks';

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
      <Route exact path="/" render={() => (
        <Redirect to="/ListBooks"/>
        )}/>
        <Route path="/ListBooks" component={ListBooks}/>
        <Route path="/SearchBook" component={SearchBook}/>
      </div>
    )
  }
}

export default BooksApp
