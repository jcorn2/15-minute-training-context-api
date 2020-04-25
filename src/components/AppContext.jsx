import React from 'react';

const initialState = {
    player1Score: 0,
    computerScore: 0,
    player1Choice: '',
    computerChoice: '',
    playingGame: false,
    gameOver: false,
    winner: '',
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'CHANGE_CHOICE_FOR_PLAYER1':
            return { ...state, player1Choice: action.newChoice };
        // case 'COMPUTER_MADE_CHOICE':
        //     return { ...state, playingGame: false, computerChoice: action.choice, gameOver: true };
        // case 'PLAY_GAME':
        //     return { ...state, playingGame: true };
        case 'SET_WINNER':
            return { 
                ...state, 
                winner: action.winner, 
                player1Score: action.player1Score, 
                computerScore: action.computerScore, 
                computerChoice: action.computerChoice, 
            };
        // case 'CHANGE_PLAYER1_SCORE':
        //     return { ...state, player1Score: action.player1Score };
        // case 'CHANGE_COMPUTER_SCORE':
        //     return { ...state, computerScore: action.computerScore };
        case 'RESTART':
            return { ...initialState, player1Score: state.player1Score, computerScore: state.computerScore };
        default:
            return initialState;
    };
}

const AppContext = React.createContext();

export default AppContext;

export { initialState, reducer };
