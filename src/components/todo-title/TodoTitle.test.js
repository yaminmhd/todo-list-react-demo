import React from 'react';
import {shallow} from 'enzyme';
import TodoList from '../todo-list/TodoList';
import TodoTitle from '../todo-title/TodoTitle';
import TodoForm from '../todo-form/TodoForm';
import TodoItem from '../todo-item/TodoItem';


describe('TodoTitle', ()=> {
  it('should render TodoTitle properly', () => {
    const wrapper = shallow(<TodoTitle/>);

    expect(wrapper.find('#todo-title')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
})