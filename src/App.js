import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy milk" },
      { id: 2, content: "clean house" }
    ]
  };

  deleteTodo = id => {
    const todosList = [...this.state.todos];
    const todos = todosList.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  addTodo = todo => {
    const todos = [...this.state.todos];
    const maxId = todos.reduce((id, todo) => {
      return id > todo.id ? id : todo.id;
    });
    todo.id = maxId + 1;

    this.setState({ todos: [...this.state.todos, todo] });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Tasks</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
