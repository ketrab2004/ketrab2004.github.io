import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Pages/Home';

test("true is true", () => {
    expect(true).toBeTruthy();
});

test('home renders learn react link', () => {
    render(<Home />);

    expect( screen.getByText(/[Ll]earn [Rr]eact/i) ).toBeInTheDocument();
});
