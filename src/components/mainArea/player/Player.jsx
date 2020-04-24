import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
} from '@material-ui/core';
import { ReactComponent as Penguin } from 'assets/penguin.svg';
import GameControls from 'components/mainArea/gameControls/GameControls';

const useStyles = makeStyles({
    gameIcon: {
        height: '84px',
        width: '84px',
    },
    gameIconsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    penguin: {
        height: '475px',
        width: '375px',
    },
    player: {
        gridArea: 'player1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function Player() {
    const classes = useStyles();

    return (
        <Container className={classes.player}>
            <Penguin className={classes.penguin} />
            <GameControls playerName="player1" />
        </Container>
    );
}

export default Player;
