import React from "react";

import * as TodoActions from "../actions/TodoActions";

export default class InputTodo extends React.Component {
  constructor(props) {
    super();

    this.state = {
      title: '',
    };
  }

  handleChange(e) {
    const title = e.target.value;
    this.setState({title  });
  }

  addNewTodo() {
    TodoActions.createTodo(this.state.title);
    this.setState({title: ''});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.title} onChange={this.handleChange.bind(this)} />
        <button onClick={this.addNewTodo.bind(this)}>Add</button>
      </div>
    );
  }
}
