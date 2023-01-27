const { createContext, useState, useContext, useEffect } = require('react');

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const startingBoard = [
    { id: 0, content: '' },
    { id: 1, content: '' },
    { id: 2, content: '' },
    { id: 3, content: '' },
    { id: 4, content: '' },
    { id: 5, content: '' },
    { id: 6, content: '' },
    { id: 7, content: '' },
    { id: 8, content: '' },
  ];
  const [boardState, setBoardState] = useState(startingBoard);
  const [winner, setWinner] = useState();
  const [draw, setDraw] = useState(false);
  const [playerTurn, setPlayerTurn] = useState('X');
  const [gameMessage, setGameMessage] = useState(`It's time for ${playerTurn} to make a move`);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const gameCheck = () => {
      if (draw) {
        setGameMessage("It's a draw! Better luck next time, losers!");
      } else {
        winner && gameOver
          ? setGameMessage(`${winner} wins the round!`)
          : setGameMessage(`It's time for ${playerTurn} to make a move`);
      }
    };
    gameCheck();
  }, [playerTurn, winner, gameOver, draw]);

  function handleResetButton() {
    setBoardState(startingBoard);
    setWinner();
    setDraw(false);
    setPlayerTurn('X');
    setGameMessage(`It's time for ${playerTurn} to make a move`);
    setGameOver(false);
  }

  function handleClick(content, id) {
    if (content !== '') return;
    if (gameOver === true) return;
    // I can't think of a way to use setBoardState that would be dryer than this.
    boardState[id].content = playerTurn;
    handleGameOver();
    if (playerTurn === 'O') {
      setPlayerTurn('X');
    } else {
      setPlayerTurn('O');
    }
    if (winner) {
      return;
    }
  }

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
      if (!winner) setDraw(true);
    }
  }

  return (
    <GameContext.Provider
      value={{
        boardState,
        handleClick,
        gameMessage,
        handleResetButton,
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
