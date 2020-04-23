import React, { useContext } from 'react';
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

function GameControls() {
    const classes = useStyles();
    const { state, dispatch } = useContext(AppContext);
    const changeChoice = (newChoice) => dispatch({ type: 'CHANGE_CHOICE', newChoice });

    return (
        <Container className={classes.gameIconsContainer}>
            <IconButton onClick={() => changeChoice('rock')}>
                <Rock className={`${classes.gameIcon} ${state.choice === 'rock' ? classes.choice : classes.notSelected}`} />
            </IconButton>
            <IconButton onClick={() => changeChoice('paper')}>
                <Paper className={`${classes.gameIcon} ${state.choice === 'paper' ? classes.choice : classes.notSelected}`} />
            </IconButton>
            <IconButton onClick={() => changeChoice('scissors')}>
                <Scissors className={`${classes.gameIcon} ${state.choice === 'scissors' ? classes.choice : classes.notSelected}`} />
            </IconButton>
        </Container>
    );
}

export default GameControls;
