import React from 'react';
import CommentList from '../src/components/CommentsList';

it('calls componentDidMount', () => {
	spy(CommentList.prototype, 'componentDidMount');

    const wrapper = mount(<CommentList />);
    expect(CommentList.prototype.componentDidMount.calledOnce).to.equal(true);
});

it('reverses the comments on the button click', () => {
  const wrapper = mount(<CommentList />);

  wrapper.setState({ comments: ['hello'] });
  wrapper.find('button').simulate('click');
  //for debugging
  //console.log(wrapper.state());
  expect(wrapper.state().comments[0]).to.equal('olleh');
});