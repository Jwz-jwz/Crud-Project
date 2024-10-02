export const AddNewProduct = ({ productName, category, price }) => {
  // const { productName, category, price } = products;
  return (
    <div className="card bg-neutral text-neutral-content w-96">
      <div className="card-body items-center text-center">
        <h2 className="card-title">New product!</h2>
        <p>{productName}</p>
        <p>{category}</p>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Back</button>
          <button className="btn btn-ghost">Edit</button>
        </div>
      </div>
    </div>
  );
};
