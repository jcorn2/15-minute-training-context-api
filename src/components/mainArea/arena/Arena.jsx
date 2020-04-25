import React, { useContext, useEffect } from 'react';
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
});

function Arena() {
    const classes = useStyles();
    const { state, dispatch } = useContext(AppContext);

    const playGame = () => dispatch({ type: 'PLAY_GAME' });

    const restart = () => dispatch({ type: 'RESTART' });

    useEffect(() => {
        if (state.gameOver) {
            switch (`${state.player1Choice}${state.computerChoice}`) {
                case 'paperrock':
                case 'rockscissors':
                case 'scissorspaper':
                    dispatch({ type: 'SET_WINNER', winner: 'player1' });
                    break;
                case 'rockpaper':
                case 'scissorsrock':
                case 'paperscissors':
                    dispatch({ type: 'SET_WINNER', winner: 'computer' });
                    break;
                default:
                    dispatch({ type: 'SET_WINNER', winner: 'It is a draw!' });
            }
        }
    }, [state.gameOver, state.computerChoice, state.player1Choice, dispatch]);

    return (
        <Container className={classes.arena}>
            <Typography>And the winner is...</Typography>
            {Boolean(state.winner) && <Typography>{state.winner}</Typography>}
            <div className={classes.buttonsContainer}>
                <Button className={classes.button} onClick={playGame}>Play Game</Button>
                {Boolean(state.winner) && <Button className={classes.button} onClick={restart}>Restart</Button>}
            </div>
        </Container>
    );
}

export default Arena;
