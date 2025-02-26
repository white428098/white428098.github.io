import { Link } from "react-router-dom";

export default function HomePage() {
  const btnList = [
    {
      text: "買不買",
      img: "",
      link: "/BuyorNot",
    },
    {
      text: "西陽春棋",
      img: "",
      link: "/Chess", // 統一大小寫
    },
    {
      text: "倒數器",
      img: "",
      link: "/test",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-5">
      {btnList.map((b, i) => (
        <Link
          key={i}
          to={b.link}
          className="py-3 text-center block shadow w-full rounded-sm cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          {b.text}
        </Link>
      ))}
    </div>
  );
}