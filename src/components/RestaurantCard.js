import { BRAND_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  //console.log(props);
  const { resData } = props;
  const {
    id,
    name,
    cuisines,
    cloudinaryImageId,
    avgRatingString,
    sla: { slaString },
  } = resData?.info;

  //console.log(slaString);

  //console.log(cuisines);
  return (
    <div className="">
      <div className="product-img">
        <img src={BRAND_LOGO + cloudinaryImageId} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>
          {avgRatingString} | {slaString}
        </p>
        <p>{cuisines.join(", ")}</p>

        <p></p>
      </div>
    </div>
  );
};

export default RestaurantCard;
