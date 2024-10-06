"use client";

import { useEffect, useState } from "react";

import { BACKEND_POINT } from "@/constants/constant";
import { AddNewProducts } from "./AddNewProduct";
import { ProducCard } from "./Card";

export const HomePage = () => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_POINT}/products`);
      const responseData = await response.json();
      setProducts(responseData?.products);
    } catch (error) {
      console.log("error garlaa");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="container ">
        <AddNewProducts setProducts={setProducts} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {products?.map((product) => {
          return (
            <ProducCard
              product={product}
              setProducts={setProducts}
              setSelectedProduct={setSelectedProduct}
              selectedProduct={selectedProduct}
            />
          );
        })}
      </div>
    </div>
  );
};
