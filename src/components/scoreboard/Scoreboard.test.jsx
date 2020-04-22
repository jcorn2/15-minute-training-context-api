import React, { useReducer } from 'react';
import { render } from '@testing-library/react';
import Scoreboard from './Scoreboard';
import AppContext, { initialState, reducer } from 'components/AppContext';

const Wrapper = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <Scoreboard />
        </AppContext.Provider>
    );
};

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Wrapper />);
    });
});

