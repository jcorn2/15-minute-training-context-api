import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
} from '@material-ui/core';
import { ReactComponent as Toucan } from 'assets/toucan.svg';
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

    return (
        <Container className={classes.player}>
            <Toucan className={classes.toucan} />
            <GameControls />
        </Container>
    );
}

export default Computer;
