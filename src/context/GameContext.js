const { createContext, useState, useContext, useEffect } = require('react');

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [boardState, setBoardState] = useState([
    { id: 0, content: '' },
    { id: 1, content: '' },
    { id: 2, content: '' },
    { id: 3, content: '' },
    { id: 4, content: '' },
    { id: 5, content: '' },
    { id: 6, content: '' },
    { id: 7, content: '' },
    { id: 8, content: '' },
  ]);
  const [activeSquare, setActiveSquare] = useState(true);
  const [playerTurn, setPlayerTurn] = useState('X');
  const [gameMessage, setGameMessage] = useState(`It's time for ${playerTurn} to make a move`);
  const [gameOver, setGameOver] = useState(false);

  function handleClick(content, id) {
    if (content !== '') return;
    if (gameOver === true) return;
    // needs a line below that updates the Square's content with the current player's symbol.
    boardState[id].content = playerTurn;
    if (playerTurn === 'X') setPlayerTurn('O');
    if (playerTurn === 'O') setPlayerTurn('X');
  }

  return (
    <GameContext.Provider
      value={{
        boardState,
        setBoardState,
        activeSquare,
        setActiveSquare,
        playerTurn,
        setPlayerTurn,
        handleClick,
        gameMessage,
        setGameMessage,
        gameOver,
        setGameOver,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return context;
};

export { GameProvider, useGameContext, GameContext };
