import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Container,
} from '@material-ui/core';

const useStyles = makeStyles({
    scoreboard: {
        backgroundColor: 'red',
        gridArea: 'bottom',
        maxWidth: 'none',
    },
});

function Footer() {
    const classes = useStyles();

    return (
        <Container className={classes.scoreboard}>
            Footer
        </Container>
    );
}

export default Footer;
