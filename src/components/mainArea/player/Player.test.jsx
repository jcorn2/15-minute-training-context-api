import React from 'react';
import { render } from '@testing-library/react';
import Player from './Player';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Player />);
    });
});

