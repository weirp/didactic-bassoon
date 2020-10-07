import React from 'react';
import { getByTitle, render } from '@testing-library/react';
import App from './App';


test('check labels', () => {
  const { getByText, getAllByTitle, getByLabelText } = render(<App/>);
  const multiMatchLabel = getByLabelText(/Multiple matches/i);
  expect(multiMatchLabel).toBeInTheDocument();

  const textLabel = getByLabelText(/Text to search/i);
  expect(textLabel).toBeInTheDocument();

  const subtextLabel = getByLabelText(/Search for/i);
  expect(subtextLabel).toBeInTheDocument();


});
