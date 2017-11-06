import React, { Component } from 'react';
import './App.css';

var todos = [
  {
    todoTitle: 'Title0',
    todoResponsabile: 'Name0',
    todoDescription: 'Description0',
    todoPriority: 'Low'
  },
  {
    todoTitle: 'Title1',
    todoResponsabile: 'Name1',
    todoDescription: 'Description1',
    todoPriority: 'Medium'
  },
  {
    todoTitle: 'Title2',
    todoResponsabile: 'Name2',
    todoDescription: 'Description2',
    todoPriority: 'High'
  }
]

class App extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index
      })
    })
  }

  handleAddTodo(todo) {
    this.setState({todos: [...this.state.todos, todo]})
  }

  render() {
    return (
        <div className="container">
        <TodoInput onAddTodo={this.handleAddTodo}></TodoInput>
        <hr />
          <h4>Todo Count:
            <span className="badge">
              {this.state.todos.length}
            </span>
          </h4>
         <ul>
         {this.state.todos.map((todo, index) => 
            <li className="list-group-item" key="{index}">
              <h4 className="list-group-item-heading">
                {todo.todoTitle}
                <small>
                  <span className="label label-info">
                    {todo.todoPriority}
                  </span>
                </small>
              </h4>

              <p>
               <span className="glyphicon glyphiconon-user">
                {todo.todoResponsabile}
                </span>
              </p>

              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}>
                <span className="glyphicon glyphicon-trash">
                   Delete
                </span>
              </button>
            </li>
          )}
         </ul> 
        </div>
      );      
  }
}

class TodoInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      todoTitle: '',
      todoResponsabile: '',
      todoDescription: '',
      todoPriority: 'Lowest'
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value, 
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: '',
      todoResponsabile: '',
      todoDescription: '',
      todoPriority: 'Lowest'
    })
  }



  render() {
    return (
      <div>
        <h4>Add New Todo</h4>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Todo</label>
              <div className="col-sm-10">
                <input  name="todoTitle"
                        type="text"
                        className="form-control"
                        id="inputTodoTitle"
                        value={this.state.todoTitle}
                        onChange={this.handleInputChange}
                        placeholder="Title"></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible</label>
              <div className="col-sm-10">
                <input  name="todoResponsible"
                        type="text"
                        className="form-control"
                        id="inputTodoResponsible"
                        value={this.state.todoResponsible}
                        onChange={this.handleInputChange}
                        placeholder="Responsible"></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoDesc" className="col-sm-2 control-label">Description</label>
              <div className="col-sm-10">
                <textarea   name="todoDescription"
                            className="form-control"
                            rows="3"
                            id="inputTodoDesc"
                            value={this.state.todoDescription}
                            onChange={this.handleInputChange}></textarea>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">Priority</label>
              <div className="col-sm-10">
                <select   name="todoPriority"
                          className="form-control"
                          id="inputTodoPriority"
                          value={this.state.todoPriority}
                          onChange={this.handleInputChange}>
                  <option>Lowest</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Highest</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-success">Add Todo</button>
              </div>
            </div>
          </form>
      </div>
    );
  }
}
export default App;
