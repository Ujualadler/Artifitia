import React, { useRef, useState } from "react";

function AddProduct({ show, categories }) {
  const [images, setImages] = useState([null, null, null]);
  const imgRefs = [useRef(null), useRef(null), useRef(null)];
  const [category, setCategory] = useState("");

  const uploadImage = (index, e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const allowedTypes = [
        "image/jpeg",
        "image/webp",
        "image/png",
        "image/gif",
        "image/jpg",
      ];
      if (!allowedTypes.includes(selectedImage.type)) {
        errorToast("Please select a valid image (JPEG, PNG, or GIF).");
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onload = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    } else {
      const updatedImages = [...images];
      updatedImages[index] = null;
      setImages(updatedImages);
    }
  };

  return (
    <div className="h-screen z-50 flex justify-center items-center w-full absolute top-0  bg-gray-600 bg-opacity-60 ">
      <div className="bg-white h-[95%] rounded-xl w-[55%] p-4 flex justify-center flex-col items-center">
        <div className="text-center text-neutral-700 text-2xl font-semibold font-['Montserrat']">
          Add Product
        </div>
        <div className="w-full flex justify-between p-3 ">
          <label
            className=" h-[45px] text-neutral-700 text-opacity-40 text-[25.01px] font-medium font-['Montserrat']"
            htmlFor=""
          >
            Title:
          </label>
          <input
            className="w-[79%] p-2 h-[45px] rounded-[14.84px] border-2 border-neutral-700 border-opacity-40"
            placeholder="Enter product name"
            type="text"
          />
        </div>
        <div className="w-full flex justify-between p-3 ">
          <label
            className=" h-[45px] text-neutral-700 text-opacity-40 text-[25.01px] font-medium font-['Montserrat']"
            htmlFor=""
          >
            Ram:
          </label>
          <div className="w-[79%] flex gap-2">
            <input
              className="w-[49%] p-2 h-[45px] rounded-[14.84px] border-2 border-neutral-700 border-opacity-40"
              placeholder="Ram"
              type="number"
            />
            <input
              className="w-[49%] p-2 h-[45px] rounded-[14.84px] border-2 border-neutral-700 border-opacity-40"
              placeholder="Price"
              type="number"
            />
          </div>
        </div>
        <div className="w-full flex justify-between p-3 ">
          <label
            className=" h-[45px] text-neutral-700 text-opacity-40 text-[25.01px] font-medium font-['Montserrat']"
            htmlFor=""
          >
            Total Products:
          </label>

          <input
            className="w-[10%] p-2 h-[45px] rounded-[14.84px] border-2 border-neutral-700 border-opacity-40"
            placeholder="1"
            type="number"
          />
          <label
            className=" h-[45px] text-neutral-700 text-opacity-40 text-[25.01px] font-medium font-['Montserrat']"
            htmlFor=""
          >
            Sub Categories:
          </label>
          <select
            className="w-[45%] mb-2 p-2 h-[45px] text-slate-400 rounded-[14.84px] border-2 border-neutral-700 border-opacity-40"
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
        </div>
        <div className="w-full flex justify-between p-3 ">
          <label
            className=" h-[45px] text-neutral-700 text-opacity-40 text-[25.01px] font-medium font-['Montserrat']"
            htmlFor=""
          >
            Add Description:
          </label>
          <textarea
            className="w-[83%] p-2 h-[45px] rounded-[14.84px] border-2 border-neutral-700 border-opacity-40"
            placeholder="Enter description"
            type="text"
          />
        </div>

        <div className="w-full flex justify-start gap-3 p-3 mt-5 ">
          <label
            className=" h-[45px] text-neutral-700  text-opacity-40 text-[25.01px] font-medium font-['Montserrat']"
            htmlFor=""
          >
            Upload Images:
          </label>
          {images.map((image, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  imgRefs[index].current.click();
                }}
                className="h-[65px] rounded-[14.84px] border-2 border-neutral-700 border-opacity-40 cursor-pointer"
              >
                <img
                  className="h-16 w-16 p-2"
                  src={
                    image
                      ? image
                      : "https://cdn.pixabay.com/photo/2019/12/08/04/55/box-4680467_1280.png"
                  }
                  alt=""
                />
              </div>
              <input
                hidden
                ref={imgRefs[index]}
                onChange={(e) => uploadImage(index, e)}
                type="file"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end w-full pr-4 items-center mt-2 gap-2">
          <button className="w-[108px] h-[45px] bg-amber-500 text-center text-white text-[22.25px] font-medium font-['Montserrat']">
            ADD
          </button>
          <button
            onClick={() => show(false)}
            className="w-[108px] h-[45px] text-[#3C3C3C] text-center bg-slate-300 border border-[#3C3C3C] text-[22.25px] font-medium font-['Montserrat']"
          >
            DISCARD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
