import React from 'react';
import { render } from '@testing-library/react';
import Scoreboard from './Scoreboard';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Scoreboard />);
    });
});

