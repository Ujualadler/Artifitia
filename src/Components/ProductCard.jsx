import React from "react";

function ProductCard({}) {
  return (
    <div className="flex flex-col  mx-2 h-96">
      <div className="p-3 rounded-[19.67px] border border-zinc-400">
        <div className="flex items-center justify-end">
          <img
            src="/wishlist.png"
            className="rounded-full bg-[#B3D4E5] p-2 "
            alt=""
          />
        </div>
        <div className="flex justify-center items-center">
          <img src="/lap.png" className="h-48" w-32 alt="" />
        </div>
        <div className="text-sky-900 mb-2 text-[17.09px] font-medium font-['Poppins']">
          Tablet as a laptop
        </div>
        <div className="text-neutral-600 mb-2 text-[17.09px] font-semibold font-['Poppins']">
          $11,70
        </div>
        <div className="w-[117.02px] h-[14.65px] justify-start items-center gap-[10.82px] inline-flex">
          <img src="/vector.png" alt="" />
          <img src="/vector.png" alt="" />
          <img src="/vector.png" alt="" />
          <img src="/vector.png" alt="" />
          <img src="/vector.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
