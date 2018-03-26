import React from 'react';
import {shallow} from 'enzyme';
import TodoList from '../todo-list/TodoList';
import TodoTitle from '../todo-title/TodoTitle';
import TodoForm from '../todo-form/TodoForm';
import TodoItem from '../todo-item/TodoItem';


describe('TodoItem', ()=> {
  it('should render TodoItem properly', () => {
    const testTodo = {description: 'buy lunch', isCompleted: false};

    const wrapper = shallow(<TodoItem todo={testTodo}/>);
    expect(wrapper.props().children).toEqual('buy lunch');
  });

  it("should call function supplied via props and className should be empty when isCompleted is false", () => {
    const testTodo = {description: 'trial run', isCompleted: false};
    const mockHandler = jest.fn();

    const wrapper = shallow(<TodoItem todo={testTodo} markedAsDone={mockHandler} />);
    wrapper.find("li").simulate("click", { preventDefault() {} });
    expect(mockHandler).toBeCalled();
    expect(wrapper.find('li').props().className).toEqual('');

  });

  it("should call function supplied via props and className should be done when isCompleted is true", () => {
    const testTodo = {description: 'trial run', isCompleted: true};
    const mockHandler = jest.fn();

    const wrapper = shallow(<TodoItem todo={testTodo} markedAsDone={mockHandler} />);
    wrapper.find("li").simulate("click", { preventDefault() {} });
    expect(mockHandler).toBeCalled();
    expect(wrapper.find('li').props().className).toEqual('done');

  });
})