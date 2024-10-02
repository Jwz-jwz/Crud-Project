"use client";

import { useEffect, useState } from "react";
import { AddNewProduct } from "./NewProduct";

export const HomePage = () => {
  const BACKEND_ENDPOINT = "http://localhost:7777";

  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const productData = {
        productName: event.target.productName.value,
        category: category,
        price: event.target.price.value,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      };

      const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
      const data = await response.json();

      setProducts((prev) => [...prev, data?.product]);
    } catch {
      console.log("aldaa garlaa");
    }
  };
  console.log(products);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/products`);
      const data = await response?.json();
      setProducts(data?.products);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add product
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add product</h3>
          <p className="py-4">Product name</p>
          <input
            name="productName"
            type="text"
            className="bg-white text-black"
          />
          <p className="py-4">Product category</p>
          <select onChange={handleCategory} className="bg-white" name="" id="">
            <option value="category">Category</option>
            <option value="shirts">Shirts</option>
            <option value="pants">Pants</option>
            <option value="outer">Outer</option>
            <option value="shoes">Shoes</option>
          </select>
          <p className="py-4">Price</p>
          <input name="price" type="text" className="bg-white  text-black" />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
            <form method="dialog">
              <button onClick={handleOnSubmit} className="btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="bg-white">
        {products?.map((product) => {
          <AddNewProduct
            productName={product?.productName}
            category={product?.category}
            price={product?.pric}
          />;
        })}
      </div>
    </div>
  );
};
