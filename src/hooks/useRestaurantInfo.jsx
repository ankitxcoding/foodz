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
    const checkJsonData = async (jsonData) => {
      for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
        let checkData = json?.data?.cards[i]?.card?.card?.info;
        if (checkData !== undefined) {
          return checkData;
        }
      }
    };
    const restaurantInfoData = await checkJsonData(json);
    setRestaurantInfo(restaurantInfoData);
  };
  return restaurantInfo;
};

export default useRestaurantInfo;
