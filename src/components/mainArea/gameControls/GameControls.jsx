import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  IconButton,
} from '@material-ui/core';
import { ReactComponent as Rock } from '@fortawesome/fontawesome-free/svgs/regular/hand-rock.svg';
import { ReactComponent as Paper } from '@fortawesome/fontawesome-free/svgs/regular/hand-paper.svg';
import { ReactComponent as Scissors } from '@fortawesome/fontawesome-free/svgs/regular/hand-scissors.svg';

const useStyles = makeStyles({
    gameIcon: {
        height: '84px',
        width: '84px',
    },
    gameIconsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    },
})

function GameControls() {
    const classes = useStyles();
    
    return (
        <Container className={classes.gameIconsContainer}>
            <IconButton>
                <Rock className={classes.gameIcon} />
            </IconButton>
            <IconButton>
                <Paper className={classes.gameIcon} />
            </IconButton>
            <IconButton>
                <Scissors className={classes.gameIcon} />
            </IconButton>
        </Container>
    );
}

export default GameControls;
