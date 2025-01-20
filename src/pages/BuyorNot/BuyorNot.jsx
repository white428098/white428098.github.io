import React, { useState } from "react";

const Wheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentAngle, setCurrentAngle] = useState(0); // 累積角度
  const [result, setResult] = useState(0); // 累積角度
  const animationDuration = 3000; // 動畫時間 (毫秒)
  const probabilityThreshold = 30; // 旋轉角度判斷買的區間

  // 隨機計算結果
  const calculateResult = (angle) => (angle % 360 < probabilityThreshold ? "買!!!" : "不買!");

  const handleSpin = () => {
    setResult("")
    if (isSpinning) return; // 防止重複點擊

    const randomAngle = Math.random() * 360; // 隨機角度
    const totalAngle = currentAngle + 360 * 4 + randomAngle; // 累積旋轉角度
    const result = calculateResult(totalAngle); // 判斷結果

    // 設定動畫狀態
    setIsSpinning(true);
    setCurrentAngle(totalAngle);

    // 延遲動畫結束後更新結果
    setTimeout(() => {
      setResult(result); // 顯示結果 (也可改為其他顯示方式)
      setIsSpinning(false);
    }, animationDuration);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 overflow-hidden">
      <div className="relative w-64 h-64">
        {/* 指針 */}
        <div className="pointer absolute top-2 left-1/2 -translate-x-1/2 z-50" />

        {/* 轉盤 */}
        <div
          className="wheel rounded-full z-10"
          style={{
            transform: `rotate(${currentAngle}deg)`,
            transition: isSpinning ? `transform ${animationDuration / 1000}s cubic-bezier(0.33, 1, 0.68, 1)` : "none",
          }}
        >
          {/* 買 */}
          <div className="absolute -top-40 -left-10 inset-0 flex items-center justify-center -rotate-12">
            <div className="text-xl font-bold text-stone-100">買</div>
          </div>
          {/* 不買 */}
          <div className="absolute top-40 left-10 inset-0 flex items-center justify-center rotate-[168deg]">
            <div className="text-xl font-bold text-stone-700">不買</div>
          </div>
        </div>

        {/* 轉盤背景 */}
        <div className="absolute top-0 z-0 w-full h-full rounded-full bg-white drop-shadow-lg" />
      </div>
      <div className="mt-10 text-lg h-8">{result}</div>

      {/* 按鈕 */}
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className={`mt-10 px-6 py-3 w-28 h-28 text-white font-semibold rounded-full shadow-lg active:shadow-none ${isSpinning ? "bg-gray-400 cursor-not-allowed" : "bg-amber-500 active:bg-amber-600"
          }`}
      >
        {isSpinning ? "旋轉中..." : "轉!!!"}
      </button>
    </div>
  );
};

export default Wheel;
