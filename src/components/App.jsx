import React from 'react';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
} from '@material-ui/core';
import Scoreboard from './scoreboard/Scoreboard';
import Footer from './footer/Footer';
import MainArea from './mainArea/MainArea';

const useStyles = makeStyles({
  game: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '3fr 14fr 2fr',
    gridColumnGap: 0,
    gridRowGap: 0,
    gridTemplateAreas: '"scorebar scorebar scorebar" "player1 arena computer" "bottom bottom bottom"',
    height: '100vh',
    width: '100vw',
    padding: 0,
    maxWidth: 'none',
  }
});

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.game}>
      <Scoreboard />
      <MainArea />
      <Footer />
    </Container>
  );
}

export default App;
