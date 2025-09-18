import React, { useEffect, useState } from "react";

/** Repeating typing/deleting effect with a blinking caret */
export default function TypingCode({
  code,
  speed = 16,
  pause = 2000,
  showCursor = true,
}) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1); // 1=type, -1=delete

  useEffect(() => {
    let t;
    if (dir === 1 && i < code.length) t = setTimeout(() => setI(i + 1), speed);
    else if (dir === -1 && i > 0) t = setTimeout(() => setI(i - 1), speed / 1.5);
    else if (i === code.length) t = setTimeout(() => setDir(-1), pause);
    else if (i === 0 && dir === -1) t = setTimeout(() => setDir(1), pause);
    return () => clearTimeout(t);
  }, [i, dir, code, speed, pause]);

  return (
    <pre className="text-[12px] sm:text-sm leading-relaxed text-sky-200/95 whitespace-pre-wrap break-words max-h-72 overflow-auto pr-4">
      {code.slice(0, i)}
      {showCursor && <span className="inline-block ml-[1px] h-4 w-[2px] bg-slate-300/90 animate-pulse align-[-2px]" />}
    </pre>
  );
}
