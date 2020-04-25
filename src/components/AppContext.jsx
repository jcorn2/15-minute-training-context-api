import React from 'react';

const initialState = {
    player1Score: 0,
    computerScore: 0,
    player1Choice: '',
    computerChoice: '',
    winner: '',
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'CHANGE_CHOICE_FOR_PLAYER1':
            return { ...state, player1Choice: action.newChoice };
        case 'SET_WINNER':
            return { 
                ...state, 
                winner: action.winner, 
                player1Score: action.player1Score, 
                computerScore: action.computerScore, 
                computerChoice: action.computerChoice, 
            };
        case 'RESTART':
            return { ...initialState, player1Score: state.player1Score, computerScore: state.computerScore };
        default:
            return initialState;
    };
}

const AppContext = React.createContext();

export default AppContext;

export { initialState, reducer };
