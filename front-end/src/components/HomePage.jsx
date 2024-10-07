"use client";

import { useEffect, useState } from "react";

import { BACKEND_POINT } from "@/constants/constant";
import { AddNewProducts } from "./AddNewProduct";
import { ProductCard } from "./ProductCard";

export const HomePage = () => {
  const [products, setProducts] = useState([]); //get huselteer fetch hiisen datag hadgalah
  const [selectedProduct, setSelectedProduct] = useState({});
  const [product, setProduct] = useState({});

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_POINT}/products`);
      const responseData = await response.json();
      setProducts(responseData?.products);
    } catch (error) {
      console.log("error garlaa");
    }
  };

  const handleAddProduct = async (event) => {
    try {
      event.preventDefault();
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      };
      const response = await fetch(`${BACKEND_POINT}/product`, options);
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, data.product]);
    } catch {
      console.log("error");
    }

    setProduct({
      productName: "",
      category: "",
      price: "",
    });
    document.getElementById("my_modal_1").close();
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="container ">
        <AddNewProducts
          setProducts={setProducts}
          handleAddProduct={handleAddProduct}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {products?.map((product) => {
          return (
            <ProductCard
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
