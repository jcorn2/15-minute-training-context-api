import React from 'react';

const initialState = {
    player1Score: 0,
    computerScore: 0,
    player1Choice: '',
    computerChoice: '',
    playingGame: false,
    gameOver: false,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'CHANGE_CHOICE_FOR_PLAYER1':
            return { ...state, player1Choice: action.newChoice };
        case 'COMPUTER_MADE_CHOICE':
            return { ...state, computerChoice: action.choice, gameOver: true };
        case 'PLAY_GAME':
            return { ...state, playingGame: true };
        case 'RESTART':
        default:
            return initialState;
    };
}

const AppContext = React.createContext();

export default AppContext;

export { initialState, reducer };
