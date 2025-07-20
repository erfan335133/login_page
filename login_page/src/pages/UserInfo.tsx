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
    <div className="w-[30%] h-auto text-center mb-[50px]">
      <h2 className="text-2xl text-white">
        The code was sent as an SMS to your mobile number{" "}
        <span onClick={editMobile} className="text-blue-500 cursor-pointer">
          {mobile}
        </span>
      </h2>
      <h2
        className="text-xl text-blue-400 cursor-pointer mt-[10px]"
        onClick={editMobile}
      >
        Edit mobile number
      </h2>
    </div>
  );
};

export default UserInfo;
