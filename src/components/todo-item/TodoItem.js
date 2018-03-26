import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem