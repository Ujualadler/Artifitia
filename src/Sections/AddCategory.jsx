import React, { useState } from "react";
import UserAxios from "../API/UserApi";
import { toast } from "react-toastify";

function AddCategory({ show }) {
  const userAxios = UserAxios();
  const [category, setCategory] = useState("");

  const addCategory = async (e) => {
    e.preventDefault();
    try {
      if (!category.trim()) {
        toast.error("Enter a category name");
        return;
      }

      const result = await userAxios.post("/addCategory", {
        category,
      });

      if (result.data.duplicate) {
        toast.error("Category Already Exists");
      }

      if (result.data.status) {
        show(false);
        toast.success("Category Successfully added");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="h-screen z-50 flex justify-center items-center w-full absolute top-0  bg-gray-600 bg-opacity-60 ">
      <form
        onSubmit={addCategory}
        className="bg-white h-64 rounded-xl w-[400px] flex justify-center flex-col items-center"
      >
        <div className=" h-[72px] text-center text-neutral-700 text-2xl font-semibold font-['Montserrat']">
          Add Category
        </div>
        <input
          className="w-[85%] p-2 h-[70.01px] rounded-[14.84px] border-2 border-neutral-700 border-opacity-40"
          placeholder="Enter category name"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
        />
        <div className="flex justify-center items-center mt-2 gap-2">
          <button
            type="submit"
            className="w-[108px] h-[40px] bg-amber-500 text-center text-white text-[22.25px] font-medium font-['Montserrat']"
          >
            ADD
          </button>
          <button
            onClick={() => show(false)}
            className="w-[108px] h-[40px] text-[#3C3C3C] text-center bg-slate-300 border border-[#3C3C3C] text-[22.25px] font-medium font-['Montserrat']"
          >
            DISCARD
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCategory;
