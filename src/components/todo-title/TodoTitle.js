import React, {Component} from 'react';

class TodoTitle extends Component{
  constructor(props){
    super()
    this.state = {
      title: props.title
    }
  }

  render(){
    return(
      <h1 id="todo-title">{this.state.title} todos</h1>
    )
  }
}

export default TodoTitle