import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
} from '@material-ui/core';
import { ReactComponent as Penguin } from '../../../assets/penguin.svg';

const useStyles = makeStyles({
    penguin: {
        height: '475px',
        width: '375px',
    },
    player: {
        gridArea: 'player1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function Player() {
    const classes = useStyles();

    return (
        <Container className={classes.player}>
            <Penguin className={classes.penguin} />
        </Container>
    );
}

export default Player;
