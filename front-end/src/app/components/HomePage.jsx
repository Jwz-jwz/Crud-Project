"use client";
import { useState } from "react";
import { EditProduct } from "./EditProduct";
import { NewProduct } from "./NewProduct";
import { ProductCard } from "./ProductCard";

export default function HomePage() {
  const [addPro, setAddPro] = useState(false);

  const handleNewProduct = () => {
    setAddPro(!addPro);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="container ">
        <header className="h-[130px] border border-grey rounded-[20px] flex items-center justify-between p-2 bg-blue-300">
          <img
            className="w-[100px] h-[100px] rounded-[20px]"
            src="./logo.png"
            alt=""
          />
          <input
            placeholder="search"
            className="w-[500px] border border-grey rounded-[10px]"
            type="text"
          />
          <button onClick={handleNewProduct} className="btn mr-[20px]">
            Add new product
          </button>
        </header>
      </div>
      <div className="container flex justify-center items-center">
        <div className={`${addPro ? "flex" : "hidden"}`}>
          <NewProduct handleNewProduct={handleNewProduct} addPro={addPro} />
        </div>
        {/* <EditProduct />
        <ProductCard /> */}
      </div>
    </div>
  );
}
