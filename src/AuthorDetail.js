import React, { Component } from "react";
import BookRow from "./BookRow";

class AuthorDetail extends Component {
  render() {
    let anAuthor = this.props.author;
    let books = anAuthor.books.map(book => (
      <BookRow book={book} author={anAuthor} />
    ));

    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {anAuthor.first_name} {anAuthor.last_name}
          </h3>
          <img
            src={anAuthor.imageUrl}
            className="img-thumbnail"
            alt="{anAuthor.first_name}+{anAuthor.last_name}"
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
