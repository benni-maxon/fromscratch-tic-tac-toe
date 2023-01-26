import { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';

export default function Square({ content, player }) {
  const { handleClick } = useContext(GameContext);
  return (
    <div className="board-square" onClick={() => handleClick(player, content)}>
      <h2>{content}</h2>
    </div>
  );
}
