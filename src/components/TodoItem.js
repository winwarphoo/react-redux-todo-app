import React from "react";

class TodoItem extends React.Component {
  deleteTodo(index) {
    this.props.del(index);
  }

  render() {
    return (
      <li key={this.props.key}>
        {this.props.todo}
        <button onClick={this.deleteTodo.bind(this, this.props.index)}>
          DEL
        </button>
      </li>
    )
  }
}

export default TodoItem;