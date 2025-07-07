import React, { useState } from "react";
import background from "../../assets/images/chicken.webp";
export default function Jipaiii() {
  const btnList = [
    {
      name: "180",
      text: "180度C蜜酥鷄排 - 西門",
      mapLink:
        "!1m18!1m12!1m3!1d225.92663210845575!2d121.50414800826358!3d25.039974518010013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9a7ed66f8bf%3A0xc7d12a1700086b2a!2zMTgw5bqmQ-icnOmFpembnuaOkg!5e0!3m2!1szh-TW!2stw!4v1741069114973!5m2!1szh-TW!2stw",
    },
    {
      name: "協力",
      text: "現炸協力香鷄排 大安路專賣店 - 忠孝復興",
      mapLink:
        "!1m18!1m12!1m3!1d225.9191437323889!2d121.54592827400555!3d25.044039388456802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abdb032a0cfd%3A0xe553defa33d73402!2z54--54K45Y2U5Yqb6aaZ6Zue5o6SIOWkp-Wuiei3r-WwiOizo-W6lw!5e0!3m2!1szh-TW!2stw!4v1741069201295!5m2!1szh-TW!2stw",
    },
    {
      name: "萬隆",
      text: "萬隆碳烤香鷄排 - 萬隆",
      mapLink:
        "!1m14!1m8!1m3!1d760.1716047833983!2d121.5400568740541!3d24.999914658242087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa03290b78ef%3A0x9f51d8cbea13028e!2z6JCs6ZqG56Kz54Ok6aaZ6Zue5o6S!5e0!3m2!1szh-TW!2stw!4v1741076832698!5m2!1szh-TW!2stw",
    },
    {
      name: "金生",
      text: "金生炸鷄排公館店 - 公館",
      mapLink:
        "!1m14!1m8!1m3!1d369.22258759447925!2d121.53378251161826!3d25.014189764294155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9716d6f523f%3A0xdd5393da00ec6017!2z6YeR55Sf54K46beE5o6S5YWs6aSo5bqXLeWFrOmkqOWVhuWciA!5e0!3m2!1szh-TW!2stw!4v1741076987917!5m2!1szh-TW!2stw",
    },
  ];
  const [isActive, setIsActive] = useState("");
  const pickRandom = () => {
    const randomIndex = Math.floor(Math.random() * btnList.length);
    setIsActive(btnList[randomIndex]);
  };
  return (
    <div
      className="flex flex-col w-full justify-center items-center gap-5 p-5 min-h-dvh text-stone-700 bg-center
    bg-lime-200"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "40%" }}
    >
      <h2 className="text-xl rounded-full py-3 px-5 bg-white/87 backdrop-blur-xs">~鷄排之旅~</h2>
      <div className="flex flex-col justify-center items-center w-fit p-3 shadow rounded-xl bg-white/87 backdrop-blur-xs ">
        <div className="w-full flex gap-3 justify-center items-center p-5">
          {btnList.map((item, index) => (
            <button
              className={`transition-all h-14 bg-[#F4E1C9] shadow w-12 rounded-[50%_50%_50%_50%/60%_60%_40%_40%]
             ${
               isActive.name == item.name
                 ? "animate-bounce "
                 : "hover:rotate-[30deg] cursor-pointer"
             }`}
              onClick={() => setIsActive(item)}
              key={item.name}
            >
              {index - 2 >= 0 ? index - 1 : index - 2}
            </button>
          ))}
        </div>
        <button
          className="bg-orange-200 py-2 px-4 rounded-lg shadow hover:bg-orange-300 select-none cursor-pointer transition-all active:bg-orange-400"
          onClick={pickRandom}
        >
          隨機選擇一家
        </button>
      </div>
      {isActive && (
        <>
          <div className="w-fit p-3 shadow rounded-xl bg-white/87 backdrop-blur-xs">
            <iframe
              src={`https://www.google.com/maps/embed?pb=${isActive["mapLink"]}`}
              width="300"
              height="300"
              style={{ border: "0" }}
              onLoad={() => setIsLoading(false)}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-full w-full md:w-fit flex justify-center items-center py-3 px-5 shadow select-none bg-white/87 backdrop-blur-xs">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1428px-Google_Maps_icon_%282020%29.svg.png"
              }
              className="h-7 pr-3 select-none"
              draggable="false"
            />
            {isActive["text"]}
          </div>
        </>
      )}
    </div>
  );
}
