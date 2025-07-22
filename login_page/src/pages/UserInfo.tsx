import { useNavigate } from "react-router-dom";

type Mobile = {
  mobile: string;
};

const UserInfo: React.FC<Mobile> = ({ mobile }) => {
  const navigate = useNavigate();
  const editMobile = () => {
    navigate("/");
  };

  return (
    <div className="w-[70%] h-auto text-center mb-[50px] sm:w-[50%] md:w-[50%] lg:w-[30%]">
      <h2 className="text-lg text-white text-center sm:text-2xl">
        The code was sent as an SMS to your mobile number{" "}
        <span onClick={editMobile} className="text-blue-500 cursor-pointer">
          {mobile}
        </span>
      </h2>
      <h2
        className="text-lg text-blue-400 cursor-pointer mt-[10px] text-center"
        onClick={editMobile}
      >
        Edit mobile number
      </h2>
    </div>
  );
};

export default UserInfo;
