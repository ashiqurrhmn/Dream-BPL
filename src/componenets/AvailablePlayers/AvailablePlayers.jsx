import React from 'react';
import Card from '../Card/Card';

const AvailablePlayers = ({ data, setBalance, balance, setSelectedPlayers, selectedPlayers   }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {data.map((player) => (
        <Card 
          key={player.id}
          player={player}
          setBalance={setBalance}
          balance={balance}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        />
      ))}
      
    </div>
  );
};

export default AvailablePlayers;
