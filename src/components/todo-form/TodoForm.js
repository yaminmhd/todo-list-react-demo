import React from 'react';
import './TodoForm.css';

const TodoForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <input placeholder="Enter a task" type="text" onChange={props.handleInputChange} value={props.newTodos.description}/>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default TodoForm