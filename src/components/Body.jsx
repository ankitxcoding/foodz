import { RES_CARD_API } from "../utils/constants";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../hooks/useNetworkStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchRestaurant, setSearchRestaurant] = useState("");

  const [topRatedRestaurantsText, setTopRatedRestaurantsText] = useState(
    "Top Rated Restaurants"
  );

  useEffect(() => {
    fetchData();
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
    setFilteredRestaurants(restaurantData);
  };

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

  const networkStatus = useNetworkStatus();
  if (networkStatus === false)
    return (
      <h1 className="m-4 p-4 text-5xl font-semibold">
        Looks like you are offline! Please check your internet connection.
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="m-4 flex justify-center">
        <input
          className="border-2 border-black font-semibold w-1/4 px-4 py-2 m-1 rounded-md"
          type="text"
          placeholder="Search Restaurants"
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="border-2 border-black bg-black text-white font-semibold hover:text-green-500 px-4 py-2 m-1 rounded-md"
          onClick={searchForRestaurants}
        >
          Search
        </button>
        <button
          className="border-2 border-black bg-black text-white font-semibold hover:text-green-500 px-4 py-2 m-1 rounded-md"
          onClick={topRatedRestaurants}
        >
          {topRatedRestaurantsText}
        </button>
      </div>
      <div className="flex flex-wrap justify-center mb-10">
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
export default Body;
