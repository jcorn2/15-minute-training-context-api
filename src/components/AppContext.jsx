import React from 'react';

const initialState = {
    player1Score: 0,
    computerScore: 0,
    player1Choice: 'rock',
    computerChoice: 'rock',
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'CHANGE_CHOICE_FOR_PLAYER1':
            return { ...state, player1Choice: action.newChoice };
        default:
            return initialState;
    };
}

const AppContext = React.createContext();

export default AppContext;

export { initialState, reducer };
