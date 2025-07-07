import { useRef, useState } from "react";

export default function Avatar() {
  const svgRef = useRef(null);
  const [color, setColor] = useState({
    eye: "#595959",
    body: "#EF6803",
    bg: "#FFC000",
  });
  const colorBtn = [
    {
      title: "圈圈",
      code: "bg",
      default: "#FFC000",
    },
    {
      title: "本體",
      code: "body",
      default: "#EF6803",
    },
    {
      title: "馬揪",
      code: "eye",
      default: "#595959",
    },
  ]; 
  const saveImage = () => {
    const svg = svgRef.current;
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    const scale = 4; // 放大比例，越大越清晰

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.scale(scale, scale); // 放大繪製內容
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      canvas.toBlob((blob) => {
        if (!blob) return;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "圓圓的生物.png";
        a.click();
      }, "image/png");
    };
    img.src = url;
  };
  

  return (
    <div className="flex flex-col gap-10 items-center my-32 w-full justify-center">
        <svg width="172" height="172" viewBox="0 0 172 172" className={`m-5`} xmlns="http://www.w3.org/2000/svg" ref={svgRef}>
            <g stroke="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 86C0 38.5015 38.5031 0 86 0C133.497 0 172 38.5015 172 86C172 133.498 133.497 172 86 172C38.5031 172 0 133.498 0 86Z" fill={color["bg"]} />
              <g style={{ mixBlendMode: "darken" }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M126.5 55L169.5 106.5C160 146 125 170.5 89 172L42.5 128L126.5 55Z" fill="#9E9E9E" fillOpacity="0.25" />
              </g>
              <path fillRule="evenodd" clipRule="evenodd" d="M31.9421 99.3052C31.0012 60.7995 52.5075 30.4556 87.7903 31.8861C123.073 33.3126 139.672 71.6777 139.672 99.0943C139.672 126.511 133.932 140.13 88.4162 140.163C42.9046 140.197 32.4643 123.588 31.9421 99.3052Z" fill={color["body"]} />
              <path fillRule="evenodd" clipRule="evenodd" d="M53.0506 54.1634C53.0506 46.8576 58.8945 40.9327 66.106 40.9327C73.3176 40.9327 79.1614 46.8576 79.1614 54.1634C79.1614 61.4693 73.3176 67.3942 66.106 67.3942C58.8945 67.3942 53.0506 61.4693 53.0506 54.1634Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M77.0892 54.1634C77.0892 46.8576 83.0284 40.9327 90.3518 40.9327C97.6753 40.9327 103.614 46.8576 103.614 54.1634C103.614 61.4693 97.6753 67.3942 90.3518 67.3942C83.0284 67.3942 77.0892 61.4693 77.0892 54.1634Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M79.5759 51.6827C79.5759 46.6591 83.6583 42.5865 88.694 42.5865C93.7297 42.5865 97.8121 46.6591 97.8121 51.6827C97.8121 56.7063 93.7297 60.7789 88.694 60.7789C83.6583 60.7789 79.5759 56.7063 79.5759 51.6827Z"  fill={color["eye"]}/>
              <path fillRule="evenodd" clipRule="evenodd" d="M55.5374 52.0962C55.5374 47.0726 59.6198 43 64.6554 43C69.6911 43 73.7735 47.0726 73.7735 52.0962C73.7735 57.1197 69.6911 61.1923 64.6554 61.1923C59.6198 61.1923 55.5374 57.1197 55.5374 52.0962Z"  fill={color["eye"]}/>
            </g>
        </svg>
      <div className="flex flex-col gap-5">
        {colorBtn?.map((part) => (
          <div className="flex gap-3 items-center" key={part.code}>
            <span>{part.title}</span>
            <input
              type="color"
              className="border-1 border-stone-500 rounded px-0.5"
              defaultValue={part.default}
              onChange={(e) =>
                setColor({ ...color, [part.code]: e.target.value })
              }
            />
          </div>
        ))}
      </div>
      <button
        onClick={saveImage}
        className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        儲存圖片
      </button>
    </div>
  )
}
