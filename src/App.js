import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: {},
      authorsArray: authors,
      filteredAuthorArray: authors
    };
    this.selectAuthor = this.selectAuthor.bind(this);
    this.resetAuthor = this.resetAuthor.bind(this);
    this.filteringAuthors = this.filteringAuthors.bind(this);
  }

  selectAuthor(author) {
    this.setState({ currentAuthor: author });
  }

  resetAuthor() {
    this.setState({ currentAuthor: {} });
  }

  filteringAuthors(query) {
    let search = this.state.authorsArray.filter(
      author =>
        author.first_name.toLowerCase().includes(query.toLowerCase()) ||
        author.last_name.toLowerCase().includes(query.toLowerCase())
    );

    this.setState({ filteredAuthorArray: search });
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar resetAuthor={this.resetAuthor} />
          </div>
          <div className="content col-10">
            {this.state.currentAuthor.first_name ? (
              <AuthorDetail author={this.state.currentAuthor} />
            ) : (
              <AuthorsList
                authors={this.state.filteredAuthorArray}
                selectAuthor={this.selectAuthor}
                filteringAuthors={this.filteringAuthors}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
