import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function TestPage() {
  const [timeLeft, setTimeLeft] = useState({});
  const [num, setNum] = useState(1);
  const [imgLink, setImgLink] = useState(
    "https://imgcdn.sigstick.com/bhg06lozfx80d3ecvU8U/0-1.png"
  );
  const newYearDate = new Date("2025-01-25T00:00:00");

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
    "https://media.tenor.com/9Fi8d9L09UMAAAAM/exciting-usagi.gif",
    "https://imgcdn.sigstick.com/glASQVa46gimK5akKwKV/4-1.thumb128.png",
    "https://imgcdn.sigstick.com/glASQVa46gimK5akKwKV/18-1.thumb128.png",
  ];
  function handleChangeImg() {
    const getimg = Math.floor(Math.random() * imgList.length);
    setImgLink(imgList.at(getimg));
  }

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen px-10 select-none bg-stone-50"
      // onClick={() => setNum(num + 1)}
      onClick={() => handleChangeImg()}
    >
      <h1 className="text-3xl sm:text-5xl mb-10">新年假期倒數</h1>
      <img
        src={imgLink}
        className="size-60 rounded-full object-cover shadow-lg "
      />
      {timeLeft ? (
        <div className="text-sm sm:text-2xl gap-3 md:gap-6 w-full md:w-2/3 lg:w-1/2 items-center justify-center grid grid-cols-4 place-items-center my-10">
          <div>
            <span className="text-3xl sm:text-5xl">{timeLeft.days} </span> 天
          </div>
          <div>
            <span className="text-3xl sm:text-5xl">{timeLeft.hours} </span>
            小時
          </div>
          <div>
            <span className="text-3xl sm:text-5xl">{timeLeft.minutes} </span>
            分鐘
          </div>
          <div>
            <span className="text-3xl sm:text-5xl">{timeLeft.seconds} </span>秒
          </div>
        </div>
      ) : (
        <p className="text-3xl">放假快樂！🎉</p>
      )}
      <footer className="mt-12 text-lg absolute bottom-0 py-3">
        © {new Date().getFullYear()} 準備放假
      </footer>
    </div>
  );
}
