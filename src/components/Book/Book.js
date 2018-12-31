import React, { Component } from "react";
import PropTypes from 'prop-types';
class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }
  state = {
    value: this.props.book.shelf
  }

  updateVal(val){
    
    this.props.onUpdateBook(this.props.book,val)
    this.setState({ value : val })
  }

  render() {
    return (<li key={this.props.book.id}>
      <div className="book">
    <div className="book-top">
    {this.props.book.imageLinks ?  <div className="book-cover" style={{backgroundImage: "url(" + this.props.book.imageLinks.smallThumbnail + ")"}}></div> : null}
      <div className="book-shelf-changer">
        <select value={this.state.value ?  this.state.value : 'none' } onChange={event =>  this.updateVal( event.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{this.props.book.title}</div>
    <div className="book-authors">{this.props.book.authors}</div>
  </div></li>);
  }
}

export default Book;
