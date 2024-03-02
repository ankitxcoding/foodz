import { RES_IMG } from "../utils/constants";

const ItemList = (prop) => {
  const { items } = prop;

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
                {item?.card?.info?.name} - ₹{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price / 100}
              </h3>
              <p className="text-xs w-4/5 text-gray-500">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-40">
              <img
                src={RES_IMG + item?.card?.info?.imageId}
                alt="itemImg"
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
