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
  const handleDelete = async (id) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      };
      const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
      const data = await response.json();

      setProducts((prevProducts) =>
        prevProducts.filter((product) => data?.product?.id !== product?.id)
      );
    } catch {
      console.log("error");
    }
    // document.getElementById("my_modal_2").close();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="container flex justify-center mt-[20px  ]">
        <AddNewProducts
          setProducts={setProducts}
          handleAddProduct={handleAddProduct}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-4 gap-6 mt-6 container justify-center items-center">
        {products?.map((product) => {
          return (
            <ProductCard
              product={product}
              setProducts={setProducts}
              setSelectedProduct={setSelectedProduct}
              selectedProduct={selectedProduct}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};
