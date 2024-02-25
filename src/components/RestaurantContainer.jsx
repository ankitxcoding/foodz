import { RES_CARD_API } from "../utils/constants";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

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
    console.log(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul className="flex flex-wrap">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resDetails={restaurant} />
        ))}
      </ul>
    </div>
  );
};
export default RestaurantContainer;
