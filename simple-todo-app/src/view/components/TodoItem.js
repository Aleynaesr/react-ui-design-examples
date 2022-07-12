import React from "react";
import { TiDelete } from "react-icons/ti"

class TodoItem extends React.Component {
  render() {

    const { completed, id, title } = this.props.todo;

    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}><TiDelete /></button>
        <span className={completed ? "completedStyle" : null}>{title}</span>
      </li>
    );
  }
}

export default TodoItem;
