import React from "react";
import Todo from "./Todo";
import { shallow } from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Todo/> Component", () => {
  const mockFn = jest.fn();
  const props = {
    onClick: mockFn,
    completed: false,
    text: "Learn Testing",
  };

  let component;
  beforeEach(() => {
    //shallow rendering our component
    component = shallow(<Todo {...props} />);
  });

  it("should render 1 todo component", () => {
    expect(component).toHaveLength(1);
    expect(component.find("li")).toHaveLength(1);
  });

  it("should render props correctly", () => {
    expect(component.props().children).toEqual("Learn Testing");
  });

  it("should set props correctly", () => {
    component.setProps({ text: "Hello" });
    expect(component.props().children).toEqual("Hello");
  });

  it("should call the onClick function when an item is clicked", () => {
    component.simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("<Todo/> Styling behavior", () => {
  const mockFn = jest.fn();
  it("should not have linethrough style when to is incomplete", () => {
    const component = shallow(
      <Todo onClick={mockFn} completed={false} text="Styling test" />
    );
    expect(component.props().style).toEqual({ textDecoration: "none" });
  });

  it("should have linethrough style when to is complete", () => {
    const component = shallow(
      <Todo onClick={mockFn} completed={true} text="Styling test" />
    );
    expect(component.props().style).toEqual({ textDecoration: "line-through" });
  });
});
