import { useState } from "react";
import AddCategory from "../Sections/AddCategory";

function Button({ heading, setShow }) {
  return (
    <>
      <div
        onClick={() => setShow(true, heading)}
        className="w-[146px] h-12 bg-amber-500 rounded-[20px] justify-center items-center gap-2.5 inline-flex"
      >
        <button className="text-white text-sm font-semibold font-['Poppins']">
          {heading}
        </button>
      </div>
    </>
  );
}

export default Button;
