import { BACKEND_ENDPOINT } from "@/constants/constant";
import { EditModal } from "./EditProduct";

export const ProductCard = ({
  product,
  selectedProduct,
  setSelectedProduct,
  setProducts,
}) => {
  const { productName, category, price } = product;

  const handleDelete = async (id) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      };

      const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedProduct),
      };
      const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
      const data = await response.json(response);
      setProducts(data?.products);
    } catch {
      console.log("error");
    }
    document.getElementById("my_modal_2").close();
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setSelectedProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  return (
    <div className="w-[364px] rounded-[20px] flex flex-col gap-4 p-6 border border-[#F4F4F4] bg-green-200">
      <div className="flex justify-between">
        <p>Барааны нэр: {productName}</p>
      </div>
      <p>Барааны ангилал: {category}</p>
      <p>Барааны үнэ: {price}</p>
      <div className="flex gap-2 items-center justify-end">
        <button onClick={() => handleDelete(product?.id)} className="btn">
          Delete
        </button>
        <EditModal
          product={product}
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};
