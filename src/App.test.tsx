import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

test("First snapshot test", () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})



it('renders without crashing', () => {
  const setUp = (initialState = {}) => {
    const wrapper = shallow(<App />);
    return wrapper;
  }
});

test.skip('renders learn react link', () => {
  const { getByText } = render(<App />);


});
