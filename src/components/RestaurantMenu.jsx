import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../hooks/useRestaurantInfo";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { RES_IMG } from "../utils/constants";
import MenuItemCategory from "./MenuItemCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantInfo(resId);
  const restaurantMenu = useRestaurantMenu(resId);

  if (!restaurantInfo || !restaurantMenu) {
    return <Shimmer />;
  }

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    costForTwoMessage,
  } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    restaurantInfo;

  return (
    <div className="m-4 grid place-items-center">
      <div className="flex justify-center shadow-md shadow-gray-300 px-5">
        <div className="m-4">
          <img
            src={RES_IMG + cloudinaryImageId}
            alt="restaurantImg"
            className="w-60 rounded-md"
          />
        </div>
        <div className="m-4">
          <h1 className="m-2 text-5xl font-bold">{name}</h1>
          <h2 className="m-2 text-3xl font-semibold">{cuisines.join(", ")}</h2>
          <h3 className="m-2">
            <i
              className={`fa-solid fa-star p-1 text-white rounded-full text-[12px] ${
                avgRating < 4 ? "bg-red-600" : "bg-green-600"
              }`}
            ></i>{" "}
            {avgRating} • {deliveryTime} minutes • {costForTwoMessage}
          </h3>
        </div>
      </div>
      <div className="w-1/2 m-4">
        <h2 className="text-4xl font-bold m-4 border-b border-black py-2">Menu Items</h2>
        {restaurantMenu.map((category) => (
          <h3 key={category?.card?.card?.title} className="mx-6"><MenuItemCategory data={category?.card?.card} /></h3>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
