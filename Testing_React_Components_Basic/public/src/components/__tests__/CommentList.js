import React, { Component } from 'react';
import { mount } from 'enzyme';
import CommentList from '../../components/CommentList';
import Root from '../../Root';

const initalState = {
	comments: ['Comment1', 'Comment2']
};

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<Root initalState={initalState}>
			<CommentList />
		</Root>
	);
});

it('shows an li per comment', () => {
	expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
	expect(wrapped.render().text()).toContain('Comment 1');
	expect(wrapped.render().text()).toContain('Comment 2');
});
