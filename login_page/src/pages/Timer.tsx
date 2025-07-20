import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [sendAgain, setSendAgain] = useState(false);
  const [second, setSecond] = useState(59);
  const [showText, setShowText] = useState(false);
  const [runFunc, setRunFunc] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSendAgain(false);
    setSecond(59);
    intervalRef.current = setInterval(() => {
      setSecond((prev) => {
        if (prev <= 1) {
          setSendAgain(true);
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  useEffect(() => {
    startTimer();
  }, [runFunc]);
  useEffect(() => {
    startTimer();
  }, []);

  const send = () => {
    setShowText(true);
    setRunFunc(true);
    setTimeout(() => {
      setShowText(false);
    }, 3000);
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mt-[70px]">
      <h2 className="text-3xl text-white">
        00 : {second.toString().length < 2 ? "0" + second : second}
      </h2>
      <button
        onClick={sendAgain ? send : undefined}
        className={`text-lg bg-white w-[140px] h-[50px] rounded mt-[20px] ${
          sendAgain ? "opacity-100" : "opacity-25"
        }
        }`}
      >
        Send code again
      </button>
      <h3 className="text-white text-xl">
        {showText && "The code re sent to your mobile"}
      </h3>
    </div>
  );
};

export default Timer;
