import { useEffect, useState } from "react";
import { RES_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_API + resId);
    const json = await data.json();
    const checkJsonData = async (jsonData) => {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        let checkData =
          json?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
            ?.card?.card;
        if (checkData !== undefined) {
          return checkData;
        }
      }
    };
    const menuData = await checkJsonData(json);
    setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenu(menuData);
  };

  if (!restaurantInfo) {
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
      <h2 className="mt-4 text-3xl font-semibold">{cuisines.join(", ")} - {costForTwoMessage}</h2>
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
