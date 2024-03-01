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
    const checkCategoriesData = async (jsonData) => {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        let checkCategories =
          json?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        if (checkCategories !== undefined) {
          return checkCategories;
        }
      }
    };
    const categoriesData = await checkCategoriesData(json);
    const restaurantItemCategories = categoriesData.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    setRestaurantMenu(restaurantItemCategories);
  };
  return restaurantMenu;
};

export default useRestaurantMenu;
