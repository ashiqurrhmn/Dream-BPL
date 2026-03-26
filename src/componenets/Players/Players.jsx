import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({ promise }) => {

    const data = use(promise);

    return (
       <AvailablePlayers data={data}></AvailablePlayers>
    );
};

export default Players;