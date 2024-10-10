export const EditModal = ({
  selectedProduct,
  handleInputChange,
  handleSubmit,
  setSelectedProduct,
  product,
}) => {
  const handleModalClick = () => {
    document.getElementById("my_modal_2").showModal();
    setSelectedProduct(product);
  };
  return (
    <div>
      <button className="btn" onClick={handleModalClick}>
        Edit product
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit product</h3>
          <p className="py-4">Product name</p>
          <input
            onChange={handleInputChange}
            name="productName"
            type="text"
            className="bg-white text-black border border-1"
            value={selectedProduct?.productName}
          />
          <p className="py-4">Product category</p>
          <input
            onChange={handleInputChange}
            name="category"
            type="text"
            className="bg-white text-black border border-1"
            value={selectedProduct?.category}
          />
          <p className="py-4">Price</p>
          <input
            onChange={handleInputChange}
            name="price"
            type="text"
            className="bg-white  text-black border border-1"
            value={selectedProduct?.price}
          />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
            <form method="dialog">
              <button onClick={handleSubmit} className="btn">
                Edit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
