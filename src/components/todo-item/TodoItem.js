import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component{
  render(){
    const cssToApply = this.props.todo.isCompleted ? "done" : ""
    return(
      <li className= {cssToApply} onClick={this.props.markedAsDone}>
        {this.props.todo.description}
      </li>
    )
  }
}

export default TodoItem