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
    <div className="w-60 h-[95%] m-5 rounded-lg shadow-lg shadow-slate-300 overflow-hidden hover:scale-105 duration-300">
      <img src={RES_IMG + cloudinaryImageId} alt="restaurantImages" />
      <h1 className="p-2 font-bold">{name}</h1>
      <h2 className="p-2 font-semibold">{cuisines.join(", ")}</h2>
      <h3 className="p-2 font-semibold">
        <i
          className={`fa-solid fa-star p-1 text-white rounded-full text-[12px] ${
            avgRating < 4 ? "bg-red-600" : "bg-green-600"
          }`}
        ></i>{" "}
        {avgRating}
      </h3>
      <h3 className="p-2 font-semibold">{costForTwo}</h3>
      <h3 className="p-2 font-semibold">{deliveryTime + " minutes"}</h3>
    </div>
  );
};
export default RestaurantCard;
