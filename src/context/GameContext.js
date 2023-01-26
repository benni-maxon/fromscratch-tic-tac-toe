const { createContext, useState, useContext } = require('react');

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [boardState, setBoardState] = useState(['', '', '', '', '', '', '', '', '']);
  const [activeSquare, setActiveSquare] = useState(true);
  const [playerTurn, setPlayerTurn] = useState('X');

  return (
    <GameContext.Provider
      value={{
        boardState,
        setBoardState,
        activeSquare,
        setActiveSquare,
        playerTurn,
        setPlayerTurn,
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
