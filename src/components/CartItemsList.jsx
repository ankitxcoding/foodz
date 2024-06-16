import { useDispatch } from "react-redux";
import { RES_IMG } from "../utils/constants";
import { removeItem } from "../store/slices/cartSlice";

const CartItemList = (prop) => {
  const { items } = prop;
  const dispatch = useDispatch();

  const handleRemovingItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 border-b border-gray-400"
        >
          <div className="flex justify-between w-full">
            <div className="w-full">
              <h3 className="font-semibold text-gray-700">
                {item?.card?.info?.name} - ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </h3>
              <p className="text-xs w-4/5 text-gray-500">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-40 relative">
              <img
                src={RES_IMG + item?.card?.info?.imageId}
                alt="itemImg"
                className="w-full rounded-md"
              />
              <button
                onClick={() => handleRemovingItem(item?.card?.info?.id)}
                className="mx-9 py-2 px-4 text-xs font-semibold bg-black text-lime-500 border border-gray-500 rounded-md absolute -bottom-1 hover:text-white"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CartItemList;
