import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Button,
    Container,
} from '@material-ui/core';

const useStyles = makeStyles({
    arena: {
        gridArea: 'arena',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
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

    return (
        <Container className={classes.arena}>
            <Button className={classes.playButton}>Play Game</Button>
        </Container>
    );
}

export default Arena;
