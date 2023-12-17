import React, { useEffect, useState } from "react";
import Navbar from "../Sections/Navbar";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Category from "../Components/Category";
import Pagination from "../Components/Pagination";
import AddCategory from "../Sections/AddCategory";
import AddSubCategory from "../Sections/AddSubCategory";
import AddProduct from "../Sections/AddProduct";
import UserAxios from "../API/UserApi";

function Home() {
  const navigate = useNavigate();
  const userAxios = UserAxios();

  const [showCategory, setShowCategory] = useState(false);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await userAxios.get("/findCategory");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [showCategory, showSubCategory]);

  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center ml-10">
            <h1 className="text-neutral-700 text-base font-medium font-['Poppins']">
              Home
            </h1>
            <img src="/arrow.png" alt="" />
          </div>

          <div className="flex items-center justify-center gap-2 mr-10">
            <Button heading="Add category" setShow={setShowCategory} />
            <Button heading="Add sub category" setShow={setShowSubCategory} />
            <Button heading="Add product" setShow={setShowProduct} />
          </div>
        </div>
        <div className="grid grid-cols-4 mr-8 ">
          <div className="max-h-80 flex flex-col justify-start  gap-2 overflow-auto ml-9">
            <div className="text-sky-900 text-lg p-1 font-semibold font-['Poppins']">
              Categories
            </div>
            <div className=" text-neutral-800 text-lg p-1 hover:bg-slate-200  font-normal font-['Poppins']">
              All categories
            </div>
            {categories.length
              ? categories.map((data) => <Category category={data} />)
              : ""}
          </div>

          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Pagination />
      </div>
      {showCategory ? <AddCategory show={setShowCategory} /> : ""}
      {showSubCategory ? (
        <AddSubCategory categories={categories} show={setShowSubCategory} />
      ) : (
        ""
      )}
      {showProduct ? (
        <AddProduct categories={categories} show={setShowProduct} />
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
