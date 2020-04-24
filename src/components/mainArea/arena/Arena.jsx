import React, { useContext, useEffect, useState } from 'react';
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
    playButton: {
        backgroundColor: 'green',
        height: '50px',
        width: '150px',
    },
});

function Arena() {
    const classes = useStyles();
    const { state, dispatch } = useContext(AppContext);
    const [winner, setWinner] = useState('');

    const playGame = () => dispatch({ type: 'PLAY_GAME' });

    useEffect(() => {
        if (state.gameOver) {
            switch (state.player1Choice) {
                case 'rock':
                    setWinner(state.computerChoice === 'scissors' ? 'player1' : 'computer');
                    break;
                case 'scissors':
                    setWinner(state.computerChoice === 'paper' ? 'player1' : 'computer');
                    break;
                case 'paper':
                    setWinner(state.computerChoice === 'rock' ? 'player1' : 'computer');
                    break;
                default:
                    setWinner('It is a draw!');
            }
        }
    }, [state]);

    return (
        <Container className={classes.arena}>
            <Typography>{`And the winner is... ${winner}`}</Typography>
            {Boolean(winner) && <Typography>{winner}</Typography>}
            <Button className={classes.playButton} onClick={playGame}>Play Game</Button>
        </Container>
    );
}

export default Arena;
