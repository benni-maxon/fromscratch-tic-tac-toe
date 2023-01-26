import { useContext } from 'react';
import './App.css';
import Board from './components/Board/Board.js';
import { GameContext } from './context/GameContext.js';

function App() {
  const { gameMessage } = useContext(GameContext);
  return (
    <div className="App">
      <h2 className="message">{gameMessage}</h2>
      <Board />
    </div>
  );
}

export default App;
