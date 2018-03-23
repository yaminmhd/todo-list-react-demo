import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";
import '../todo-title/TodoTitle.css';
import TodoItem from '../todo-item/TodoItem';
import TodoTitle from '../todo-title/TodoTitle';
import TodoForm from '../todo-form/TodoForm';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos:todos,
      newTodos: {description: '', isCompleted: false}
    };
  }

  toggleComplete(index){
    const todoCopy = [...this.state.todos]
    const itemClicked = todoCopy[index]
    const isCompletedValue = itemClicked['isCompleted']

    if(isCompletedValue === false){
      itemClicked['isCompleted'] = true
    }else if(isCompletedValue === true){
      itemClicked['isCompleted'] = false
    }

    this.setState({
      todos: todoCopy
    });
  }

  handleInputChange(event){
    // console.log(event.target.value)
    this.setState({newTodos:
      {description:event.target.value, isCompleted: false}
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const finalTodos = this.state.todos.concat(this.state.newTodos);
    //const finalTodos = [...this.state.todos, ...this.state.newTodos];
    //console.log(this.state.newTodos);
    this.setState({
      todos: finalTodos,
      newTodos: {description:'', isCompleted:false}
    })
  }

  render() {
    const items = this.state.todos.map((todo,index)=>{
      return (
        <TodoItem
          key={index}
          todo={todo}
          markedAsDone={this.toggleComplete.bind(this,index)}
        />
      )
    })

    return (
      <div id="todo-list">
        <TodoTitle title={this.props.title}/>
        <TodoForm
          handleInputChange={this.handleInputChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          newTodos={this.state.newTodos}
        />
        <br/>
        {items}
      </div>
    );
  }
}

export default TodoList;
