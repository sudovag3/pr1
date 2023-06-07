import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Header';

describe('Header component', () => {
  test('renders without crashing', () => {
    render(<Router><Header /></Router>);
  });

  test('renders correct content', () => {
    const { getByText } = render(<Router><Header /></Router>);
    const linkElement = getByText(/ARMAGEDON V/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('navigates to correct page on click', () => {
    const { getByText } = render(<Router><Header /></Router>);
    fireEvent.click(getByText(/Астероиды/i));
    expect(window.location.pathname).toBe('/asteroids');
  });
});
