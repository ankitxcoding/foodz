import { RES_CARD_API } from "../utils/constants";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
      <div className="m-4 flex justify-center">
        <input
          className="border-2 border-black w-1/4 px-4 py-2 m-1 rounded-md"
          type="text"
          placeholder="Search Restaurants"
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="border-2 border-black bg-black text-white px-4 py-2 m-1 rounded-md"
          onClick={searchForRestaurants}
        >
          Search
        </button>
        <button
          className="border-2 border-black bg-black text-white px-4 py-2 m-1 rounded-md"
          onClick={topRatedRestaurants}
        >
          {topRatedRestaurantsText}
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"restaurants/" + restaurant?.info?.id}
            className="mt-4"
          >
            <RestaurantCard resDetails={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default RestaurantContainer;
