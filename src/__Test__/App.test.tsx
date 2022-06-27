import React from 'react';
import { render, screen , waitFor , fireEvent } from '@testing-library/react';
import App from '../App';
import "@testing-library/jest-dom"
test('renders learn react link',async () => {
  await waitFor(()=>render(<App/>)!) 
  expect(screen.getByTestId("app")).toBeInTheDocument()

});
