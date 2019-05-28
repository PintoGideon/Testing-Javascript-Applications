# Advanced React

### What do we test?

A framework to help us with testing.

- Look at each individual part of your application
- Imagine telling a friend 'Here is what this piece
  of code does'

- Write a test to verify each part does what you expect.

# it function

The it function is a global function which is used to organize all the tests we write.

The **_first argument_** to the it function is going to be the description of the test.

```javascript
it('shows a comment box', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
```

The React library only functions
correctly if it's being executed in the browser. Jest is an
automated test runner which is being
executed in our command line environment.

`create-react-app` installed a dependency called JSDOM library which is a js code implementation of how the browser works. JSDOM
fakes out the existence of a browser, so when we create a div element or unmount a component, we are making use of the JSDOM library to create a fake div.

```javascript
expect(div.innerHTML).toContain('Comment Box');
```

### Limitation to the above snipped in Jest.

If we write the above expectation for the App.js component, we are making an assertion of how the CommentBox component is going to behave. This is not ideal in a real world environment where component-specific tests would be difficult to write.

**_Enzyme_** is an open source package created by AirBnB to test react components specifically. It helps us write expectations closely to how React is configured.

Whenever jests starts up in our directory, it is going to look for a **_setupTests.js_** file inside the src directory and automatically execute it.

# Enzyme Renderers

Before testing a component, we need to decide which one the three handlers above do we need for testing.

Simulating events for testing

- Find the textarea element
- simulate a 'change' event
- provide a fake event object
- force the component to update
- assert that the textareas value has changed

When we call setState, we cause our component to re-render asynchronously. It queues up an update in React. While testing, the instance we simulate the change, right after the code, we have an expression that immediately looks at the component and checks if the new value is available.

describe can be used to group together certain types of tests. It can also be used to limit the scope of beforeEach statements.

Sometimes our components are subscribed to a Redux store. This can make it difficult to test because it requires a mocked Redux store in order to render in our test files.

# Testing Reducers

- Send actions with a type of 'SAVE_COMMENT'
- Doesn't throw an error if it gets an action with any
  other type

We will create a fake action with the type SAVE_COMMENT and a payload and send it to the reducer. The reducer will return a new state which can be compared to the expected value.

# Testing Action Creators

Testing our CommentList component is a bit tricky

It gets the comments store as a state in the redux store through mapStateToProps

```javascript
<Root>
	<CommentList />
</Root>
```

When Comment List boots up , the state in the redux store is empty hence testing becomes difficult.
We will pass an initalState to the Root Component via props which will set an intial state in our store.
