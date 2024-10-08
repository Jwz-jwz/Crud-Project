export const AddNewProducts = ({ handleAddProduct, handleInputChange }) => {
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
          />
          <p className="py-4">Product category</p>
          <input
            onChange={handleInputChange}
            name="category"
            type="text"
            className="bg-white text-black border border-1"
          />
          <p className="py-4">Price</p>
          <input
            onChange={handleInputChange}
            name="price"
            type="text"
            className="bg-white  text-black border border-1"
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
