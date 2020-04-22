import React from 'react';
import { render } from '@testing-library/react';
import MainArea from './MainArea';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<MainArea />);
    });
});

