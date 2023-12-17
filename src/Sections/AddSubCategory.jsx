import React, { useEffect, useState } from "react";
import UserAxios from "../API/UserApi";
import { toast } from "react-toastify";

function AddSubCategory({ show, categories }) {
  const userAxios = UserAxios();
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const addSubCategory = async (e) => {
    e.preventDefault();
    try {
      if (!category.trim() || !subCategory.trim()) {
        toast.error("Fill both filed");
        return;
      }

      const result = await userAxios.post("/addSubCategory", {
        category,
        subCategory,
      });

      if (result.data.duplicate) {
        toast.error("Sub Category Already Exists");
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
    <div className="fixed top-0 left-0 h-screen w-screen z-50 flex justify-center items-center bg-gray-600 bg-opacity-60">
      <form
        onSubmit={addSubCategory}
        className="bg-white h-80 rounded-xl w-[400px] flex justify-center flex-col items-center"
      >
        <div className="h-[72px] text-center text-neutral-700 text-2xl font-semibold font-['Montserrat']">
          Add Sub Category
        </div>
        <select
          className="w-[85%] mb-2 p-2 h-[70.01px] text-slate-400 rounded-[14.84px] border-2 border-neutral-700 border-opacity-40"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled hidden>
            Select category
          </option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.category}>
              {cat.category}
            </option>
          ))}
        </select>

        <input
          className="w-[85%] p-2 h-[70.01px] rounded-[14.84px] border-2 border-neutral-700 border-opacity-40"
          placeholder="Enter sub category name"
          type="text"
          onChange={(e) => setSubCategory(e.target.value)}
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

export default AddSubCategory;
