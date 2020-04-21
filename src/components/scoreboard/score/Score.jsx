import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
    Container,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
    computer: {
        flexDirection: 'row-reverse',
    },
    player: {
        marginRight: '32px',
    },
    scoreContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: '48pt',
        color: '#EFEFEF',
    },
});

function Score({ playerName }) {
    const classes = useStyles();
    const direction = playerName === 'Computer' && classes.computer
    const [score] = useState(0);

    return (
        <Container className={`${classes.scoreContainer} ${direction}`}>
            <Typography className={`${classes.text} ${classes.player}`}>{playerName}</Typography>
            <Typography className={classes.text}>{score}</Typography>
        </Container>
    );
}

Score.propTypes = {
    playerName: PropTypes.string.isRequired,
};

export default Score;
