import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card } from './Card';

const mockAsteroid = {
  name: 'Test',
  date: '2023-05-26',
  size: 100,
  distance: '500000',
  isDangerous: false,
  displayTip: true,
  id: '1',
};

describe('Card component', () => {
  test('renders without crashing', () => {
    render(<Card {...mockAsteroid} />);
  });

  test('renders correct content', () => {
    const { getByText } = render(<Card {...mockAsteroid} />);
    const linkElement = getByText(/Test/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('properly handles isDangerous prop', () => {
    const { container } = render(<Card {...mockAsteroid} />);
    const cardElement = container.firstChild;
    expect(cardElement.className).not.toContain('cardRed');

    const dangerousAsteroid = {...mockAsteroid, isDangerous: true};
    const { container: dangerContainer } = render(<Card {...dangerousAsteroid} />);
    const dangerousCardElement = dangerContainer.firstChild;
    expect(dangerousCardElement.className).toContain('cardRed');
  });
});
