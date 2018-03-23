import React from 'react';
import {shallow, mount} from 'enzyme';
import TodoList from '../todo-list/TodoList';
import TodoTitle from '../todo-title/TodoTitle';
import TodoForm from '../todo-form/TodoForm';
import TodoItem from '../todo-item/TodoItem';


describe('TodoList', ()=> {
  it('should render TodoList properly', () => {
    const wrapper = shallow(<TodoList title="My test title"/>);
    //console.log(wrapper.find(TodoTitle).props());

    expect(wrapper.find('#todo-list')).toHaveLength(1);
    expect(wrapper.find(TodoTitle)).toHaveLength(1);
    expect(wrapper.find(TodoTitle).props().title).toEqual('My test title');
    expect(wrapper.find(TodoItem)).toHaveLength(wrapper.state().todos.length);
    expect(wrapper.find(TodoForm)).toHaveLength(1);

  });

  it('should save state on form submit', () => {
    //const testTodo = {description: 'trial run', isCompleted: false};
    const wrapper = shallow(<TodoList />)
    const expectedLength = wrapper.state().todos.length + 1;
    const event = {preventDefault(){}}

    //console.log(wrapper.find(TodoForm).props().handleSubmit)
    wrapper
      .find(TodoForm)
      .props()
      .handleSubmit(event)

    expect(wrapper.state().todos).toHaveLength(expectedLength);
  });

  it('should update state on every input change', () => {
    const wrapper = shallow(<TodoList />)
    const event = {target:{value: 'a'}};
    wrapper
       .find(TodoForm)
       .props()
       .handleInputChange(event)
    //console.log(wrapper.state())
    expect(wrapper.state().newTodos.description).toEqual('a');
  });

  it('should toggle isCompleted value on click', () => {
    const index = 0;
    const wrapper = shallow(<TodoList/>)
    wrapper
      .find(TodoItem)
      .first()
      .props()
      .markedAsDone(index);
    //console.log(wrapper.state().todos[0])
    expect(wrapper.state().todos[0].isCompleted).toEqual(false);
  });

})