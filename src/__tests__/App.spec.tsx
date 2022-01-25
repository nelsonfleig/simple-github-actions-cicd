import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders a heading', () => {
    render(<App />);

    const heading = screen.getByText('Hello Vite + React!');

    expect(heading).toBeInTheDocument();
  });
});
