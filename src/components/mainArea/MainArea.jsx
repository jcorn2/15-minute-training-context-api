import React from 'react';
import Player from './player/Player';
import Computer from './computer/Computer';
import Arena from './arena/Arena';

function MainArea() {
    return (
        <>
            <Player />
            <Arena />
            <Computer />
        </>
    );
}

export default MainArea;
