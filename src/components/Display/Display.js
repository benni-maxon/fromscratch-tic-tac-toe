import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import './Display.css';

export default function Display() {
  const { gameMessage, handleResetButton } = useContext(GameContext);
  return (
    <div className="display-container">
      <h2 className="message">{gameMessage}</h2>
      <button className="reset-button" onClick={handleResetButton}>
        Reset
      </button>
    </div>
  );
}
