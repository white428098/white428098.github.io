import { useState, useEffect } from "react";

export default function TestPage() {
  const [timeLeft, setTimeLeft] = useState({});
  const [status, setStatus] = useState(""); // 「等待下班」「放風」「準備上班」
  const [imgLink, setImgLink] = useState(
    "https://imgcdn.sigstick.com/bhg06lozfx80d3ecvU8U/0-1.png"
  );

  const imgList = [
    "https://imgcdn.sigstick.com/bhg06lozfx80d3ecvU8U/0-1.png",
    "https://media0.giphy.com/media/f6v1HAqfj2svgGAqh9/giphy.gif?cid=6c09b952fivwww6yyfr060tstmq4necqsvqgbawdkkcxebq1&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://media.tenor.com/zb5BxhqDzrkAAAAM/chiikawa-hachiware.gif",
    "https://memeprod.ap-south-1.linodeobjects.com/user-maker-thumbnail/2dfd51730820f2e51482bd1a0aae32fb.gif",
    "https://i.pinimg.com/originals/68/39/ce/6839ceb1ffef19aa1ad45652a0ccbc22.gif",
    "https://i.pinimg.com/originals/3b/4d/44/3b4d443a93d7a983c4c4a9c7233bf7b5.gif",
    "https://memeprod.ap-south-1.linodeobjects.com/user-maker/a632b4954a6801534a60d52cade59e9b.gif",
    "https://i.imgur.com/TfnXj2P.gif",
    "https://i.imgur.com/dleHndm.gif",
    "https://media.tenor.com/cNVsPQJv27oAAAAM/pay-attention-to-me-want-attention.gif",
    "https://memeprod.ap-south-1.linodeobjects.com/user-maker-thumbnail/68ff812a8afc22c37ca2e25f8ac03dfa.gif",
    "https://memeprod.ap-south-1.linodeobjects.com/user-maker-thumbnail/430401c14ec36fd53444ee6221ff1331.gif",
    "https://imgcdn.sigstick.com/glASQVa46gimK5akKwKV/0-1.png",
    "https://i.pinimg.com/originals/12/2f/ed/122fedc191bf0d05ff487e9fc5291b5d.gif",
    "https://i.pinimg.com/originals/70/01/48/700148f33a9c05d36a2a1016a9de6d12.gif",
    "https://imgcdn.sigstick.com/OsvntKDPeCaaQvj9xBE2/2-1.png",
    "https://media3.giphy.com/media/CkTRTXDIFhix8Vp5Oz/giphy.gif?cid=6c09b952d9j0mf4q2h83j6lg6oea6ci2hov43sixsguy5537&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://imgcdn.sigstick.com/0rRklpPB08WlJkSmIpUs/6-1.png",
  ];

  function handleChangeImg() {
    const getimg = Math.floor(Math.random() * imgList.length);
    setImgLink(imgList.at(getimg));
  }

  // 根據當前時間與星期來決定倒數目標與狀態
  function getCountdownInfo() {
    const now = new Date();
    const day = now.getDay(); // 0: 週日, 6: 週六
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);

    const today9 = new Date(today);
    today9.setHours(9, 0, 0, 0);
    const today18 = new Date(today);
    today18.setHours(18, 0, 0, 0);
    const today21 = new Date(today);
    today21.setHours(21, 0, 0, 0);

    // 週六整天
    if (day === 6) {
      return { state: "放風", target: null };
    }
    // 週日
    else if (day === 0) {
      const noon = new Date(today);
      noon.setHours(12, 0, 0, 0);
      if (now < noon) {
        return { state: "放風", target: null };
      } else {
        // 從週日中午開始倒數到隔天（週一）9:00
        const target = new Date(today);
        target.setDate(target.getDate() + 1);
        target.setHours(9, 0, 0, 0);
        return { state: "準備上班", target };
      }
    }
    // 週一到週五
    else {
      if (now < today9) {
        return { state: "準備上班", target: today9 };
      } else if (now >= today9 && now < today18) {
        return { state: "等待下班", target: today18 };
      } else if (now >= today18 && now < today21) {
        return { state: "放風", target: null };
      } else {
        // 現在在 21:00 之後，檢查隔天是否為週六
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDay = tomorrow.getDay();
        if (tomorrowDay === 6) {
          // 隔天為週六，直接進入放風狀態
          return { state: "放風", target: null };
        } else {
          tomorrow.setHours(9, 0, 0, 0);
          return { state: "準備上班", target: tomorrow };
        }
      }
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const { state, target } = getCountdownInfo();
      setStatus(state);
      if (target) {
        const diff = target - now;
        if (diff <= 0) {
          setTimeLeft(null);
        } else {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);
          setTimeLeft({ days, hours, minutes, seconds });
        }
      } else {
        setTimeLeft(null);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen px-10 select-none bg-stone-50 group text-stone-900"
      onClick={handleChangeImg}
    >
      {/* 標題根據狀態切換 */}
      <div className="text-3xl sm:text-5xl mb-10">{status}</div>
      <img
        src={imgLink}
        alt="隨機圖片"
        className="size-60 rounded-full object-cover shadow-stone-400 shadow-lg group-active:shadow-inner"
      />
      {timeLeft ? (
        <div className="text-sm sm:text-2xl gap-3 md:gap-6 w-full md:w-2/3 lg:w-1/2 items-center justify-center grid grid-cols-4 place-items-center my-10">
          <div>
            <span className="text-3xl sm:text-5xl">{timeLeft.days} </span>天
          </div>
          <div>
            <span className="text-3xl sm:text-5xl">{timeLeft.hours} </span>小時
          </div>
          <div>
            <span className="text-3xl sm:text-5xl">{timeLeft.minutes} </span>分鐘
          </div>
          <div>
            <span className="text-3xl sm:text-5xl">{timeLeft.seconds} </span>秒
          </div>
        </div>
      ) : (
        <p className="w-full py-8 text-3xl">出去玩！</p>
      )}
      <footer className="mt-12 text-lg absolute bottom-0 py-3">
        © {new Date().getFullYear()} Tzu
      </footer>
    </div>
  );
}
