import { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';

export default function Square({ content, id }) {
  const { handleClick } = useContext(GameContext);
  return (
    <div className="board-square" onClick={() => handleClick(content, id)}>
      <h2>{content}</h2>
    </div>
  );
}
