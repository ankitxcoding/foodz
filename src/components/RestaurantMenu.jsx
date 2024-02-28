import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../hooks/useRestaurantInfo";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantInfo(resId);
  const restaurantMenu = useRestaurantMenu(resId);

  if (!restaurantInfo || !restaurantMenu) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    restaurantInfo;

  const { itemCards } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    restaurantMenu;

  return (
    <div className="m-4 grid place-items-center">
      <h1 className="text-5xl font-bold">{name}</h1>
      <h2 className="mt-4 text-3xl font-semibold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <h2 className="text-4xl font-semibold mt-4">Menu Items</h2>
      <ul className="mt-4">
        {itemCards.map((item, index) => (
          <li key={item?.card?.info?.id} className="text-xl font-semibold">
            ({index + 1}) {item?.card?.info?.name} - ₹
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
