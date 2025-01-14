import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button/Button";
import MP from "../../components/Button/MP";
export default function TestPage() {
  const [timeLeft, setTimeLeft] = useState({});
  const newYearDate = new Date("2025-02-10T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = newYearDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [newYearDate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-900">
      <h1 className="text-5xl font-bold mb-6 text-gold-500">農曆新年倒數</h1>
      {timeLeft ? (
        <div className="text-2xl font-semibold flex gap-6">
          <div>
            <span className="block text-6xl text-gold-600">
              {timeLeft.days}
            </span>
            天
          </div>
          <div>
            <span className="block text-6xl text-gold-600">
              {timeLeft.hours}
            </span>
            小時
          </div>
          <div>
            <span className="block text-6xl text-gold-600">
              {timeLeft.minutes}
            </span>
            分鐘
          </div>
          <div>
            <span className="block text-6xl text-gold-600">
              {timeLeft.seconds}
            </span>
            秒
          </div>
        </div>
      ) : (
        <p className="text-3xl font-bold">新年快樂！🎉</p>
      )}
      <footer className="mt-12 text-lg">
        © {new Date().getFullYear()} 農曆新年快樂
      </footer>
    </div>
  );
}
