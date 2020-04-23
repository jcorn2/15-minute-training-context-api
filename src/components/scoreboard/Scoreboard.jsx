import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Container,
} from '@material-ui/core';
import Score from './score/Score';

const useStyles = makeStyles({
    scoreboard: {
        backgroundColor: '#4907D7',
        gridArea: 'scorebar',
        maxWidth: 'none',
        display: 'flex',
    },
});

function Scoreboard() {
    const classes = useStyles();

    return (
        <Container className={classes.scoreboard}>
            <Score playerName="You" player="player1" />
            <Score playerName="Computer" player="computer" />
        </Container>
    );
}

export default Scoreboard;
