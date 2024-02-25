import { RES_IMG } from "../utils/constants";

const RestaurantCard = (prop) => {
  const { resDetails } = prop;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resDetails.info;

  return (
    <div className="w-52 bg-gray-200 m-4 rounded-lg overflow-hidden hover:scale-105 duration-300">
      <img src={RES_IMG + cloudinaryImageId} alt="restaurantImages" />
      <h1 className="p-2 font-bold">{name}</h1>
      <h2 className="p-2 font-semibold">{cuisines.join(", ")}</h2>
      <h3 className="p-2 font-semibold">{avgRating}</h3>
      <h3 className="p-2 font-semibold">{costForTwo}</h3>
      <h3 className="p-2 font-semibold">{deliveryTime + " minutes"}</h3>
    </div>
  );
};
export default RestaurantCard;
