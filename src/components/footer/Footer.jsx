import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Container,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
    gameText: {
        fontSize: '36pt',
        color: '#EFEFEF',
        margin: 'auto',
    },
    scoreboard: {
        backgroundColor: 'red',
        gridArea: 'bottom',
        maxWidth: 'none',
        display: 'flex',
    },
});

function Footer() {
    const classes = useStyles();

    return (
        <Container className={classes.scoreboard}>
            <Typography className={classes.gameText}>Rock Paper Scissors</Typography>
        </Container>
    );
}

export default Footer;
