import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders a heading', () => {
    render(<App />);

    const heading = screen.getByText("What's up Codeworks?");

    expect(heading).toBeInTheDocument();
  });
});
