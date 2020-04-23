import React, { useReducer } from 'react';
import { render } from '@testing-library/react';
import MainArea from './MainArea';
import AppContext, { initialState, reducer } from 'components/AppContext';

const Wrapper = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <MainArea />
        </AppContext.Provider>
    );
};

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Wrapper />);
    });
});

