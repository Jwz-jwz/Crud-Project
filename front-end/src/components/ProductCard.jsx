import { DeleteIcon } from "@/app/svg/DeletIcon";
import { EditIcon } from "@/app/svg/EditIcon";

export const ProductCard = ({
  handleDelete,
  product,
  setProducts,
  setSelectedProduct,
  selectedProduct,
}) => {
  const { productName, category, price } = product;
  return (
    <div className="w-[364px] rounded-[20px] flex flex-col gap-4 p-6 border border-[#F4F4F4] bg-green-100">
      <div className="flex justify-between">
        <p>Барааны нэр: {productName}</p>
        <div className="flex gap-2 items-center">
          <button onClick={() => handleDelete(product?.id)}>
            <DeleteIcon />
          </button>
          <button>
            <EditIcon />
          </button>
        </div>
      </div>
      <p>Барааны ангилал: {category}</p>
      <p>Барааны үнэ: {price}</p>
    </div>
  );
};
