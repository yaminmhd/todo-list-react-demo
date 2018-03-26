import React from 'react';
import PropTypes from 'prop-types';

const TodoTitle = (props) => {
  return(
    <h1 id="todo-title">{props.title} todos</h1>
  )
}


TodoTitle.propTypes = {
  title: PropTypes.string
}

export default TodoTitle