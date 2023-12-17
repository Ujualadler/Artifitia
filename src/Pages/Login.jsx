import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LeftSide from "../Sections/LeftSide";
import LoginSignUpInput from "../Components/LoginSignUpInput";
import UserAxios from "../API/UserApi";
import { useDispatch } from "react-redux";
import { GetUserData, UserLogin } from "../Redux/Slices/userAuth";

function Login() {
  const navigate = useNavigate();
  const userAxios = UserAxios();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const generateError = (err) => {
    toast.error(err);
  };

  const LoginSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() && !password.trim()) {
      generateError("Please fill in all the fields");
      return;
    }
    if (!email.trim()) {
      generateError("Please fill the Email field");
      return;
    }
    if (!password.trim()) {
      generateError("Please fill the Password field");
      return;
    }

    try {
      const response = await userAxios.post("/login", { email, password });
      const result = response.data.userSignUp;
      const userDetails = response.data.userData;

      if (result.Status === true) {
        const token = result.token;
        const UserData = userDetails;
        console.log(UserData);
        dispatch(UserLogin({ token: token }));
        dispatch(GetUserData({ userData: UserData }));
        navigate("/home");
      } else {
        generateError(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <LeftSide
        heading="Welcome Back!"
        para="To keep connected with us plase login with your personal info"
        button="SIGN UP"
        action="/signUp"
      />

      <form
        onSubmit={LoginSubmit}
        className="col-span-7 flex justify-center items-center"
      >
        <div className="w-[528.50px] flex flex-col justify-center items-center">
          <h1 className="text-center text-amber-500 w-[50%] text-[45px] font-bold font-['Montserrat']">
            Sign In to Your Account
          </h1>
          <LoginSignUpInput
            type="email"
            placeholder="Email"
            action={setEmail}
          />
          <LoginSignUpInput
            type="password"
            placeholder="Password"
            action={setPassword}
          />
          <button
            type="submit"
            className="w-[300px] h-[60px] pt-[30.57px] bg-amber-500 hover:bg-[#003F62] mt-14 pb-[27.60px] rounded-[43.68px] border-2 border-white justify-center items-center inline-flex"
          >
            <div className="text-center text-white  text-[15px] font-semibold font-['Montserrat']">
              SIGN IN
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
