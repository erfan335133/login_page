type Mobile = {
  mobile: string;
};

const UserInfo: React.FC<Mobile> = ({ mobile }) => {
  return (
    <div className="w-[30%] h-auto text-center mb-[50px]">
      <h2 className="text-2xl text-white">
        The code was sent as an SMS to your mobile number{" "}
        <span className="text-blue-500 cursor-pointer">{mobile}</span>
      </h2>
      <h2 className="text-xl text-blue-400 cursor-pointer mt-[10px]">
        Edit mobile number
      </h2>
    </div>
  );
};

export default UserInfo;
