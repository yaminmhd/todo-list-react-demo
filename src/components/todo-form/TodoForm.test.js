import React from 'react';
import {shallow} from 'enzyme';
import TodoList from '../todo-list/TodoList';
import TodoTitle from '../todo-title/TodoTitle';
import TodoForm from '../todo-form/TodoForm';
import TodoItem from '../todo-item/TodoItem';


describe('TodoForm', ()=> {
  it('should render TodoForm properly', () => {
    const testTodo = {description: 'buy lunch', isCompleted: false};
    const wrapper = shallow(<TodoForm handleInputChange={()=>{}} handleSubmit={()=> {}} newTodos={testTodo}/>);
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it("should call handle Submit function supplied via props", () => {
    const testTodo = {description: 'trial run', isCompleted: false};
    const mockHandler = jest.fn();

    const wrapper = shallow(<TodoForm handleInputChange={()=>{}} newTodos={testTodo} handleSubmit={mockHandler} />);

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(mockHandler).toBeCalled();
  });


})