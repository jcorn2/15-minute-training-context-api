import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
} from '@material-ui/core';
import { ReactComponent as Toucan } from 'assets/toucan.svg';
import AppContext from 'components/AppContext';
import GameControls from 'components/mainArea/gameControls/GameControls';

const useStyles = makeStyles({
    toucan: {
        height: '500px',
        width: '440px',
    },
    player: {
        gridArea: 'computer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function Computer() {
    const classes = useStyles();
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        if (state.playingGame) {
            const ranNum = Math.random();
            let choice = 'scissors';
            if (ranNum < 0.34) {
                choice = 'rock';
            } else if (ranNum < 0.67) {
                choice = 'paper';
            }

            dispatch({ type: 'COMPUTER_MADE_CHOICE', choice });
        }
    }, [state.playingGame, dispatch]);

    return (
        <Container className={classes.player}>
            <Toucan className={classes.toucan} />
            <GameControls playerName="computer" />
        </Container>
    );
}

export default Computer;
