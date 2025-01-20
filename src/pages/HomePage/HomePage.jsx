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

const ChessBoard = () => {
  const [board, setBoard] = useState(initialBoard);
  const [selected, setSelected] = useState(null); // 用於記錄選中的格子

  const handleCellClick = (row, col) => {
    if (selected) {
      // 如果已有選中的格子，嘗試移動棋子
      const newBoard = board.map((r, i) =>
        r.map((c, j) => {
          if (i === selected.row && j === selected.col) return ""; // 清空原位置
          if (i === row && j === col) return board[selected.row][selected.col]; // 將棋子移動到新位置
          return c; // 保持其他格子不變
        })
      );
      setBoard(newBoard);
      setSelected(null); // 清除選中狀態
    } else if (board[row][col]) {
      // 如果未選中格子，且當前格子有棋子，選中該格子
      setSelected({ row, col });
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="grid grid-cols-8 w-80 border border-gray-800">
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => {
            const isDark = (rowIndex + colIndex) % 2 === 1;
            const isSelected =
              selected &&
              selected.row === rowIndex &&
              selected.col === colIndex;

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                className={`w-10 h-10 flex items-center justify-center text-xl cursor-pointer ${isDark ? "bg-gray-800 text-white" : "bg-gray-200"
                  } ${isSelected ? "border-4 border-yellow-500" : ""}`}
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
