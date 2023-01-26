const { createContext, useState, useContext } = require('react');

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [boardState, setBoardState] = useState([
    { id: 0, content: 'X' },
    { id: 1, content: '' },
    { id: 2, content: '' },
    { id: 3, content: '' },
    { id: 4, content: 'X' },
    { id: 5, content: '' },
    { id: 6, content: '' },
    { id: 7, content: '' },
    { id: 8, content: 'X' },
  ]);
  const [activeSquare, setActiveSquare] = useState(true);
  const [playerTurn, setPlayerTurn] = useState('X');
  const [gameMessage, setGameMessage] = useState("It's time for X to make a move");
  const [gameOver, setGameOver] = useState(false);

  function handleClick(id) {
    console.log('clicking', `square ${id}`);
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
