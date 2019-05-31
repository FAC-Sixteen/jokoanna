import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup} from 'react-testing-library';
import App from './App';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('When name is submitted Lipsync is rendered', () => {
  const {getByText, getByLabelText} = render(<App/>);
  const inputNode = getByLabelText('Name:');
  fireEvent.change(inputNode, {
    target: {
      value: 'Joe'
    }
  });
  const buttonNode = getByText('Submit');
  fireEvent.click(buttonNode);
  getByText('Loading...');
}); 