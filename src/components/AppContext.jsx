import React from 'react';

const initialState = {
    player1Score: 0,
    computerScore: 0,
    choice: 'rock',
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'CHANGE_CHOICE':
            return { ...state, choice: action.newChoice };
        default:
            return initialState;
    };
}

const AppContext = React.createContext();

export default AppContext;

export { initialState, reducer };
