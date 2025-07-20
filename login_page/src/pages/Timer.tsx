const Timer = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mt-[70px]">
      <h2 className="text-3xl text-white">00:59</h2>
      <button
        className={`text-lg bg-white w-[140px] h-[50px] rounded mt-[20px] opacity-100`}
      >
        Send code again
      </button>
    </div>
  );
};

export default Timer;
