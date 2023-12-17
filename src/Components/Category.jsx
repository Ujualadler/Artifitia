import React, { useState } from "react";

function Category({ category }) {
  const [showSubCategory, setShowSubCategory] = useState(false);

  return (
    <>
      <div className="flex justify-between mr-5 hover:bg-slate-300 p-1 text-neutral-800 text-md font-normal font-['Poppins']">
        <h1>{category?.category}</h1>
        <div onClick={() => setShowSubCategory(!showSubCategory)}>
          {showSubCategory ? (
            <img src="/down.png" alt="" />
          ) : (
            <img src="/arrow.png" alt="" />
          )}
        </div>
      </div>
      {showSubCategory && category.subcategories.length > 0
        ? category.subcategories.map((data, index) => (
            <div key={index} className="flex justify-start gap-3">
              <input
                type="checkbox"
                className="w-[26px] h-[26px] bg-neutral-700 rounded-3xl"
              />
              <div className="text-neutral-800 text-md font-normal font-['Poppins']">
                {data?.SubCategory}{" "}
              </div>
            </div>
          ))
        : ""}
    </>
  );
}

export default Category;
