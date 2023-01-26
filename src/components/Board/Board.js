import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import Square from '../Square/Square.js';
import './Board.css';

export default function Board() {
  const { boardState, playerTurn } = useContext(GameContext);
  return (
    <div className="board-whole">
      {boardState.map((space) => (
        <Square key={space.id} content={space.content} id={space.id} player={playerTurn} />
      ))}
    </div>
  );
}
