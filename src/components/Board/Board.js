import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext.js';

export default function Board() {
  const { boardState } = useContext(GameContext);
  return <div></div>;
}
