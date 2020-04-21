import React from 'react';
import { render } from '@testing-library/react';
import Score from './Score';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Score playerName="You" />);
    });
});

