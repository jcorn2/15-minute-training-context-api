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
    const [winner, setWinner] = useState('');

    const playGame = () => dispatch({ type: 'PLAY_GAME' });

    const restart = () => {
        setWinner('');
        dispatch({ type: 'RESTART' });
    };

    useEffect(() => {
        if (state.gameOver) {
            switch (`${state.player1Choice}${state.computerChoice}`) {
                case 'rockpaper':
                case 'rockscissors':
                case 'scissorspaper':
                    setWinner('player1');
                    break;
                case 'paperrock':
                case 'scissorsrock':
                case 'paperscissors':
                    setWinner('computer');
                    break;
                default:
                    setWinner('It is a draw!');
            }
        }
    }, [state]);

    return (
        <Container className={classes.arena}>
            <Typography>And the winner is...</Typography>
            {Boolean(winner) && <Typography>{winner}</Typography>}
            <div className={classes.buttonsContainer}>
                <Button className={classes.button} onClick={playGame}>Play Game</Button>
                {Boolean(winner) && <Button className={classes.button} onClick={restart}>Restart</Button>}
            </div>
        </Container>
    );
}

export default Arena;
