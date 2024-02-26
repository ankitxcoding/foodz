import { RES_CARD_API } from "../utils/constants";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchRestaurant, setSearchRestaurant] = useState("");

  const [topRatedRestaurantsText, setTopRatedRestaurantsText] = useState(
    "Top Rated Restaurants"
  );

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
    setFilteredRestaurants(restaurantData);
    console.log(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const topRatedRestaurants = () => {
    const filteredTopRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant?.info?.avgRating >= 4.5
    );
    filteredRestaurants.length === listOfRestaurants.length
      ? setFilteredRestaurants(filteredTopRestaurants)
      : setFilteredRestaurants(listOfRestaurants);
    topRatedRestaurantsText === "Top Rated Restaurants"
      ? setTopRatedRestaurantsText("See All Restaurants")
      : setTopRatedRestaurantsText("Top Rated Restaurants");
  };

  const searchForRestaurants = () => {
    const searchResult = listOfRestaurants.filter((restaurant) =>
      restaurant?.info?.name
        .toLowerCase()
        .includes(searchRestaurant.toLowerCase())
    );
    setFilteredRestaurants(searchResult);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchForRestaurants();
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="m-4">
        <input
          className="border-2 border-black px-2 m-1 rounded-md"
          type="text"
          placeholder="Search Restaurants"
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="border-2 border-black px-2 m-1 rounded-md"
          onClick={searchForRestaurants}
        >
          Search
        </button>
        <button
          className="border-2 border-black px-2 m-1 rounded-md"
          onClick={topRatedRestaurants}
        >
          {topRatedRestaurantsText}
        </button>
      </div>
      <div>
        <ul className="flex flex-wrap">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.info?.id}
              resDetails={restaurant}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
export default RestaurantContainer;
