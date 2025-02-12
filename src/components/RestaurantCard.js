import { BRAND_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;
  const { id, name, cuisines, cloudinaryImageId } = resData;

  //console.log(cuisines);
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={BRAND_LOGO + cloudinaryImageId} />
      </div>
      <div className="product-info">
        <h4>{name}</h4>
        <p>{cuisines.join(", ")}</p>
        <p></p>
        <p></p>
        <a className="btn">Link</a>
      </div>
    </div>
  );
};

export default RestaurantCard;
