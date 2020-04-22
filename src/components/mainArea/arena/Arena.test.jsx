import React from 'react';
import { render } from '@testing-library/react';
import Arena from './Arena';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Arena />);
    });
});

