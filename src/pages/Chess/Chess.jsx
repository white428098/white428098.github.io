import React, { useState } from "react";

const initialBoard = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];

const isValidMove = (board, fromRow, fromCol, toRow, toCol) => {
  const piece = board[fromRow][fromCol];
  const target = board[toRow][toCol];
  const rowDiff = Math.abs(toRow - fromRow);
  const colDiff = Math.abs(toCol - fromCol);

  // 檢查是否是同一方的棋子
  if ((piece >= "♙" && piece <= "♔" && target >= "♙" && target <= "♔") ||
    (piece >= "♟" && piece <= "♚" && target >= "♟" && target <= "♚")) {
    return false;
  }

  switch (piece) {
    case "♙": // 白兵
      if (colDiff === 0 && toRow === fromRow - 1 && target === "") return true;
      if (fromRow === 6 && colDiff === 0 && toRow === fromRow - 2 && target === "") return true;
      if (rowDiff === 1 && colDiff === 1 && target !== "") return true;
      break;
    case "♟": // 黑兵
      if (colDiff === 0 && toRow === fromRow + 1 && target === "") return true;
      if (fromRow === 1 && colDiff === 0 && toRow === fromRow + 2 && target === "") return true;
      if (rowDiff === 1 && colDiff === 1 && target !== "") return true;
      break;
    case "♘": case "♞": // 馬
      if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) return true;
      break;
    case "♖": case "♜": // 車
      if (fromRow === toRow || fromCol === toCol) return true;
      break;
    case "♗": case "♝": // 象
      if (rowDiff === colDiff) return true;
      break;
    case "♕": case "♛": // 后
      if (fromRow === toRow || fromCol === toCol || rowDiff === colDiff) return true;
      break;
    case "♔": case "♚": // 王
      if (rowDiff <= 1 && colDiff <= 1) return true;
      break;
    default:
      return false;
  }
  return false;
};

const ChessBoard = () => {
  const [board, setBoard] = useState(initialBoard);
  const [selected, setSelected] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("white");

  const handleCellClick = (row, col) => {
    if (selected) {
      if (isValidMove(board, selected.row, selected.col, row, col)) {
        const newBoard = board.map((r, i) =>
          r.map((c, j) => {
            if (i === selected.row && j === selected.col) return "";
            if (i === row && j === col) return board[selected.row][selected.col];
            return c;
          })
        );
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
      }
      setSelected(null);
    } else if (board[row][col]) {
      setSelected({ row, col });
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="grid grid-cols-8 w-80 border border-gray-800">
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => {
            const isDark = (rowIndex + colIndex) % 2 === 1;
            const isSelected = selected && selected.row === rowIndex && selected.col === colIndex;
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                className={`w-10 h-10 flex items-center justify-center text-xl cursor-pointer ${isDark ? "bg-gray-800 text-white" : "bg-gray-200"} ${isSelected ? "border-4 border-yellow-500" : ""}`}
              >
                {piece}
              </div>
            );
          })
        )}
      </div>
      <div className="mt-4">
        <button
          onClick={() => setBoard(initialBoard)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          重置棋盤
        </button>
      </div>
    </div>
  );
};

export default ChessBoard;
