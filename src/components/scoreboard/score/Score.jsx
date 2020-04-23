import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
    Container,
    Typography,
} from '@material-ui/core';
import AppContext from 'components/AppContext';

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

function Score({ player, playerName }) {
    const classes = useStyles();
    const direction = playerName === 'Computer' && classes.computer;
    const { state, dispatch } = useContext(AppContext);

    return (
        <Container className={`${classes.scoreContainer} ${direction}`}>
            <Typography className={`${classes.text} ${classes.player}`}>{playerName}</Typography>
            <Typography className={classes.text}>{state[`${player}Score`]}</Typography>
        </Container>
    );
}

Score.propTypes = {
    player: PropTypes.string.isRequired,
    playerName: PropTypes.string.isRequired,
};

export default Score;
