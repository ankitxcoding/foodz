import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../hooks/useRestaurantInfo";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { RES_IMG } from "../utils/constants";

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

  const { itemCards } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    restaurantMenu;

  return (
    <div className="m-4 grid place-items-center">
      <div className="flex justify-center shadow-md shadow-gray-300 px-20">
        <div className="m-4">
          <img
            src={RES_IMG + cloudinaryImageId}
            alt="restaurantImg"
            className="w-60 rounded-md"
          />
        </div>
        <div className="m-4">
          <h1 className="text-5xl font-bold">{name}</h1>
          <h2 className="mt-4 text-3xl font-semibold">{cuisines.join(", ")}</h2>
          <h3 className="mt-4">
            <i
              className={`fa-solid fa-star p-1 text-white rounded-full text-[12px] ${
                avgRating < 4 ? "bg-red-600" : "bg-green-600"
              }`}
            ></i>{" "}
            {avgRating} • {deliveryTime} minutes • {costForTwoMessage}
          </h3>
        </div>
      </div>
      <div className="w-1/2 px-10">
        <h2 className="text-4xl font-semibold mt-4">Menu Items</h2>
        {itemCards.map((item, index) => (
          <div key={item?.card?.info?.id} className="text-xl font-semibold">
            ({index + 1}) {item?.card?.info?.name} - ₹
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
