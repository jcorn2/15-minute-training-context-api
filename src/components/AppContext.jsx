import React from 'react';

const initialState = {
    player1Score: 0,
    computerScore: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return initialState;
    };
}

const AppContext = React.createContext();

export default AppContext;

export { initialState, reducer };
