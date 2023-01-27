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
  const [winner, setWinner] = useState();
  const [playerTurn, setPlayerTurn] = useState('X');
  const [gameMessage, setGameMessage] = useState(`It's time for ${playerTurn} to make a move`);
  const [gameOver, setGameOver] = useState(false);

  function handleClick(content, id) {
    if (content !== '') return;
    if (gameOver === true) return;
    boardState[id].content = playerTurn;
    handleGameOver();
    if (playerTurn === 'O') {
      setPlayerTurn('X');
      setGameMessage(`It's time for ${playerTurn} to make a move`);
    }
    if (playerTurn === 'X') {
      setPlayerTurn('O');
      setGameMessage(`It's time for ${playerTurn} to make a move`);
    }
    setGameMessage(`It's time for ${playerTurn} to make a move`);
    if (winner) {
      setGameMessage(`${playerTurn} wins the round!`);
      return;
    }
  }

  // Classic example of refactoring too early. maybe I will use it later to model a cleaner function.
  // function handleGameOver() {
  //   const s = boardState;
  //   if (
  //     s[(0, 1, 2)].content ||
  //     s[(0, 3, 6)].content ||
  //     s[(0, 4, 8)].content ||
  //     s[(1, 4, 7)].content ||
  //     s[(2, 5, 8)].content ||
  //     s[(3, 4, 5)].content ||
  //     s[(6, 7, 8)].content ||
  //     s[(6, 4, 2)].content === playerTurn
  //   )
  //     setGameOver(true);
  // }

  function handleGameOver() {
    if (
      boardState[0].content === playerTurn &&
      boardState[1].content === playerTurn &&
      boardState[2].content === playerTurn
    ) {
      setGameOver(true);
      setWinner(playerTurn);
    }
    if (
      boardState[0].content === playerTurn &&
      boardState[3].content === playerTurn &&
      boardState[6].content === playerTurn
    ) {
      setGameOver(true);
      setWinner(playerTurn);
    }
    if (
      boardState[0].content === playerTurn &&
      boardState[4].content === playerTurn &&
      boardState[8].content === playerTurn
    ) {
      setGameOver(true);
      setWinner(playerTurn);
    }
    if (
      boardState[1].content === playerTurn &&
      boardState[4].content === playerTurn &&
      boardState[7].content === playerTurn
    ) {
      setGameOver(true);
      setWinner(playerTurn);
    }
    if (
      boardState[2].content === playerTurn &&
      boardState[5].content === playerTurn &&
      boardState[8].content === playerTurn
    ) {
      setGameOver(true);
      setWinner(playerTurn);
    }
    if (
      boardState[3].content === playerTurn &&
      boardState[4].content === playerTurn &&
      boardState[5].content === playerTurn
    ) {
      setGameOver(true);
      setWinner(playerTurn);
    }
    if (
      boardState[6].content === playerTurn &&
      boardState[7].content === playerTurn &&
      boardState[8].content === playerTurn
    ) {
      setGameOver(true);
      setWinner(playerTurn);
    }
    if (
      boardState[6].content === playerTurn &&
      boardState[4].content === playerTurn &&
      boardState[2].content === playerTurn
    ) {
      setGameOver(true);
      setWinner(playerTurn);
    }

    handleDraw();
  }

  function handleDraw() {
    if (
      boardState[0].content !== '' &&
      boardState[1].content !== '' &&
      boardState[2].content !== '' &&
      boardState[3].content !== '' &&
      boardState[4].content !== '' &&
      boardState[5].content !== '' &&
      boardState[6].content !== '' &&
      boardState[7].content !== '' &&
      boardState[8].content !== ''
    ) {
      setGameOver(true);
      if (!winner) setGameMessage("It's a draw. Better luck next time!");
    }
  }

  return (
    <GameContext.Provider
      value={{
        boardState,
        setBoardState,
        winner,
        setWinner,
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
