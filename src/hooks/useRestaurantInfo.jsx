import { useState, useEffect } from "react";
import { RES_MENU_API } from "../utils/constants";

const useRestaurantInfo = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_API + resId);
    const json = await data.json();
    setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
  };
  return restaurantInfo;
};

export default useRestaurantInfo;
