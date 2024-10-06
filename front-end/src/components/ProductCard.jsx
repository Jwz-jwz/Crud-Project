import { DeleteIcon } from "../svg/DeletIcon";
import { EditIcon } from "../svg/EditIcon";

export const ProductCard = () => {
  return (
    <div className="w-[364px] rounded-[20px] flex flex-col gap-4 p-6 border border-[#F4F4F4]">
      <div className="flex justify-between">
        <p>Барааны нэр: </p>
        <div className="flex gap-2 items-center">
          <button>
            <DeleteIcon />
          </button>
          <button>
            <EditIcon />
          </button>
        </div>
      </div>
      <p>Барааны ангилал: </p>
      <p>Барааны үнэ: </p>
    </div>
  );
};
