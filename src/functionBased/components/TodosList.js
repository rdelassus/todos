import React from "react"
import TodoItem from "./TodoItem";

class TodosList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            switch={this.props.todoSwitch}
            delete={this.props.deleteTodo}
            update={this.props.setUpdate}
          />
        ))}
      </ul>
    )
  }

}

export default TodosList
