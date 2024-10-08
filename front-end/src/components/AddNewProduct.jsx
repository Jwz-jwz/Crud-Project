import { useState } from "react";

export const AddNewProducts = ({ setProducts }) => {
  const [product, setProduct] = useState({});

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
      console.log(data.product);

      setProducts((prevProducts) => [...prevProducts, data?.product]);
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
            onChange={handleInputChange}
            name="productName"
            type="text"
            className="bg-white text-black border border-1"
            value={product?.productName}
          />
          <p className="py-4">Product category</p>
          <input
            onChange={handleInputChange}
            name="category"
            type="text"
            className="bg-white text-black border border-1"
            value={product?.category}
          />
          <p className="py-4">Price</p>
          <input
            onChange={handleInputChange}
            name="price"
            type="text"
            className="bg-white  text-black border border-1"
            value={product?.price}
          />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
            <form method="dialog">
              <button onClick={handleAddProduct} className="btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
