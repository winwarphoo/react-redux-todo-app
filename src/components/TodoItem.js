import React from "react";
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todoAction';

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

const mapDispatchToProps = (dispatch) => {
  return {
    del: (index) => dispatch(deleteTodo(index))
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
