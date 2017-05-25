import React from "react";
import { IndexLink, Link } from "react-router";

export default class Article extends React.Component {
  selectArticle() {
    // this.props.history.push(null, `/archieves/${this.props.title}`);
    console.log(this);
    return false;
  }

  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4 {selected}">
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a class="btn btn-default" href="#/archives/abc" onClick={this.selectArticle.bind(this)}>More Info</a>
      </div>
    );
  }
}
