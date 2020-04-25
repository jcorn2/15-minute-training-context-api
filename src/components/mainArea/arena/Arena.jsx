import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Button,
    Container,
    Typography,
} from '@material-ui/core';
import AppContext from 'components/AppContext';

const useStyles = makeStyles({
    arena: {
        gridArea: 'arena',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '16px 8px',
        background: 'orange', 
    },
    button: {
        backgroundColor: 'green',
        height: '50px',
        width: '150px',
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
    },
    winnerText: {
        height: '50px',
        fontSize: '32pt',
    },
});

function Arena() {
    const classes = useStyles();
    const { state, dispatch } = useContext(AppContext);

    const playGame = () => {
        const ranNum = Math.random();
        let computerChoice = 'scissors';
        if (ranNum < 0.34) {
            computerChoice = 'rock';
        } else if (ranNum < 0.67) {
            computerChoice = 'paper';
        }

        switch (`${state.player1Choice}${computerChoice}`) {
            case 'paperrock':
            case 'rockscissors':
            case 'scissorspaper':
                dispatch({ 
                    type: 'SET_WINNER', 
                    winner: 'player1', 
                    player1Score: state.player1Score + 1, 
                    computerScore: state.computerScore, 
                    computerChoice,
                });
                break;
            case 'rockpaper':
            case 'scissorsrock':
            case 'paperscissors':
                dispatch({ 
                    type: 'SET_WINNER', 
                    winner: 'computer', 
                    player1Score: state.player1Score, 
                    computerScore: state.computerScore + 1,  
                    computerChoice,
                });
                break;
            default:
                dispatch({ 
                    type: 'SET_WINNER', 
                    winner: 'It is a draw!', 
                    player1Score: state.player1Score, 
                    computerScore: state.computerScore,  
                    computerChoice,
                });
        }
    };

    const restart = () => dispatch({ type: 'RESTART' });

    return (
        <Container className={classes.arena}>
            <Typography className={classes.winnerText}>And the winner is...</Typography>
            <Typography className={classes.winnerText}>{state.winner}</Typography>
            <div className={classes.buttonsContainer}>
                <Button className={classes.button} onClick={playGame}>Play Game</Button>
                <Button className={classes.button} onClick={restart}>Restart</Button>
            </div>
        </Container>
    );
}

export default Arena;
