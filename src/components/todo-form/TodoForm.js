import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoForm.css';

class TodoForm extends Component{
  render(){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input id="test" placeholder="Enter a task" type="text" onChange={this.props.handleInputChange} value={this.props.newTodos.description}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

TodoForm.propTypes = {
  newTodos: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default TodoForm