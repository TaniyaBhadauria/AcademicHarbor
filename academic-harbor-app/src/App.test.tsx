import React from 'react';
import { render, screen } from '@testing-library/react';
import AcademicHarborApp from './AcademicHarborApp';

test('renders learn react link', () => {
  render(<AcademicHarborApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
