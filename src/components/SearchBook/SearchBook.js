import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from "../Book";
import * as BooksAPI from '../../BooksAPI';
import Loading from "../Loading/Loading";
class SearchBook extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
  }

  state = {
    query: '',
    loading: false,
    books: [],
    noResults: false
  }

  SearchforBooks = query => {
    this.setState({ query })
    if (!query || (query === '')) {
      this.setState({
        books: []
      })
    } else {
      this.setState({ loading: true }, () => {
        BooksAPI.search(query)
        .then(books => {
          if(!books.error){
            this.props.books.forEach((book) => {
              books.forEach(bookOnShelf => {
               if(book.id === bookOnShelf.id) {
                 bookOnShelf.shelf = book.shelf
                 book.shelf = bookOnShelf.shelf
                }
              })
            })
            this.setState({
              books: books,
              loading: false,
              noResults: false
            })
          } else{
            this.setState({
              books: [],
              loading: false,
              noResults: true
            })
          }
          
        })
        .catch(error => {
            console.log(error);
        })
        });
    }
  }

  render() {
    return (

      <div className="search-books">
        {this.state.loading ? <Loading /> : null}
        
        <div className="search-books-bar">
          <Link className="close-search" to='/react-my-reads'>Back</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.SearchforBooks(event.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
        {this.state.noResults ? <div> No results found </div> : null}
          <ol className="books-grid">
            {this.state.books.map((book, index) => (<Book book={book} key={index} onUpdateBook={this.props.onUpdate} />))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook;
