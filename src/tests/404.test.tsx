import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';
import Error404 from '../Pages/404';


test('404 page renders 404 as text', () => {
    render(<Error404 />);

    expect( screen.queryByText(/404/i) ).toBeInTheDocument();
});


test('page that doesn\'t exist renders 404 as text', () => {
    render(
    <MemoryRouter initialEntries={['/not-a-page']}>
        <App />
    </MemoryRouter>);

    expect( screen.queryByText(/404/i) ).toBeInTheDocument();
});


test('page that does exist doesn\'t render 404', () => {
    render(
    <MemoryRouter initialEntries={['/projects']}>
        <App />
    </MemoryRouter>);

    expect( screen.queryByText(/404/i) ).not.toBeInTheDocument();
});


test('project that doesn\'t exist renders 404 as text', () => {
    render(
    <MemoryRouter initialEntries={['/projects/not-a-project']}>
        <App />
    </MemoryRouter>);

    expect( screen.queryByText(/404/i) ).toBeInTheDocument();
});
