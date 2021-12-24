import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  deleteTodo(index) {
    this.props.del(index);
  }

  render() {
    return (
      <div>
        <h5>Todo List</h5>
        <ul>
          {this.props.todos.map((todo, index) => {
            return(
              <TodoItem
                todo={todo}
                index={index}
                key={index}
                del={this.deleteTodo.bind(this)}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList;