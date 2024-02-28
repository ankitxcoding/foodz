import { useState, useEffect } from "react";
import { RES_MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

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
    setRestaurantMenu(menuData);
  };
  return restaurantMenu;
};

export default useRestaurantMenu;
