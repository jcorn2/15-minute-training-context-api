import React from 'react';
import { render } from '@testing-library/react';
import GameControls from './GameControls';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<GameControls />);
    });
});

