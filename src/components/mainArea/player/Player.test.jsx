import React, { useReducer } from 'react';
import { render } from '@testing-library/react';
import Player from './Player';
import AppContext, { initialState, reducer } from 'components/AppContext';

const Wrapper = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <Player />
        </AppContext.Provider>
    );
};

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Wrapper />);
    });
});

