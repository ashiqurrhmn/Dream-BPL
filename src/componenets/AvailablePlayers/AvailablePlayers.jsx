import React from 'react';
import Card from '../Card/Card';



const AvailablePlayers = ({ data, setBalance, balance }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {data.map((player) => (
        <Card 
          player={player}
          setBalance={setBalance}
          balance={balance}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
