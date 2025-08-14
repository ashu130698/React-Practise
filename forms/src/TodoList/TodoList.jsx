import React, { Component } from "react";

export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: "",
      isEditing: false,
      editId: null,
      editValue: ""
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleAddTask = (e) => {
    e.preventDefault();
    const name = this.state.value.trim();
    if (!name) return;

    this.setState((prev) => ({
      todos: [...prev.todos, { id: Date.now(), name }],
      value: ""
    }));
  };

  handleDeleteTask = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id)
    }));
  };

  handleToggleEdit = (todo) => {
    this.setState({
      isEditing: true,
      editId: todo.id,
      editValue: todo.name
    });
  };

  handleEditInputChange = (e) => {
    this.setState({ editValue: e.target.value });
  };

  handleSubmitEditTodo = (e) => {
    e.preventDefault();
    const name = this.state.editValue.trim();
    if (!name) return;

    this.setState((prev) => ({
      todos: prev.todos.map((t) =>
        t.id === prev.editId ? { ...t, name } : t
      ),
      isEditing: false,
      editId: null,
      editValue: ""
    }));
  };

  handleCancelEdit = () => {
    this.setState({
      isEditing: false,
      editId: null,
      editValue: ""
    });
  };

  render() {
    const { todos, value, isEditing, editValue } = this.state;

    return (
      <div>
        {!isEditing ? (
          <form onSubmit={this.handleAddTask}>
            <input
              placeholder="Type your task"
              value={value}
              onChange={this.handleChange}
            />
            <button type="submit">+ Add task</button>
          </form>
        ) : (
          <form onSubmit={this.handleSubmitEditTodo}>
            <input
              placeholder="Edit your task"
              value={editValue}
              onChange={this.handleEditInputChange}
            />
            <button type="submit">Update</button>
            <button type="button" onClick={this.handleCancelEdit}>
              Cancel
            </button>
          </form>
        )}

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.name}
              <button type="button" onClick={() => this.handleToggleEdit(todo)}>Edit</button>
              <button type="button" onClick={() => this.handleDeleteTask(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
