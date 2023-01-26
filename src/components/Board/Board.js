import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';
import Square from '../Square/Square.js';
import './Board.css';

export default function Board() {
  const { boardState } = useContext(GameContext);
  return (
    <div className="board-whole">
      {boardState.map((space) => (
        <Square key={space.id} boardState={boardState} />
      ))}
    </div>
  );
}
