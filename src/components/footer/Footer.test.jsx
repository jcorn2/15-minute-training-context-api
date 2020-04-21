import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Footer />);
    });
});

