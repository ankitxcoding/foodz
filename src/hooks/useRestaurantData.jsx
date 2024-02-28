import { useState, useEffect } from "react";
import { RES_CARD_API } from "../utils/constants";

const useRestaurantData = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_CARD_API);
    const json = await data.json();
    const checkJsonData = async (jsonData) => {
      for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        if (checkData !== undefined) {
          return checkData;
        }
      }
    };
    const restaurantData = await checkJsonData(json);
    setListOfRestaurants(restaurantData);
  };

  return listOfRestaurants;
};
export default useRestaurantData;
