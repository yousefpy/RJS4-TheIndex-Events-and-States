import React, { Component } from "react";

class BookRow extends Component {
  render() {
    let author = this.props.author;
    // let book = anAuthor.books.map(book => <td>{book.title}</td>);
    return (
      <tr>
        <td>{this.props.book.title}</td>
        <td>
          {author.first_name} {author.last_name}
        </td>
        <td>
          <button
            className="btn"
            style={{ backgroundColor: this.props.book.color }}
          />
        </td>
      </tr>
    );
  }
}

export default BookRow;
