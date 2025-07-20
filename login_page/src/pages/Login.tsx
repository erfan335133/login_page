import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const validation = yup.object().shape({
    name: yup
      .string()
      .min(5, "Minimum 5 character")
      .max(20, "Maximum 20 character")
      .required("ّFilling this section is mandatory."),
    mobile: yup
      .string()
      .length(11, "Should be 11 character")
      .matches(/^\d+$/, "Just filling number")
      .matches(/^0/, "Should begining with 0")
      .required("Filling this section is mandatory ."),
    password: yup
      .string()
      .min(8)
      .max(30)
      .matches(/[A-Z]+/, "Should have character between A to Z")
      .matches(/[a-z]+/, "Should have character between a to z")
      .matches(/\d+/, "Should have a number")
      .required("Filling this section is mandatory"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validation) });

  const submit = (data: { name: string; mobile: string; password: string }) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full h-screen bg-[#1e1e1e] flex justify-center items-center"
      >
        <div className="min-w-[40%] h-[60%] bg-white rounded flex flex-col justify-center items-center relative">
          <p className="absolute top-[25px] text-red-400">
            {errors.name
              ? errors.name?.message
              : errors.mobile
              ? errors.mobile.message
              : errors.password
              ? errors.password.message
              : ""}
          </p>
          <input
            {...register("name")}
            type="text"
            className="border-0 border-b-[2px] border-purple-400 w-[30%] h-[50px] m-[15px]  bg-transparent outline-none focus:border-gray-300"
            placeholder="Enter name :"
          />
          <input
            {...register("mobile")}
            type="text"
            className="border-0 border-b-[2px] border-purple-400 w-[30%] h-[50px] m-[15px] bg-transparent outline-none focus:border-gray-300"
            placeholder="Enter mobile :"
          />
          <input
            {...register("password")}
            type="password"
            className="border-0 border-b-[2px] border-purple-400 w-[30%] h-[50px] m-[15px] bg-transparent outline-none focus:border-gray-300"
            placeholder="Enter password :"
          />
          <button className="w-[15%] h-[50px] bg-[#1e1e1e] rounded-lg mt-[50px] text-white">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
