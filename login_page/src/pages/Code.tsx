import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";
import Timer from "./Timer";

type Mobile = {
  mobile: string;
};

const Code: React.FC<Mobile> = ({ mobile }) => {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!mobile || mobile.trim() === "") {
      navigate("/");
    }
  }, [mobile, navigate]);

  const refer = useRef<(HTMLInputElement | null)[]>([]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    e.target.value = value;

    if (value && index < 3) refer.current[index + 1]?.focus();
    if (index === 3) validation();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      refer.current[index - 1]?.focus();
    }
  };

  const validation = () => {
    const code = refer.current.map((input) => input?.value || "").join("");
    if (code === "1111") {
      setShowText(true);
      setText("Correct code");

      setTimeout(() => {
        setShowText(false);
        setText("");
        refer.current.forEach((el) => {
          if (el) el.value = "";
        });
        navigate("/dashboard");
      }, 3000);
    } else {
      setShowText(true);
      setText("Wrong code");
      setTimeout(() => {
        setShowText(false);
        setText("");
        refer.current.forEach((el) => {
          if (el?.value) el.value = "";
        });
      }, 3000);
    }
  };

  return (
    <div className="w-full h-screen bg-[#1e1e1e] flex flex-col justify-center items-center">
      <UserInfo mobile={mobile} />
      <div className="w-full h-auto flex justify-around items-center sm:justify-center md:justify-center">
        {[0, 1, 2, 3].map((index) => {
          return (
            <input
              key={index}
              type="number"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => {
                refer.current[index] = el;
              }}
              className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none cursor-pointer w-[55px] h-[55px] m-[15px] bg-blue-300 rounded-lg text-center flex items-center justify-center text-2xl sm:w-[70px] sm:h-[70px] sm:m-[35px] md:w-[80px] md:h-[80px] md:m-[40px] lg:w-[100px] lg:h-[100px] lg:m-[50px]"
            />
          );
        })}
      </div>
      <h3 className="text-xl text-white">{showText && text}</h3>
      <Timer />
    </div>
  );
};
export default Code;
