import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserLogout } from "../Redux/Slices/userAuth";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.User.Token);
  const userData = useSelector((state) => state.User.UserData);

  const logout = () => {
    dispatch(UserLogout());
    navigate("/login");
  };

  return (
    <div className="w-full h-[90px] bg-sky-900 justify-center items-center gap-[316px] inline-flex">
      <div className="grid grid-cols-2 w-full">
        <div className="flex justify-end">
          <div className="w-[438px] h-12 flex justify-between  bg-white rounded-[20px] ">
            <input
              className="text-zinc-800 rounded-[20px] pl-10 outline-none text-center text-sm font-normal font-['Poppins']"
              type="search"
              placeholder="Serach any things"
            />
            <div className="w-[132px] h-12  bg-amber-500 rounded-[20px]  justify-center items-center gap-2.5 flex">
              <button className="text-white cursor-pointer text-sm font-semibold font-['Poppins']">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center mr-28  ">
          <div className="justify-center items-center  flex mx-6">
            <div className="justify-center items-center gap-3 flex">
              <img src="/heart.png" className="" alt="" />
              <div className="justify-center items-center  flex">
                <div className="w-[18px] h-[18px] bg-amber-500 rounded-full flex-col justify-center items-center  inline-flex">
                  <div className="text-white text-[9.47px] font-normal font-['Poppins']">
                    0
                  </div>
                </div>
              </div>
              {user ? (
                <div
                  onClick={logout}
                  className="text-white text-sm cursor-pointer font-normal font-['Poppins']"
                >
                  Log Out
                </div>
              ) : (
                <div
                  onClick={() => navigate("/login")}
                  className="text-white text-sm cursor-pointer font-normal font-['Poppins']"
                >
                  Sign in
                </div>
              )}
            </div>
          </div>

          <div className="justify-center items-center  flex">
            <div className="justify-center items-center gap-3 flex">
              <img src="/cart.png" className="" alt="" />
              <div className="justify-center items-center  flex">
                <div className="w-[18px] h-[18px] bg-amber-500 rounded-full flex-col justify-center items-center  inline-flex">
                  <div className="text-white text-[9.47px] font-normal font-['Poppins']">
                    0
                  </div>
                </div>
              </div>
              <div className="text-white text-sm font-normal cursor-pointer font-['Poppins']">
                Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
