import React from 'react';
import {shallow} from 'enzyme';
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
})