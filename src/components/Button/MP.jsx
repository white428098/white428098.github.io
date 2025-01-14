/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

export default function MP({ checked, all }) {
  const [used, setUsed] = useState(false);
  useEffect(() => {
    if (checked) setUsed(true);
  }, [checked]);
  useEffect(() => {
    setUsed(false);
  }, [all]);
  return (
    <div
      className={`size-0 border-[6px] ${
        used
          ? "border-t-stone-500 border-r-stone-400 border-l-stone-300 border-b-stone-200 dark:border-t-stone-950 dark:border-r-stone-900 dark:border-l-stone-800 dark:border-b-stone-700"
          : "border-t-teal-200 border-r-teal-300 border-l-teal-500 border-b-teal-600 shadow-[0_0_2px_2px] shadow-teal-200/50"
      } `}
      onClick={() => setUsed(!used)}
    ></div>
  );
}
