"use client";

import { useEffect, useState } from "react";

import { BACKEND_POINT } from "@/constants/constant";
import { AddNewProducts } from "./AddNewProduct";
import { ProductCard } from "./ProductCard";

export const HomePage = () => {
  const [products, setProducts] = useState([]); //get huselteer fetch hiisen datag hadgalah
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

  return (
    <div className="w-full flex flex-col items-center">
      <div className="container flex justify-center mt-[20px  ]">
        <AddNewProducts setProducts={setProducts} />
      </div>
      <div className="grid grid-cols-4 gap-6 mt-6 container justify-center items-center">
        {products?.map((product) => {
          return (
            <ProductCard
              key={product?.id}
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
