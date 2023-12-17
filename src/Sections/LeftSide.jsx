import { useNavigate } from "react-router-dom";

function LeftSide({ heading, para, button, action }) {
  const navigate = useNavigate();

  return (
    <div className="col-span-5 flex justify-center items-center bg-[#003F62]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-[45px] font-bold font-['Montserrat']">
          {heading}
        </h1>
        <div className="w-[462.98px] text-center text-white text-[22px] font-normal font-['Montserrat'] leading-9">
          {para}
        </div>
        <div
          onClick={() => navigate(action)}
          className="w-[300px] h-[60px] pt-[30.57px] hover:bg-amber-500 mt-14 pb-[27.60px] rounded-[43.68px] border-2 border-white justify-center items-center inline-flex"
        >
          <button className="text-center text-white  text-[15px] font-semibold font-['Montserrat']">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
