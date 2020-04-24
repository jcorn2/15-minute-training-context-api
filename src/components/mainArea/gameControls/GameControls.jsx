import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
    Container,
    IconButton,
} from '@material-ui/core';
import { ReactComponent as Rock } from '@fortawesome/fontawesome-free/svgs/solid/hand-rock.svg';
import { ReactComponent as Paper } from '@fortawesome/fontawesome-free/svgs/solid/hand-paper.svg';
import { ReactComponent as Scissors } from '@fortawesome/fontawesome-free/svgs/solid/hand-scissors.svg';
import AppContext from 'components/AppContext';

const useStyles = makeStyles({
    choice: {
        fill: '#4907D7',
        stroke: 'red',
        strokeWidth: '20px',
    },
    gameIcon: {
        height: '84px',
        width: '84px',
    },
    gameIconsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    notSelected: {
        fill: 'white',
        stroke: 'black',
        strokeWidth: '20px',
    },
})

function GameControls({ playerName }) {
    const classes = useStyles();
    const { state, dispatch } = useContext(AppContext);
    const choice = state[`${playerName}Choice`];
    const changeChoice = (newChoice) => dispatch({ 
        type: `CHANGE_CHOICE_FOR_${playerName === 'player1' ? 'PLAYER1' : 'COMPUTER' }`, 
        newChoice, 
    });

    return (
        <Container className={classes.gameIconsContainer}>
            <IconButton onClick={() => changeChoice('rock')}>
                <Rock className={`${classes.gameIcon} ${choice === 'rock' ? classes.choice : classes.notSelected}`} />
            </IconButton>
            <IconButton onClick={() => changeChoice('paper')}>
                <Paper className={`${classes.gameIcon} ${choice === 'paper' ? classes.choice : classes.notSelected}`} />
            </IconButton>
            <IconButton onClick={() => changeChoice('scissors')}>
                <Scissors className={`${classes.gameIcon} ${choice === 'scissors' ? classes.choice : classes.notSelected}`} />
            </IconButton>
        </Container>
    );
}

GameControls.propTypes = {
    playerName: PropTypes.string.isRequired,
};

export default GameControls;
