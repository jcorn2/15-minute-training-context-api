import React from 'react';
import { render } from '@testing-library/react';
import Computer from './Computer';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Computer />);
    });
});

