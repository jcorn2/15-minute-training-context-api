import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
} from '@material-ui/core';

const useStyles = makeStyles({
    scoreboard: {
        backgroundColor: '#4907D7',
        gridArea: 'scorebar',
        maxWidth: 'none',
    },
});

function Scoreboard() {
    const classes = useStyles();

    return (
        <Container className={classes.scoreboard}>
            Scorecard
        </Container>
    );
}

export default Scoreboard;
