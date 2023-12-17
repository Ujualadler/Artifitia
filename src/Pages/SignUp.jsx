import React, { useState } from "react";
import LeftSide from "../Sections/LeftSide";
import LoginSignUpInput from "../Components/LoginSignUpInput";
import { useNavigate } from "react-router-dom";
import UserAxios from "../API/UserApi";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();
  const userAxios = UserAxios();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const generateError = (err) => toast.error(err);

  const signUpForm = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      generateError("Please fill in all the fields");
      return;
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
      generateError("Please enter a valid email address");
      return;
    }

    if (password.length < 4) {
      generateError("Password should be at least 6 characters long");
      return;
    }

    try {
      const response = await userAxios.post("/signUp", {
        email,
        name,
        password,
      });

      if (response.data.status) {
        console.log(response.data.message);
        toast("Account Created");

        navigate("/login");
      } else {
        generateError(response.data.error);
      }
    } catch (error) {
      navigate("/error");
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <form
        onSubmit={signUpForm}
        className="col-span-7 flex justify-center items-center"
      >
        <div className="w-[528.50px] flex flex-col justify-center items-center">
          <h1 className="text-amber-500 text-[45px] font-bold font-['Montserrat']">
            Create Account
          </h1>
          <LoginSignUpInput type="text" placeholder="Name" action={setName} />
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
            className="w-[300px] h-[60px] pt-[30.57px] hover:bg-[#003F62] bg-amber-500 mt-14 pb-[27.60px] rounded-[43.68px] border-2 border-white justify-center items-center inline-flex"
          >
            <div className="text-center text-white  text-[15px] font-semibold font-['Montserrat']">
              SIGN UP
            </div>
          </button>
        </div>
      </form>
      <LeftSide
        heading="Welcome Back!"
        para="To keep connected with us plase login with your personal info"
        button="SIGN IN"
        action="/login"
      />
    </div>
  );
}

export default SignUp;
