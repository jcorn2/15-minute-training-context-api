import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  IconButton,
} from '@material-ui/core';
import { ReactComponent as Rock } from '@fortawesome/fontawesome-free/svgs/regular/hand-rock.svg';
import { ReactComponent as Paper } from '@fortawesome/fontawesome-free/svgs/regular/hand-paper.svg';
import { ReactComponent as Scissors } from '@fortawesome/fontawesome-free/svgs/regular/hand-scissors.svg';
import { ReactComponent as Penguin } from 'assets/penguin.svg';

const useStyles = makeStyles({
    gameIcon: {
        height: '84px',
        width: '84px',
    },
    gameIconsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    penguin: {
        height: '475px',
        width: '375px',
    },
    player: {
        gridArea: 'player1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function Player() {
    const classes = useStyles();

    return (
        <Container className={classes.player}>
            <Penguin className={classes.penguin} />
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
        </Container>
    );
}

export default Player;
